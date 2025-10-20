# Gerador de Níveis Procedural - Joguinho TDAH

Este sistema permite gerar níveis procedural para o jogo de empilhamento de bolas, criando infinitas variações de gameplay baseadas em seeds determinísticas.

## 🚀 Funcionalidades Principais

### ✅ Sistema de Seeds Determinísticas
- Geração baseada em seeds para resultados reproduzíveis
- Suporte a seeds customizadas (strings ou números)
- Mesma seed sempre gera o mesmo nível

### ✅ Tipos de Tubos Variados
- **Normal**: Tubo padrão sem cor específica
- **Colorido**: Tubo com cor específica que deve ser preenchido
- **Invisível**: Tubo transparente para organização
- **Restrito**: Tubo com quantidade mínima de bolas

### ✅ Sistema de Dificuldade Progressiva
- **Fácil**: 1-5 níveis (3 cores, 4 tubos, 4 bolas por tubo)
- **Médio**: 6-15 níveis (5 cores, 6 tubos, 6 bolas por tubo)
- **Difícil**: 16-30 níveis (8 cores, 8 tubos, 8 bolas por tubo)
- **Extremo**: 31+ níveis (12 cores, 10 tubos, 10 bolas por tubo)

### ✅ Níveis Temáticos
- **Rainbow**: Cores do arco-íris
- **Monochrome**: Preto e branco
- **Warm**: Cores quentes (vermelho, laranja, amarelo, rosa)
- **Cool**: Cores frias (azul, verde, roxo)

### ✅ Validação Automática
- Verifica se os níveis são solucionáveis
- Regenera automaticamente níveis inválidos
- Garante distribuição adequada de cores

## 📖 Como Usar

### Uso Básico

```javascript
// Gerar um nível procedural
const level = generateProceduralLevel(25);

// Gerar com seed customizada
const levelCustomizado = generateProceduralLevel(25, "minhaSeed");

// Gerar nível temático
const levelTematico = generateThemedLevel("rainbow", 30);
```

### Configuração no Jogo

O sistema está configurado para ativar automaticamente a partir do nível 20. Para alterar:

```javascript
// Em levels.js
const USE_PROCEDURAL_LEVELS = true;
const PROCEDURAL_START_LEVEL = 20; // Altere este valor
```

### Gerando Múltiplos Níveis

```javascript
// Gerar 10 níveis a partir do nível 100
const niveis = generateMultipleLevels(100, 10, "sequenciaEspecial");
```

## 🎮 Integração com o Jogo

### Estrutura do Nível Gerado

```javascript
{
    levelNumber: 25,
    difficulty: "MEDIO",
    seed: "25",
    baseSeed: 308625,
    config: [
        {
            maxBolas: 6,
            cor: 0,
            min: 0,
            bolas: [2, 3, 4, 2],
            tipo: "NORMAL"
        },
        // ... mais tubos
    ],
    metadata: {
        totalBolas: 24,
        coresUsadas: [2, 3, 4, 6],
        numTubos: 4,
        solucao: [/* sugestões de solução */]
    }
}
```

### Personalização Avançada

```javascript
// Acessar o gerador diretamente
const generator = new ProceduralLevelGenerator();

// Modificar configurações
generator.config.coresBasicas = [2, 3, 4]; // Cores para níveis iniciais
generator.config.maxTubosPorNivel = 12; // Máximo de tubos

// Gerar nível com configurações customizadas
const level = generator.generateLevel(50, "custom");
```

## 🛠️ Extensibilidade

### Adicionando Novos Tipos de Tubos

```javascript
// Em procedural.js, adicione ao objeto tipoTubos:
this.tipoTubos = {
    // ... tipos existentes
    MAGICO: { 
        cor: null, 
        descricao: "Tubo mágico com propriedades especiais" 
    }
};
```

### Adicionando Novos Temas

```javascript
// Em generateThemedLevel(), adicione novos casos:
case 'pastel':
    cores = [5, 8, 9, 11]; // Cores pastéis
    break;
```

### Criando Mecânicas Personalizadas

```javascript
// Exemplo: Sistema de power-ups
function generateLevelWithPowerUps(levelNumber) {
    const baseLevel = generateProceduralLevel(levelNumber);
    
    // Adicionar power-ups aleatórios
    baseLevel.config.forEach(tubo => {
        if (Math.random() < 0.3) { // 30% chance
            tubo.powerUp = ['bomba', 'imã', 'congelar'][Math.floor(Math.random() * 3)];
        }
    });
    
    return baseLevel;
}
```

## 🧪 Exemplos e Testes

Execute os exemplos no console do navegador:

```javascript
// Executar todos os exemplos
executarTodosExemplos();

// Testar seed específica
exemploSeedCustomizada();

// Testar níveis temáticos
exemploNiveisTematicos();
```

## 📊 Sistema de Estatísticas

O sistema inclui funções para rastrear:
- Níveis completados
- Tempo médio de resolução
- Cores preferidas
- Dificuldade preferida
- Seeds favoritas

## 🔧 Solução de Problemas

### Nível não aparece
- Verifique se `USE_PROCEDURAL_LEVELS = true`
- Confirme que o nível é >= `PROCEDURAL_START_LEVEL`
- Verifique o console para erros

### Nível muito fácil/difícil
- Ajuste as configurações de dificuldade em `dificuldades`
- Modifique o `PROCEDURAL_START_LEVEL`
- Use seeds customizadas para níveis específicos

### Erro de validação
- O sistema regenera automaticamente níveis inválidos
- Verifique se há cores suficientes (mínimo 4 por cor)
- Confirme que há espaço suficiente nos tubos

## 🎯 Próximas Funcionalidades

- [ ] Sistema de conquistas
- [ ] Níveis colaborativos
- [ ] Desafios diários
- [ ] Editor visual de níveis
- [ ] Compartilhamento de seeds
- [ ] Análise de dificuldade automática
- [ ] Sistema de rating de níveis

## 📝 Notas Técnicas

- O sistema usa pseudo-aleatoriedade baseada em seeds
- Níveis são validados automaticamente antes de serem usados
- O código é modular e facilmente extensível
- Compatível com o sistema de níveis existente
- Não interfere com os níveis manuais (1-19)

---

**Desenvolvido com ❤️ para o Joguinho TDAH**
