import 'dart:math' as math;
import 'package:flutter/material.dart';
import '../config/cores.dart';
import '../game/game_logic.dart';
import 'bola.dart';

class TuboWidget extends StatelessWidget {
  final TuboEstado estado;
  final Map<int, Color> cores;
  final double bolaSize;
  final bool assist;
  final VoidCallback onTap;

  const TuboWidget({
    super.key,
    required this.estado,
    required this.cores,
    required this.bolaSize,
    required this.assist,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final excedeu = estado.excedeuMaximo;
    final corReq = estado.corRequerida;
    final borda = corTubo(corReq);
    final alturaInterna = bolaSize * estado.maxBolas;
    final n = estado.bolas.length;

    // Tubos “prensados”: comprime cada bola para caber e mostrar todas as cores.
    final tamanhoBolaVisual = n > estado.maxBolas
        ? alturaInterna / math.max(n, 1)
        : bolaSize;

    return GestureDetector(
      onTap: onTap,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.only(
              bottomLeft: Radius.circular(bolaSize / 3),
              bottomRight: Radius.circular(bolaSize / 3),
            ),
            child: Container(
              width: bolaSize,
              height: alturaInterna,
              decoration: BoxDecoration(
                border: Border(
                  left: BorderSide(color: borda, width: espessuraBordaTubo),
                  right: BorderSide(color: borda, width: espessuraBordaTubo),
                ),
                color: corFundoTubo(corReq),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  for (final cor in estado.bolas)
                    Bola(
                      cor: cor,
                      cores: cores,
                      tamanho: tamanhoBolaVisual,
                      assist: assist,
                    ),
                ],
              ),
            ),
          ),
          Container(
            width: bolaSize,
            height: espessuraBordaTubo,
            decoration: BoxDecoration(
              color: excedeu ? Colors.orange : borda,
              borderRadius: BorderRadius.only(
                bottomLeft: Radius.circular(bolaSize / 3),
                bottomRight: Radius.circular(bolaSize / 3),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
