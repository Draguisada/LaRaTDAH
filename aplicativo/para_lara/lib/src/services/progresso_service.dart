import 'package:shared_preferences/shared_preferences.dart';
import '../config/levels_data.dart';

/// Persistência do último nível (equivalente a localStorage.salvarNivel no JS).
class ProgressoService {
  static const String _chave = 'salvarNivel';
  static SharedPreferences? _prefs;

  static Future<void> init() async {
    _prefs ??= await SharedPreferences.getInstance();
  }

  static Future<int> carregarNivel() async {
    await init();
    final valor = _prefs!.getInt(_chave);
    if (valor == null || valor < 1) return 1;
    return valor.clamp(1, nivelMaximoJogo);
  }

  static Future<void> salvarNivel(int nivel) async {
    await init();
    await _prefs!.setInt(
      _chave,
      nivel.clamp(1, nivelMaximoJogo),
    );
  }
}
