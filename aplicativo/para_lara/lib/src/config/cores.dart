import 'package:flutter/material.dart';

/// Paleta do jogo (js/main.css + tons LaRa).
final Map<int, Color> corConfig = {
  999: Colors.transparent,
  0: const Color(0xFFFFFFFF),
  1: const Color(0xFFFFFFFF),
  2: const Color(0xFFF24123),
  3: const Color(0xFF20C833),
  4: const Color(0xFF1260F1),
  5: const Color(0xFFF6AAB7),
  6: const Color(0xFFFF1C8D),
  7: const Color(0xFFFFD700),
  8: const Color(0xFF1AB3FF),
  9: const Color(0xFF9B59D0),
  10: const Color(0xFFD86C20),
  11: const Color(0xFFD161A2),
  12: const Color(0xFFFF3464),
  13: const Color(0xFFACBB3E),
  14: const Color(0xFFD42C00),
};

const Color verdeLaRa = Color(0xFFACBB3E);
const Color rosaLaRa = Color(0xFFF556E0);
const Color verdeLaRa2 = Color(0xFF99B969);
const Color rosaFelps = Color(0xFFFF3464);

const Color corFundoEscuro = Color(0xFF1A1033);
const Color corFundoMedio = Color(0xFF2D1B4E);
const Color corFundoClaro = Color(0xFF4A2C6A);

const Color corBotao = Color(0xFF6B3FA0);
const Color corBotaoDestaque = Color(0xFFF556E0);
const Color corVitoria = Color(0xFF99B969);
const Color corVitoriaTexto = Color(0xFFFF3464);

const double espessuraBordaTubo = 2;

/// Fundo em gradiente para telas do jogo.
const BoxDecoration decoracaoFundo = BoxDecoration(
  gradient: LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [
      corFundoEscuro,
      corFundoMedio,
      Color(0xFF3D2060),
      corFundoClaro,
    ],
    stops: [0.0, 0.35, 0.7, 1.0],
  ),
);

Color corTubo(int corRequerida) =>
    corConfig[corRequerida] ?? Colors.white;

Color corFundoTubo(int corRequerida) {
  final c = corTubo(corRequerida);
  if (corRequerida == 999) return Colors.transparent;
  return c.withValues(alpha: 0.22);
}
