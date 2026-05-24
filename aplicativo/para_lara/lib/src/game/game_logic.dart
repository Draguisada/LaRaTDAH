import '../config/level_config.dart';

const int corNenhuma = 999;
const int maxUndos = 10;

/// Estado de um tubo durante o jogo (índice 0 = bola do topo).
class TuboEstado {
  final TuboConfig config;
  List<int> bolas;

  TuboEstado({required this.config, List<int>? bolasIniciais})
      : bolas = List<int>.from(bolasIniciais ?? config.bolasIniciais);

  int get maxBolas => config.maxBolas;
  int get corRequerida => config.corRequerida;
  int get minimo => config.minimoAjustado;
  bool get excedeuMaximo => bolas.length > maxBolas;
}

/// Regras de functions.js: vitória, clique, undo.
class GameLogic {
  List<TuboEstado> tubos;
  int corSegurar = corNenhuma;
  final List<List<List<int>>> historico = [];
  bool assist = false;

  GameLogic(List<TuboConfig> configs)
      : tubos = configs
            .map((c) => TuboEstado(config: c, bolasIniciais: c.bolasIniciais))
            .toList() {
    _salvarEstadoInicial();
  }

  void _salvarEstadoInicial() {
    historico.clear();
    _gravarSnapshot();
  }

  void _gravarSnapshot() {
    final atual = tubos.map((t) => List<int>.from(t.bolas)).toList();
    if (historico.length <= maxUndos) {
      historico.add(atual);
    } else {
      historico.removeAt(0);
      historico.add(atual);
    }
  }

  /// handleClick de functions.js
  bool aoClicarTubo(int indice) {
    final tubo = tubos[indice];

    if (corSegurar != corNenhuma) {
      if (tubo.bolas.length < tubo.maxBolas) {
        tubo.bolas.insert(0, corSegurar);
        corSegurar = corNenhuma;
        _gravarSnapshot();
        return true;
      }
      _gravarSnapshot();
      return false;
    }

    if (tubo.bolas.isEmpty) return false;

    corSegurar = tubo.bolas.removeAt(0);
    return true;
  }

  /// checkWin de functions.js
  bool verificarVitoria() {
    for (final tubo in tubos) {
      final corPrincipal = tubo.corRequerida;
      final bolas = tubo.bolas;

      if (corPrincipal == corNenhuma) {
        if (bolas.isNotEmpty) return false;
        continue;
      }

      if (tubo.minimo > bolas.length) return false;

      int corEsperada = corPrincipal;
      if (corPrincipal == 0 || corPrincipal == corNenhuma) {
        if (bolas.isNotEmpty) {
          corEsperada = bolas.first;
        }
      } else {
        if (bolas.isEmpty) return false;
      }

      for (final cor in bolas) {
        if (cor != corEsperada) return false;
      }
    }
    return true;
  }

  /// loadState de functions.js — restaura penúltimo snapshot.
  bool desfazer() {
    if (historico.length < 2) return false;

    final anterior = historico[historico.length - 2];
    for (var i = 0; i < tubos.length; i++) {
      tubos[i].bolas = List<int>.from(anterior[i]);
    }
    corSegurar = corNenhuma;
    historico.removeLast();
    return true;
  }

  void reiniciar(List<TuboConfig> configs) {
    tubos = configs
        .map((c) => TuboEstado(config: c, bolasIniciais: c.bolasIniciais))
        .toList();
    corSegurar = corNenhuma;
    _salvarEstadoInicial();
  }

  void alternarAssist() => assist = !assist;
}
