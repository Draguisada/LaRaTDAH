import 'package:flutter/material.dart';
import '../config/cores.dart';

/// Envolve a tela com o gradiente do jogo.
class FundoGradiente extends StatelessWidget {
  final Widget child;

  const FundoGradiente({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: decoracaoFundo,
      child: child,
    );
  }
}
