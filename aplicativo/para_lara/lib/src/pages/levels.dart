import 'package:flutter/material.dart';
import '../config/cores.dart';
import '../config/level_config.dart';
import '../config/levels_data.dart';
import '../game/game_logic.dart';
import '../utils/layout_jogo.dart';
import '../widgets/bola.dart';
import '../services/progresso_service.dart';
import '../widgets/fundo_gradiente.dart';
import '../widgets/tubo.dart';

/// Tela de um nível com lógica completa (functions.js).
class Level extends StatefulWidget {
  final int levelNumber;
  final VoidCallback? onVitoria;

  const Level({
    super.key,
    required this.levelNumber,
    this.onVitoria,
  });

  @override
  State<Level> createState() => _LevelState();
}

class _LevelState extends State<Level> {
  late LevelConfig config;
  late GameLogic jogo;
  bool vitoria = false;

  @override
  void initState() {
    super.initState();
    _carregarNivel();
  }

  @override
  void didUpdateWidget(Level oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.levelNumber != widget.levelNumber) {
      _carregarNivel();
    }
  }

  void _carregarNivel() {
    config = configNivel(widget.levelNumber);
    jogo = GameLogic(config.tubos);
    vitoria = false;
  }

  void _aoClicarTubo(int indice) {
    if (vitoria) return;

    setState(() {
      jogo.aoClicarTubo(indice);
      if (jogo.corSegurar == corNenhuma && jogo.verificarVitoria()) {
        vitoria = true;
        widget.onVitoria?.call();
      }
    });
  }

  void _desfazer() {
    if (vitoria) return;
    final ok = jogo.desfazer();
    if (ok) {
      setState(() {});
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: const Text('Nada para reverter ainda'),
          backgroundColor: corBotao,
          behavior: SnackBarBehavior.floating,
          duration: const Duration(seconds: 2),
        ),
      );
    }
  }

  Future<void> _confirmarReiniciar() async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: corFundoMedio,
        title: const Text('Reiniciar nível?', style: TextStyle(color: Colors.white)),
        content: const Text(
          'Deseja reiniciar o nível?',
          style: TextStyle(color: Colors.white70),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(ctx, false),
            child: const Text('Não', style: TextStyle(color: Colors.white54)),
          ),
          TextButton(
            onPressed: () => Navigator.pop(ctx, true),
            child: const Text('Sim', style: TextStyle(color: rosaLaRa)),
          ),
        ],
      ),
    );
    if (ok == true && mounted) {
      setState(() {
        jogo.reiniciar(config.tubos);
        vitoria = false;
      });
    }
  }

  void _alternarAssist() {
    setState(jogo.alternarAssist);
  }

  @override
  Widget build(BuildContext context) {
    if (config.tubos.isEmpty) {
      return Center(
        child: Text(
          config.titulo,
          style: const TextStyle(color: Colors.white70, fontSize: 18),
          textAlign: TextAlign.center,
        ),
      );
    }

    return Stack(
      fit: StackFit.expand,
      children: [
        Column(
          children: [
            _cabecalho(),
            Expanded(child: _areaJogo()),
            _barraBotoes(),
          ],
        ),
        if (vitoria) _overlayVitoria(),
      ],
    );
  }

  Widget _cabecalho() {
    return GestureDetector(
      onTap: _alternarAssist,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(12, 2, 12, 4),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'Level ${config.levelNumber}',
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: verdeLaRa,
                fontFamily: 'Courier',
              ),
            ),
            const SizedBox(height: 2),
            Text(
              config.titulo,
              textAlign: TextAlign.center,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                fontSize: 13,
                color: Colors.white.withValues(alpha: 0.85),
                fontFamily: 'Courier',
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _areaJogo() {
    return LayoutBuilder(
      builder: (context, constraints) {
        final area = constraints.biggest;
        final bolaSize = calcularTamanhoBola(area, config);
        final alturaSegurando = bolaSize + reservaSegurando;
        final larguraTabuleiro = area.width - 12;
        final tabuleiro = medirTabuleiroComLargura(
          config,
          bolaSize,
          larguraTabuleiro,
        );

        return Column(
          children: [
            SizedBox(
              height: alturaSegurando,
              child: Center(child: _previewSegurando(bolaSize)),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 6),
                child: Align(
                  alignment: Alignment.bottomCenter,
                  child: FittedBox(
                    fit: BoxFit.contain,
                    alignment: Alignment.bottomCenter,
                    child: SizedBox(
                      width: tabuleiro.width,
                      height: tabuleiro.height,
                      child: Wrap(
                        spacing: espacamentoTubos,
                        runSpacing: espacamentoTubos,
                        alignment: WrapAlignment.center,
                        crossAxisAlignment: WrapCrossAlignment.end,
                        children: [
                          for (var i = 0; i < jogo.tubos.length; i++)
                            TuboWidget(
                              estado: jogo.tubos[i],
                              cores: corConfig,
                              bolaSize: bolaSize,
                              assist: jogo.assist,
                              onTap: () => _aoClicarTubo(i),
                            ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        );
      },
    );
  }

  Widget _barraBotoes() {
    return SafeArea(
      top: false,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(10, 2, 10, 4),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Wrap(
              alignment: WrapAlignment.center,
              spacing: 6,
              runSpacing: 6,
              children: [
                _botao('Reverter', _desfazer, compacto: true),
                _botao('Daltônico', _alternarAssist, compacto: true),
              ],
            ),
            const SizedBox(height: 4),
            _botao('Reiniciar', _confirmarReiniciar, compacto: true),
          ],
        ),
      ),
    );
  }

  Widget _previewSegurando(double bolaSize) {
    final segurando = jogo.corSegurar != corNenhuma;
    return AnimatedOpacity(
      opacity: segurando ? 1 : 0,
      duration: const Duration(milliseconds: 150),
      child: segurando
          ? Bola(
              cor: jogo.corSegurar,
              cores: corConfig,
              tamanho: bolaSize,
              assist: jogo.assist,
            )
          : SizedBox(width: bolaSize, height: bolaSize),
    );
  }

  Widget _overlayVitoria() {
    return Container(
      color: Colors.black54,
      child: Center(
        child: Container(
          margin: const EdgeInsets.all(24),
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            gradient: const LinearGradient(
              colors: [verdeLaRa2, verdeLaRa],
            ),
            borderRadius: BorderRadius.circular(12),
            boxShadow: [
              BoxShadow(
                color: rosaLaRa.withValues(alpha: 0.4),
                blurRadius: 20,
                spreadRadius: 2,
              ),
            ],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text(
                'Parabéns! Concluiu o nível! :)',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: corVitoriaTexto,
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  fontFamily: 'Courier',
                ),
              ),
              const SizedBox(height: 16),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: rosaFelps,
                  foregroundColor: Colors.white,
                ),
                onPressed: () {
                  setState(() => vitoria = false);
                  widget.onVitoria?.call();
                },
                child: const Text('Próximo'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _botao(String texto, VoidCallback onPressed, {bool compacto = false}) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: compacto ? corBotao : corBotaoDestaque,
        foregroundColor: Colors.white,
        padding: EdgeInsets.symmetric(
          horizontal: compacto ? 12 : 20,
          vertical: compacto ? 8 : 10,
        ),
        elevation: 4,
        shadowColor: rosaLaRa.withValues(alpha: 0.5),
        minimumSize: Size.zero,
        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
      ),
      onPressed: onPressed,
      child: Text(
        texto,
        style: TextStyle(fontSize: compacto ? 12 : 14),
      ),
    );
  }
}

class LevelsPage extends StatefulWidget {
  const LevelsPage({super.key});

  @override
  State<LevelsPage> createState() => _LevelsPageState();
}

class _LevelsPageState extends State<LevelsPage> {
  int nivelAtual = 1;
  bool _carregando = true;
  static const int nivelMaximo = nivelMaximoJogo;

  @override
  void initState() {
    super.initState();
    _carregarNivelSalvo();
  }

  Future<void> _carregarNivelSalvo() async {
    final nivel = await ProgressoService.carregarNivel();
    if (mounted) {
      setState(() {
        nivelAtual = nivel;
        _carregando = false;
      });
    }
  }

  void _irParaNivel(int nivel) {
    final clamped = nivel.clamp(1, nivelMaximo);
    setState(() => nivelAtual = clamped);
    ProgressoService.salvarNivel(clamped);
  }

  void _nivelAnterior() {
    if (nivelAtual > 1) _irParaNivel(nivelAtual - 1);
  }

  void _proximoNivel() {
    if (nivelAtual < nivelMaximo) _irParaNivel(nivelAtual + 1);
  }

  @override
  Widget build(BuildContext context) {
    return FundoGradiente(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
          foregroundColor: Colors.white,
          toolbarHeight: 44,
          title: const Text(
            'Joguinho TDAH',
            style: TextStyle(
              fontFamily: 'Courier',
              color: verdeLaRa,
              fontWeight: FontWeight.bold,
              fontSize: 18,
            ),
          ),
          leading: IconButton(
            icon: const Icon(Icons.arrow_back, color: Colors.white),
            onPressed: () => Navigator.pop(context),
          ),
        ),
        body: Column(
          children: [
            SizedBox(
              height: 44,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    iconSize: 32,
                    padding: EdgeInsets.zero,
                    constraints: const BoxConstraints(),
                    color: nivelAtual > 1 ? verdeLaRa : Colors.white24,
                    onPressed: nivelAtual > 1 ? _nivelAnterior : null,
                    icon: const Icon(Icons.chevron_left),
                  ),
                  const SizedBox(width: 16),
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 4,
                    ),
                    decoration: BoxDecoration(
                      color: Colors.black26,
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: rosaLaRa.withValues(alpha: 0.5)),
                    ),
                    child: Text(
                      '$nivelAtual',
                      style: const TextStyle(
                        fontSize: 22,
                        color: Colors.white,
                        fontFamily: 'Courier',
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  const SizedBox(width: 16),
                  IconButton(
                    iconSize: 32,
                    padding: EdgeInsets.zero,
                    constraints: const BoxConstraints(),
                    color:
                        nivelAtual < nivelMaximo ? verdeLaRa : Colors.white24,
                    onPressed:
                        nivelAtual < nivelMaximo ? _proximoNivel : null,
                    icon: const Icon(Icons.chevron_right),
                  ),
                ],
              ),
            ),
            Expanded(
              child: _carregando
                  ? const Center(
                      child: CircularProgressIndicator(color: verdeLaRa),
                    )
                  : Level(
                      key: ValueKey(nivelAtual),
                      levelNumber: nivelAtual,
                      onVitoria: _proximoNivel,
                    ),
            ),
          ],
        ),
      ),
    );
  }
}
