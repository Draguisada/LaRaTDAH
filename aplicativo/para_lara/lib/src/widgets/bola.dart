import 'package:flutter/material.dart';
import '../config/cores.dart';

class Bola extends StatelessWidget {
  final int cor;
  final Map<int, Color> cores;
  final double tamanho;
  final bool assist;

  const Bola({
    super.key,
    required this.cor,
    required this.cores,
    required this.tamanho,
    this.assist = false,
  });

  @override
  Widget build(BuildContext context) {
    final corBola = cores[cor] ?? Colors.grey;
    final fontSize = tamanho * 0.35;

    return SizedBox(
      width: tamanho,
      height: tamanho,
      child: DecoratedBox(
        decoration: BoxDecoration(
          color: corBola,
          shape: BoxShape.circle,
        ),
        child: Center(
          child: assist
              ? Text(
                  cor.toString(),
                  style: TextStyle(
                    color: corFundoEscuro,
                    fontWeight: FontWeight.bold,
                    fontSize: fontSize,
                    shadows: const [
                      Shadow(offset: Offset(1, 0), color: Colors.white),
                      Shadow(offset: Offset(-1, 0), color: Colors.white),
                      Shadow(offset: Offset(0, 1), color: Colors.white),
                      Shadow(offset: Offset(0, -1), color: Colors.white),
                    ],
                  ),
                )
              : Text(
                  cor.toString(),
                  style: const TextStyle(
                    color: Colors.transparent,
                    fontWeight: FontWeight.bold,
                  ),
                ),
        ),
      ),
    );
  }
}
