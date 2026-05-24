import 'package:flutter/material.dart';
import 'src/config/cores.dart';
import 'src/pages/levels.dart';
import 'src/services/progresso_service.dart';
import 'src/widgets/fundo_gradiente.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await ProgressoService.init();
  runApp(const ParaLaraApp());
}

class ParaLaraApp extends StatelessWidget {
  const ParaLaraApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Joguinho TDAH',
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: corFundoEscuro,
        fontFamily: 'Courier',
        colorScheme: ColorScheme.dark(
          primary: verdeLaRa,
          secondary: rosaLaRa,
          surface: corFundoMedio,
        ),
      ),
      home: const PaginaInicial(),
    );
  }
}

class PaginaInicial extends StatefulWidget {
  const PaginaInicial({super.key});

  @override
  State<PaginaInicial> createState() => _PaginaInicialState();
}

class _PaginaInicialState extends State<PaginaInicial> {
  int _nivelSalvo = 1;
  bool _carregando = true;

  @override
  void initState() {
    super.initState();
    _atualizarNivelSalvo();
  }

  Future<void> _atualizarNivelSalvo() async {
    final nivel = await ProgressoService.carregarNivel();
    if (mounted) {
      setState(() {
        _nivelSalvo = nivel;
        _carregando = false;
      });
    }
  }

  Future<void> _abrirJogo() async {
    await Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => const LevelsPage()),
    );
    await _atualizarNivelSalvo();
  }

  @override
  Widget build(BuildContext context) {
    return FundoGradiente(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
          title: const Text(
            'Joguinho TDAH',
            style: TextStyle(
              color: verdeLaRa,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                _carregando ? '...' : 'Level ${_nivelSalvo.toString().padLeft(2, '0')}',
                style: const TextStyle(
                  fontSize: 22,
                  color: Colors.white,
                  fontWeight: FontWeight.w500,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                _nivelSalvo == 1 ? 'Pra LaRa :D' : 'Continuar de onde parou',
                style: TextStyle(
                  fontSize: 16,
                  color: rosaLaRa.withValues(alpha: 0.9),
                ),
              ),
              const SizedBox(height: 32),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: rosaLaRa,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(
                    horizontal: 40,
                    vertical: 16,
                  ),
                  elevation: 6,
                  shadowColor: rosaLaRa.withValues(alpha: 0.6),
                ),
                onPressed: _carregando ? null : _abrirJogo,
                child: Text(
                  _carregando ? 'Carregando...' : 'Jogar',
                  style: const TextStyle(fontSize: 20),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
