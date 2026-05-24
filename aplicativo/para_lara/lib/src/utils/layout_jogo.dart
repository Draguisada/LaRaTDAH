import 'dart:math' as math;
import 'dart:ui' show Size;
import '../config/cores.dart';
import '../config/level_config.dart';

const double espacamentoTubos = 6.0;
const double reservaSegurando = 8.0;
const double tamanhoBolaMinimo = 14.0;

/// Altura visual do tubo (sempre baseada em maxBolas).
double alturaTuboVisual(TuboConfig tubo, double bolaSize) =>
    bolaSize * tubo.maxBolas + espessuraBordaTubo;

/// Mede o tamanho total do tabuleiro com bolas de tamanho [bolaSize].
Size medirTabuleiroComLargura(
  LevelConfig config,
  double bolaSize,
  double larguraMax,
) {
  final tubos = config.tubos;
  final n = tubos.length;
  if (n == 0) return Size.zero;

  final tuboW = bolaSize;
  final porLinha = math.max(
    1,
    ((larguraMax + espacamentoTubos) / (tuboW + espacamentoTubos)).floor(),
  );

  var totalH = 0.0;
  var totalW = 0.0;
  var idx = 0;
  var primeiraLinha = true;

  while (idx < n) {
    final fim = math.min(idx + porLinha, n);
    final linha = tubos.sublist(idx, fim);
    final alturaLinha = linha
        .map((t) => alturaTuboVisual(t, bolaSize))
        .reduce(math.max);

    if (!primeiraLinha) totalH += espacamentoTubos;
    totalH += alturaLinha;
    primeiraLinha = false;

    final colunas = linha.length;
    final larguraLinha =
        colunas * tuboW + (colunas - 1) * espacamentoTubos;
    totalW = math.max(totalW, larguraLinha);

    idx = fim;
  }

  return Size(totalW, totalH);
}

bool _layoutCabe(Size area, LevelConfig config, double size) {
  final medida = medirTabuleiroComLargura(config, size, area.width);
  return medida.height <= area.height && medida.width <= area.width;
}

/// Tamanho ideal da bola; o [FittedBox] na tela encolhe se ainda não couber.
double calcularTamanhoBola(Size areaExpandida, LevelConfig config) {
  if (config.tubos.isEmpty) return config.bolaSize;

  for (var size = config.bolaSize; size >= tamanhoBolaMinimo; size -= 1) {
    final alturaJogo = areaExpandida.height - size - reservaSegurando;
    if (alturaJogo <= 0) continue;

    final areaJogo = Size(areaExpandida.width, alturaJogo);
    if (_layoutCabe(areaJogo, config, size)) {
      return size;
    }
  }

  return tamanhoBolaMinimo;
}
