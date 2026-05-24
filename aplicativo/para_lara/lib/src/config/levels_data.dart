import 'level_config.dart';

const int nivelMaximoJogo = 43;

/// Tamanhos menores para níveis com muitos tubos/bolas (como no JS).
const double _bolaPequena = 38;
const double _bolaMedia = 42;

LevelConfig configNivel(int level) {
  switch (level) {
    case 1:
      return const LevelConfig(
        levelNumber: 1,
        titulo: 'Joguinho TDAH pra LaRa :D',
        tubos: [
          TuboConfig(maxBolas: 3, corRequerida: 0, bolasIniciais: [2, 3]),
          TuboConfig(maxBolas: 3),
        ],
      );

    case 2:
      return const LevelConfig(
        levelNumber: 2,
        titulo: 'Mais parecido com aqueles anúncios',
        bolaSize: 45,
        tubos: [
          TuboConfig(
              maxBolas: 4,
              corRequerida: 999,
              bolasIniciais: [2, 3, 4, 2]),
          TuboConfig(
              maxBolas: 4,
              corRequerida: 999,
              bolasIniciais: [3, 3, 4, 2]),
          TuboConfig(
              maxBolas: 4,
              corRequerida: 0,
              minimo: 3,
              bolasIniciais: [4, 2, 3, 4]),
          TuboConfig(maxBolas: 4, corRequerida: 0, minimo: 3),
          TuboConfig(maxBolas: 4, corRequerida: 0, minimo: 3),
        ],
      );

    case 3:
      return const LevelConfig(
        levelNumber: 3,
        titulo: 'Tubos invisíveis!',
        bolaSize: 40,
        tubos: [
          TuboConfig(
              maxBolas: 6,
              corRequerida: 999,
              bolasIniciais: [6, 7, 8, 8, 7, 6]),
          TuboConfig(maxBolas: 5, corRequerida: 0, minimo: 4),
          TuboConfig(maxBolas: 5, corRequerida: 0, minimo: 4),
          TuboConfig(maxBolas: 5, corRequerida: 0, minimo: 4),
          TuboConfig(
              maxBolas: 6,
              corRequerida: 999,
              bolasIniciais: [6, 7, 8, 8, 7, 6]),
        ],
      );

    case 4:
      return const LevelConfig(
        levelNumber: 4,
        titulo: 'Começa a doer — clica no título pra mostrar as cores!',
        bolaSize: 40,
        tubos: [
          TuboConfig(
              maxBolas: 6,
              corRequerida: 0,
              bolasIniciais: [11, 6, 7, 8, 11, 6]),
          TuboConfig(
              maxBolas: 6,
              corRequerida: 0,
              bolasIniciais: [11, 11, 6, 7, 11, 8]),
          TuboConfig(
              maxBolas: 6, corRequerida: 0, bolasIniciais: [6, 11, 8, 8]),
          TuboConfig(
              maxBolas: 6, corRequerida: 0, bolasIniciais: [7, 6, 7]),
          TuboConfig(
              maxBolas: 6,
              corRequerida: 0,
              bolasIniciais: [8, 6, 7, 8, 7]),
        ],
      );

    case 5:
      return const LevelConfig(
        levelNumber: 5,
        titulo: 'Meu deus quanto',
        bolaSize: _bolaPequena,
        tubos: [
          TuboConfig(maxBolas: 10, bolasIniciais: [5]),
          TuboConfig(
              maxBolas: 10,
              bolasIniciais: [6, 6, 6, 8, 8, 6, 9, 6, 6]),
          TuboConfig(
              maxBolas: 10,
              bolasIniciais: [7, 7, 7, 7, 7, 7, 7, 7, 7]),
          TuboConfig(
              maxBolas: 10,
              bolasIniciais: [8, 6, 6, 8, 5, 8, 5, 5, 5]),
          TuboConfig(
              maxBolas: 10,
              bolasIniciais: [9, 6, 6, 5, 8, 8, 5, 5, 5, 7]),
          TuboConfig(
              maxBolas: 10, bolasIniciais: [9, 9, 9, 9, 9, 9, 9, 9]),
          TuboConfig(maxBolas: 10, bolasIniciais: [8, 8, 8]),
        ],
      );

    case 6:
      return const LevelConfig(
        levelNumber: 6,
        titulo: 'Tubos coloridos!',
        tubos: [
          TuboConfig(
              maxBolas: 4,
              corRequerida: 6,
              minimo: 2,
              bolasIniciais: [6, 6, 8, 8]),
          TuboConfig(maxBolas: 3),
          TuboConfig(maxBolas: 3, corRequerida: 8),
        ],
      );

    case 7:
      return const LevelConfig(
        levelNumber: 7,
        titulo: '... e tamanhos diferentes?',
        bolaSize: 48,
        tubos: [
          TuboConfig(maxBolas: 4, bolasIniciais: [4, 2]),
          TuboConfig(maxBolas: 2, corRequerida: 2, minimo: 2),
          TuboConfig(maxBolas: 1, corRequerida: 3, minimo: 1),
          TuboConfig(
              maxBolas: 3, corRequerida: 4, minimo: 2, bolasIniciais: [2, 4]),
          TuboConfig(maxBolas: 4, bolasIniciais: [3]),
        ],
      );

    case 8:
      return const LevelConfig(
        levelNumber: 8,
        titulo: '.. e um tico de lógica',
        tubos: [
          TuboConfig(maxBolas: 4, bolasIniciais: [4, 4, 3]),
          TuboConfig(maxBolas: 2, corRequerida: 3, minimo: 2),
          TuboConfig(maxBolas: 4, corRequerida: 2, minimo: 1),
          TuboConfig(maxBolas: 4, bolasIniciais: [3, 4, 2]),
        ],
      );

    case 9:
      return const LevelConfig(
        levelNumber: 9,
        titulo: 'de 0 a 100 né',
        bolaSize: _bolaPequena,
        tubos: [
          TuboConfig(maxBolas: 10, bolasIniciais: [5]),
          TuboConfig(
              maxBolas: 10,
              corRequerida: 6,
              minimo: 10,
              bolasIniciais: [6, 6, 6, 8, 8, 6, 9, 6, 6]),
          TuboConfig(
              maxBolas: 10,
              bolasIniciais: [7, 7, 7, 7, 7, 7, 7, 7, 7]),
          TuboConfig(
              maxBolas: 10,
              bolasIniciais: [8, 6, 6, 8, 5, 8, 5, 5, 5]),
          TuboConfig(
              maxBolas: 10,
              bolasIniciais: [9, 6, 6, 5, 8, 8, 5, 5, 5, 7]),
          TuboConfig(
              maxBolas: 10, bolasIniciais: [9, 9, 9, 9, 9, 9, 9, 9]),
          TuboConfig(
              maxBolas: 10, corRequerida: 8, minimo: 10, bolasIniciais: [8, 8, 8]),
        ],
      );

    case 10:
      return const LevelConfig(
        levelNumber: 10,
        titulo: 'muito azulzinho',
        bolaSize: _bolaPequena,
        tubos: [
          TuboConfig(maxBolas: 8, bolasIniciais: [8, 8, 8, 8, 7]),
          TuboConfig(maxBolas: 5, bolasIniciais: [6, 6, 7]),
          TuboConfig(
              maxBolas: 8, bolasIniciais: [8, 8, 6, 6, 8, 8, 6, 7]),
          TuboConfig(maxBolas: 8, bolasIniciais: [6, 6, 8, 6, 8, 7]),
          TuboConfig(maxBolas: 6, bolasIniciais: [8, 8, 6, 7]),
          TuboConfig(maxBolas: 8, bolasIniciais: [10, 10, 10, 10, 10]),
        ],
      );

    case 11:
      return const LevelConfig(
        levelNumber: 11,
        titulo: 'ficando com pouco espaço...',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 7,
              corRequerida: 7,
              minimo: 5,
              bolasIniciais: [8, 12, 12, 10, 8, 8]),
          TuboConfig(maxBolas: 5, bolasIniciais: [12, 10, 8, 8, 7]),
          TuboConfig(maxBolas: 7, bolasIniciais: [7, 8, 12, 10, 12, 8]),
          TuboConfig(maxBolas: 7, bolasIniciais: [10, 12, 10]),
          TuboConfig(maxBolas: 5, corRequerida: 10, bolasIniciais: [7, 7, 7, 7]),
        ],
      );

    case 12:
      return const LevelConfig(
        levelNumber: 12,
        titulo: 'Meu deus quanto tubo colorido',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 8,
              corRequerida: 8,
              minimo: 7,
              bolasIniciais: [12, 12, 8, 12, 10, 10, 8]),
          TuboConfig(
              maxBolas: 8,
              corRequerida: 12,
              minimo: 5,
              bolasIniciais: [10, 4, 10, 4, 8, 4, 12]),
          TuboConfig(
              maxBolas: 7,
              corRequerida: 10,
              minimo: 6,
              bolasIniciais: [4, 10, 4, 10, 8, 12]),
          TuboConfig(maxBolas: 2, bolasIniciais: [4]),
          TuboConfig(
              maxBolas: 6, corRequerida: 4, minimo: 6, bolasIniciais: [8, 8, 8]),
        ],
      );

    case 13:
      return const LevelConfig(
        levelNumber: 13,
        titulo: 'Quanto pouco espaço..',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(maxBolas: 1),
          TuboConfig(maxBolas: 2, bolasIniciais: [7, 8]),
          TuboConfig(maxBolas: 2, corRequerida: 8, bolasIniciais: [1, 1]),
          TuboConfig(maxBolas: 3, bolasIniciais: [9, 1]),
          TuboConfig(maxBolas: 3, bolasIniciais: [7, 9, 8]),
          TuboConfig(maxBolas: 4, bolasIniciais: [6, 6, 1, 1]),
          TuboConfig(maxBolas: 2, bolasIniciais: [1]),
        ],
      );

    case 14:
      return const LevelConfig(
        levelNumber: 14,
        titulo: 'Ai ta doendo, ta prensado — duplo toque no vazio p/ reverter',
        tubos: [
          TuboConfig(maxBolas: 1, bolasIniciais: [1, 2]),
          TuboConfig(maxBolas: 1, bolasIniciais: [1, 2]),
          TuboConfig(maxBolas: 1),
          TuboConfig(maxBolas: 2, corRequerida: 2, minimo: 2),
        ],
      );

    case 15:
      return const LevelConfig(
        levelNumber: 15,
        titulo: 'Ordem! (paranormal)',
        tubos: [
          TuboConfig(maxBolas: 1, minimo: 1),
          TuboConfig(maxBolas: 1, corRequerida: 7, minimo: 1, bolasIniciais: [8, 7]),
          TuboConfig(maxBolas: 1, corRequerida: 7, minimo: 1, bolasIniciais: [7, 8]),
          TuboConfig(maxBolas: 1, minimo: 2),
        ],
      );

    case 16:
      return const LevelConfig(
        levelNumber: 16,
        titulo: 'Boa sorte',
        bolaSize: _bolaPequena,
        tubos: [
          TuboConfig(
              maxBolas: 8, bolasIniciais: [1, 2, 3, 4, 1, 2, 5, 3]),
          TuboConfig(
              maxBolas: 8,
              corRequerida: 6,
              bolasIniciais: [4, 4, 6, 2, 3, 5, 6, 1]),
          TuboConfig(
              maxBolas: 7, corRequerida: 2, bolasIniciais: [4, 2, 1, 5, 6, 3, 4, 4]),
          TuboConfig(
              maxBolas: 7, bolasIniciais: [3, 1, 2, 6, 4, 6, 5, 3]),
          TuboConfig(
              maxBolas: 7, bolasIniciais: [5, 4, 6, 2, 5, 6, 1, 3]),
          TuboConfig(
              maxBolas: 8,
              corRequerida: 5,
              bolasIniciais: [2, 5, 5, 2, 3, 1, 1, 6]),
          TuboConfig(maxBolas: 8, corRequerida: 4),
          TuboConfig(maxBolas: 7),
        ],
      );

    case 17:
      return const LevelConfig(
        levelNumber: 17,
        titulo: 'Como é possível isso',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 5, corRequerida: 5, minimo: 4, bolasIniciais: [1, 2, 3, 2]),
          TuboConfig(maxBolas: 4, bolasIniciais: [3, 1]),
          TuboConfig(
              maxBolas: 5,
              corRequerida: 2,
              minimo: 5,
              bolasIniciais: [4, 2, 4, 3, 2]),
          TuboConfig(
              maxBolas: 4,
              corRequerida: 2,
              minimo: 4,
              bolasIniciais: [3, 5, 4, 2]),
          TuboConfig(maxBolas: 2, bolasIniciais: [5, 4, 5]),
          TuboConfig(
              maxBolas: 4,
              corRequerida: 3,
              minimo: 3,
              bolasIniciais: [3, 2, 1, 5]),
          TuboConfig(
              maxBolas: 5,
              corRequerida: 3,
              minimo: 4,
              bolasIniciais: [3, 3, 1, 2]),
          TuboConfig(maxBolas: 3, bolasIniciais: [3, 2, 2]),
          TuboConfig(maxBolas: 1),
        ],
      );

    case 18:
      return const LevelConfig(
        levelNumber: 18,
        titulo: 'Como é possível isso',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 6, bolasIniciais: [1, 2, 1, 2, 3, 1, 3]),
          TuboConfig(maxBolas: 6, bolasIniciais: [3, 3, 1, 4, 1, 4, 2]),
          TuboConfig(maxBolas: 8, bolasIniciais: [4, 5, 3, 1, 3, 2]),
          TuboConfig(maxBolas: 2, bolasIniciais: [4, 5, 2]),
          TuboConfig(maxBolas: 6, bolasIniciais: [4, 4, 3, 1]),
          TuboConfig(maxBolas: 5, corRequerida: 2, bolasIniciais: [5, 5, 5, 5]),
          TuboConfig(maxBolas: 3),
        ],
      );

    case 19:
      return const LevelConfig(
        levelNumber: 19,
        titulo: 'Colisão - mais bolas que cabe!',
        bolaSize: 45,
        tubos: [
          TuboConfig(
              maxBolas: 3,
              corRequerida: 3,
              bolasIniciais: [3, 4, 3, 4, 3]),
          TuboConfig(
              maxBolas: 3,
              corRequerida: 4,
              bolasIniciais: [4, 3, 4, 3]),
          TuboConfig(maxBolas: 3),
          TuboConfig(maxBolas: 3),
        ],
      );

    case 20:
      return const LevelConfig(
        levelNumber: 20,
        titulo: 'Estouro duplo',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 4,
              corRequerida: 5,
              bolasIniciais: [6, 5, 6, 5, 6]),
          TuboConfig(
              maxBolas: 4,
              corRequerida: 6,
              bolasIniciais: [5, 6, 5, 6, 5]),
          TuboConfig(maxBolas: 5, bolasIniciais: [2, 2]),
          TuboConfig(maxBolas: 4),
          TuboConfig(maxBolas: 4),
        ],
      );

    case 21:
      return const LevelConfig(
        levelNumber: 21,
        titulo: 'Muitas cores, muito pequenas',
        bolaSize: _bolaPequena,
        tubos: [
          TuboConfig(
              maxBolas: 8,
              corRequerida: 7,
              bolasIniciais: [8, 7, 8, 7, 8, 7, 8]),
          TuboConfig(
              maxBolas: 7,
              corRequerida: 8,
              bolasIniciais: [7, 8, 7, 8, 7, 8, 7, 8]),
          TuboConfig(
              maxBolas: 8, bolasIniciais: [2, 3, 4]),
          TuboConfig(maxBolas: 7),
          TuboConfig(maxBolas: 8),
        ],
      );

    case 22:
      return const LevelConfig(
        levelNumber: 22,
        titulo: 'Sobre pressão - cores requeridas',
        bolaSize: 45,
        tubos: [
          TuboConfig(
              maxBolas: 2,
              corRequerida: 9,
              bolasIniciais: [9, 9, 9, 10]),
          TuboConfig(
              maxBolas: 2,
              corRequerida: 10,
              bolasIniciais: [10, 9, 10, 9]),
          TuboConfig(maxBolas: 3),
          TuboConfig(maxBolas: 3),
        ],
      );

    case 23:
      return const LevelConfig(
        levelNumber: 23,
        titulo: 'Transbordamento seletivo',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 4,
              corRequerida: 11,
              minimo: 3,
              bolasIniciais: [11, 12, 11, 12, 11]),
          TuboConfig(
              maxBolas: 4,
              corRequerida: 12,
              minimo: 3,
              bolasIniciais: [12, 11, 12, 11, 12, 11]),
          TuboConfig(maxBolas: 5, bolasIniciais: [2]),
          TuboConfig(maxBolas: 4),
          TuboConfig(maxBolas: 5),
        ],
      );

    case 24:
      return const LevelConfig(
        levelNumber: 24,
        titulo: 'Paradoxo dos mínimos',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 3,
              corRequerida: 7,
              minimo: 3,
              bolasIniciais: [8, 7, 8, 7, 8]),
          TuboConfig(
              maxBolas: 3,
              corRequerida: 8,
              minimo: 3,
              bolasIniciais: [7, 8, 7, 8, 7, 8, 7]),
          TuboConfig(maxBolas: 4),
          TuboConfig(maxBolas: 3),
        ],
      );

    case 25:
      return const LevelConfig(
        levelNumber: 25,
        titulo: 'Espaço crítico comprimido',
        bolaSize: _bolaPequena,
        tubos: [
          TuboConfig(
              maxBolas: 5,
              corRequerida: 13,
              bolasIniciais: [14, 13, 14, 13, 14, 13, 14]),
          TuboConfig(
              maxBolas: 5,
              corRequerida: 14,
              bolasIniciais: [13, 14, 13, 14, 13, 14]),
          TuboConfig(maxBolas: 6, bolasIniciais: [2, 3]),
          TuboConfig(maxBolas: 5),
          TuboConfig(maxBolas: 6),
          TuboConfig(maxBolas: 5),
        ],
      );

    case 26:
      return const LevelConfig(
        levelNumber: 26,
        titulo: 'Caos organizado',
        bolaSize: 45,
        tubos: [
          TuboConfig(
              maxBolas: 4,
              corRequerida: 9,
              minimo: 2,
              bolasIniciais: [10, 9, 10, 9, 10, 9]),
          TuboConfig(
              maxBolas: 3,
              corRequerida: 10,
              minimo: 2,
              bolasIniciais: [9, 10, 9, 10, 9, 10]),
          TuboConfig(
              maxBolas: 4,
              bolasIniciais: [1, 2, 3, 1]),
          TuboConfig(maxBolas: 4),
          TuboConfig(maxBolas: 3),
        ],
      );

    case 27:
      return const LevelConfig(
        levelNumber: 27,
        titulo: 'Fragmentação colorida',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 5,
              corRequerida: 6,
              bolasIniciais: [7, 6, 7, 6, 7, 6, 7, 6]),
          TuboConfig(
              maxBolas: 5,
              corRequerida: 7,
              bolasIniciais: [6, 7, 6, 7, 6, 7, 6]),
          TuboConfig(
              maxBolas: 6, bolasIniciais: [2, 3, 2]),
          TuboConfig(maxBolas: 5),
          TuboConfig(maxBolas: 6),
          TuboConfig(maxBolas: 5),
        ],
      );

    case 28:
      return const LevelConfig(
        levelNumber: 28,
        titulo: 'Pressão múltipla',
        bolaSize: _bolaPequena,
        tubos: [
          TuboConfig(
              maxBolas: 6,
              corRequerida: 11,
              bolasIniciais: [12, 11, 12, 11, 12, 11, 12, 11]),
          TuboConfig(
              maxBolas: 6,
              corRequerida: 12,
              minimo: 4,
              bolasIniciais: [11, 12, 11, 12, 11, 12, 11]),
          TuboConfig(
              maxBolas: 7,
              bolasIniciais: [2, 3, 4, 2]),
          TuboConfig(maxBolas: 6),
          TuboConfig(maxBolas: 7),
        ],
      );

    case 29:
      return const LevelConfig(
        levelNumber: 29,
        titulo: 'Cruzamento de linhas',
        bolaSize: 45,
        tubos: [
          TuboConfig(
              maxBolas: 4,
              corRequerida: 8,
              bolasIniciais: [9, 8, 9, 8, 9, 8]),
          TuboConfig(
              maxBolas: 3,
              corRequerida: 9,
              minimo: 2,
              bolasIniciais: [8, 9, 8, 9, 8, 9, 8]),
          TuboConfig(
              maxBolas: 4, bolasIniciais: [1, 2, 1, 2]),
          TuboConfig(maxBolas: 4),
          TuboConfig(maxBolas: 3),
        ],
      );

    case 30:
      return const LevelConfig(
        levelNumber: 30,
        titulo: 'Descansa aqui...',
        tubos: [
          TuboConfig(maxBolas: 5, bolasIniciais: [1, 1, 1, 1]),
          TuboConfig(maxBolas: 5, bolasIniciais: [2, 2, 2]),
        ],
      );

    case 31:
      return const LevelConfig(
        levelNumber: 31,
        titulo: 'Pressão renovada',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 4,
              corRequerida: 10,
              bolasIniciais: [11, 10, 11, 10, 11, 10, 11]),
          TuboConfig(
              maxBolas: 4,
              corRequerida: 11,
              minimo: 3,
              bolasIniciais: [10, 11, 10, 11, 10, 11]),
          TuboConfig(maxBolas: 5, bolasIniciais: [2, 3]),
          TuboConfig(maxBolas: 4),
          TuboConfig(maxBolas: 5),
        ],
      );

    case 32:
      return const LevelConfig(
        levelNumber: 32,
        titulo: 'Triangulação impossível',
        bolaSize: _bolaPequena,
        tubos: [
          TuboConfig(
              maxBolas: 5,
              corRequerida: 13,
              minimo: 4,
              bolasIniciais: [14, 13, 14, 13, 14, 13, 14, 13]),
          TuboConfig(
              maxBolas: 5,
              corRequerida: 14,
              minimo: 4,
              bolasIniciais: [13, 14, 13, 14, 13, 14, 13]),
          TuboConfig(
              maxBolas: 6,
              bolasIniciais: [1, 2, 3, 1, 2]),
          TuboConfig(maxBolas: 5),
          TuboConfig(maxBolas: 6),
        ],
      );

    case 33:
      return const LevelConfig(
        levelNumber: 33,
        titulo: 'Engano seletivo',
        bolaSize: 45,
        tubos: [
          TuboConfig(
              maxBolas: 3,
              corRequerida: 7,
              minimo: 2,
              bolasIniciais: [8, 7, 8, 7, 8, 7]),
          TuboConfig(
              maxBolas: 3,
              corRequerida: 8,
              minimo: 2,
              bolasIniciais: [7, 8, 7, 8, 7, 8, 7]),
          TuboConfig(maxBolas: 4, bolasIniciais: [1, 2]),
          TuboConfig(maxBolas: 3),
          TuboConfig(maxBolas: 4),
        ],
      );

    case 34:
      return const LevelConfig(
        levelNumber: 34,
        titulo: 'Transbordamento final',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 6,
              corRequerida: 12,
              minimo: 5,
              bolasIniciais: [13, 12, 13, 12, 13, 12, 13, 12, 13]),
          TuboConfig(
              maxBolas: 6,
              corRequerida: 13,
              minimo: 5,
              bolasIniciais: [12, 13, 12, 13, 12, 13, 12, 13]),
          TuboConfig(
              maxBolas: 7,
              bolasIniciais: [1, 2, 3, 4]),
          TuboConfig(maxBolas: 6),
          TuboConfig(maxBolas: 7),
          TuboConfig(maxBolas: 6),
        ],
      );

    case 35:
      return const LevelConfig(
        levelNumber: 35,
        titulo: 'Quatro cores pressionadas',
        bolaSize: _bolaPequena,
        tubos: [
          TuboConfig(
              maxBolas: 5,
              corRequerida: 9,
              bolasIniciais: [10, 9, 10, 9, 10, 9, 10, 9]),
          TuboConfig(
              maxBolas: 5,
              corRequerida: 10,
              minimo: 3,
              bolasIniciais: [9, 10, 9, 10, 9, 10, 9, 10, 9]),
          TuboConfig(
              maxBolas: 5,
              corRequerida: 11,
              bolasIniciais: [12, 11, 12, 11, 12, 11]),
          TuboConfig(
              maxBolas: 5,
              corRequerida: 12,
              bolasIniciais: [11, 12, 11, 12, 11, 12, 11]),
          TuboConfig(maxBolas: 6, bolasIniciais: [1, 2]),
          TuboConfig(maxBolas: 6),
        ],
      );

    case 36:
      return const LevelConfig(
        levelNumber: 36,
        titulo: 'Densidade extrema',
        bolaSize: 45,
        tubos: [
          TuboConfig(
              maxBolas: 3,
              corRequerida: 14,
              minimo: 3,
              bolasIniciais: [15, 14, 15, 14, 15, 14, 15]),
          TuboConfig(
              maxBolas: 3,
              corRequerida: 15,
              minimo: 3,
              bolasIniciais: [14, 15, 14, 15, 14, 15, 14, 15]),
          TuboConfig(maxBolas: 4, bolasIniciais: [2, 3, 2, 3]),
          TuboConfig(maxBolas: 3),
          TuboConfig(maxBolas: 4),
        ],
      );

    case 37:
      return const LevelConfig(
        levelNumber: 37,
        titulo: 'Confinamento duplo',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 4,
              corRequerida: 11,
              minimo: 4,
              bolasIniciais: [12, 11, 12, 11, 12, 11, 12, 11]),
          TuboConfig(
              maxBolas: 4,
              corRequerida: 12,
              minimo: 4,
              bolasIniciais: [11, 12, 11, 12, 11, 12, 11, 12]),
          TuboConfig(maxBolas: 5, bolasIniciais: [3, 4]),
          TuboConfig(maxBolas: 4),
          TuboConfig(maxBolas: 5),
        ],
      );

    case 38:
      return const LevelConfig(
        levelNumber: 38,
        titulo: 'Sete de tudo',
        bolaSize: _bolaPequena,
        tubos: [
          TuboConfig(
              maxBolas: 6,
              corRequerida: 13,
              bolasIniciais: [14, 13, 14, 13, 14, 13, 14, 13, 14]),
          TuboConfig(
              maxBolas: 6,
              corRequerida: 14,
              minimo: 5,
              bolasIniciais: [13, 14, 13, 14, 13, 14, 13, 14, 13]),
          TuboConfig(
              maxBolas: 7,
              bolasIniciais: [1, 2, 3, 4, 5]),
          TuboConfig(maxBolas: 6),
          TuboConfig(maxBolas: 7),
          TuboConfig(maxBolas: 6),
        ],
      );

    case 39:
      return const LevelConfig(
        levelNumber: 39,
        titulo: 'Limite de sanidade',
        bolaSize: 45,
        tubos: [
          TuboConfig(
              maxBolas: 2,
              corRequerida: 15,
              minimo: 2,
              bolasIniciais: [16, 15, 16, 15, 16, 15]),
          TuboConfig(
              maxBolas: 2,
              corRequerida: 16,
              minimo: 2,
              bolasIniciais: [15, 16, 15, 16, 15, 16, 15]),
          TuboConfig(maxBolas: 3, bolasIniciais: [1, 2, 1]),
          TuboConfig(maxBolas: 2),
          TuboConfig(maxBolas: 3),
        ],
      );

    case 40:
      return const LevelConfig(
        levelNumber: 40,
        titulo: 'O absoluto final',
        bolaSize: _bolaMedia,
        tubos: [
          TuboConfig(
              maxBolas: 5,
              corRequerida: 14,
              minimo: 5,
              bolasIniciais: [15, 14, 15, 14, 15, 14, 15, 14, 15, 14]),
          TuboConfig(
              maxBolas: 5,
              corRequerida: 15,
              minimo: 5,
              bolasIniciais: [14, 15, 14, 15, 14, 15, 14, 15, 14, 15]),
          TuboConfig(
              maxBolas: 6,
              bolasIniciais: [1, 2, 3, 4, 5, 1]),
          TuboConfig(maxBolas: 5),
          TuboConfig(maxBolas: 6),
          TuboConfig(maxBolas: 5),
        ],
      );

    case 41:
      return const LevelConfig(
        levelNumber: 41,
        titulo: 'Respiração antes do final...',
        tubos: [
          TuboConfig(maxBolas: 6, bolasIniciais: [5, 5, 5, 5, 5]),
          TuboConfig(maxBolas: 6, bolasIniciais: [6, 6, 6]),
        ],
      );

    case 42:
      return const LevelConfig(
        levelNumber: 42,
        titulo: 'Supremo desafio colorido',
        bolaSize: _bolaPequena,
        tubos: [
          TuboConfig(
              maxBolas: 7,
              corRequerida: 15,
              minimo: 6,
              bolasIniciais: [16, 15, 16, 15, 16, 15, 16, 15, 16]),
          TuboConfig(
              maxBolas: 7,
              corRequerida: 16,
              minimo: 6,
              bolasIniciais: [15, 16, 15, 16, 15, 16, 15, 16, 15]),
          TuboConfig(
              maxBolas: 8,
              bolasIniciais: [1, 2, 3, 4, 5, 6]),
          TuboConfig(maxBolas: 7),
          TuboConfig(maxBolas: 8),
          TuboConfig(maxBolas: 7),
        ],
      );

    case 43:
      return const LevelConfig(
        levelNumber: 43,
        titulo: 'Parabéns! Você conseguiu!',
        tubos: [
          TuboConfig(maxBolas: 7, bolasIniciais: [7, 7, 7, 7, 7, 7, 7]),
          TuboConfig(maxBolas: 7, bolasIniciais: [8, 8, 8, 8, 8, 8]),
        ],
      );

    default:
      return LevelConfig(
        levelNumber: level,
        titulo: 'Nível $level (em breve)',
        tubos: const [],
      );
  }
}
