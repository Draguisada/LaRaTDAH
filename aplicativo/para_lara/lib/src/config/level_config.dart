const double bolaSizePadrao = 55.0;

class TuboConfig {
  final int maxBolas;
  final int corRequerida;
  final int minimo;
  final int maiorQue;
  final List<int> bolasIniciais;

  const TuboConfig({
    required this.maxBolas,
    this.corRequerida = 0,
    this.minimo = 0,
    this.maiorQue = 0,
    this.bolasIniciais = const [],
  });

  int get minimoAjustado =>
      minimo < maxBolas ? minimo : maxBolas;
}

class LevelConfig {
  final int levelNumber;
  final String titulo;
  final double bolaSize;
  final List<TuboConfig> tubos;

  const LevelConfig({
    required this.levelNumber,
    required this.titulo,
    this.bolaSize = bolaSizePadrao,
    this.tubos = const [],
  });
}
