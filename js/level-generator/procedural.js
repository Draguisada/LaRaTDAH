/**
 * Gerador de Níveis Procedural para Joguinho TDAH
 * Sistema baseado em seeds para geração determinística de níveis
 */

class ProceduralLevelGenerator {
    constructor() {
        // Configurações base do gerador
        this.config = {
            // Todas as cores disponíveis (54 cores no total)
            cores: [
                // Cores básicas originais
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                // Novas cores - vermelhos e rosas
                15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                // Novas cores - azuis e roxos
                25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
                // Novas cores - verdes e amarelos
                35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
                // Novas cores - laranjas e tons especiais
                45, 46, 47, 48, 49, 50, 51, 52, 53, 54
            ],
            coresBasicas: [2, 3, 4, 6, 7, 8, 15, 25, 35], // Cores mais comuns para níveis iniciais
            coresAvancadas: [5, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54], // Cores mais raras
            maxTubosPorNivel: 8,
            maxBolasPorTubo: 10,
            minBolasPorTubo: 1
        };

        // Tipos de tubos disponíveis
        this.tipoTubos = {
            NORMAL: { cor: 0, descricao: "Tubo normal (sem cor específica)" },
            COLORIDO: { cor: null, descricao: "Tubo com cor específica" },
            INVISIVEL: { cor: 999, descricao: "Tubo invisível (apenas para organização)" },
            RESTRITO: { cor: 0, descricao: "Tubo com restrições de quantidade mínima" }
        };

        // Configurações simplificadas - sempre funciona
        this.configuracaoBase = {
            minTubos: 4,
            maxTubos: 12,
            minBolasPorTubo: 2,
            maxBolasPorTubo: 8,
            minCores: 1 // Será calculado como tubos - 1
        };
    }

    /**
     * Gera um número pseudo-aleatório baseado em seed
     * @param {number} seed - Semente para geração
     * @returns {number} Número entre 0 e 1
     */
    seededRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    /**
     * Gera um inteiro pseudo-aleatório dentro de um range
     * @param {number} seed - Semente base
     * @param {number} min - Valor mínimo
     * @param {number} max - Valor máximo
     * @returns {number} Número inteiro no range
     */
    randomInt(seed, min, max) {
        return Math.floor(this.seededRandom(seed) * (max - min + 1)) + min;
    }

    /**
     * Escolhe elementos aleatórios de um array baseado em seed
     * @param {Array} array - Array para escolher elementos
     * @param {number} count - Quantidade de elementos
     * @param {number} seed - Semente base
     * @returns {Array} Array com elementos escolhidos
     */
    randomChoice(array, count, seed) {
        const result = [];
        const available = [...array];
        
        for (let i = 0; i < count && available.length > 0; i++) {
            const randomIndex = this.randomInt(seed + i * 1000, 0, available.length - 1);
            result.push(available[randomIndex]);
            available.splice(randomIndex, 1);
        }
        
        return result;
    }

    /**
     * Calcula o número de tubos baseado no nível
     * @param {number} levelNumber - Número do nível
     * @param {number} seed - Seed para randomização
     * @returns {number} Número de tubos
     */
    getNumTubos(levelNumber, seed) {
        // Progressão suave: níveis baixos = menos tubos, níveis altos = mais tubos
        let minTubos = this.configuracaoBase.minTubos;
        let maxTubos = this.configuracaoBase.maxTubos;
        
        // Ajustar baseado no nível
        if (levelNumber <= 10) {
            maxTubos = 6; // Níveis iniciais: 4-6 tubos
        } else if (levelNumber <= 25) {
            maxTubos = 8; // Níveis médios: 4-8 tubos
        } else {
            maxTubos = this.configuracaoBase.maxTubos; // Níveis altos: até 12 tubos
        }
        
        return this.randomInt(seed, minTubos, maxTubos);
    }

    /**
     * Gera um nível procedural baseado em seed
     * @param {number} levelNumber - Número do nível
     * @param {string} customSeed - Seed customizada (opcional)
     * @returns {Object} Configuração do nível
     */
    generateLevel(levelNumber, customSeed = null) {
        // Usar seed customizada ou gerar baseada no número do nível
        const baseSeed = customSeed ? this.stringToSeed(customSeed) : levelNumber * 12345;
        
        // REGRA 1: Tubos vai de 4 até 12
        const numTubos = this.getNumTubos(levelNumber, baseSeed + 1);
        
        // REGRA 2: Número de cores deve ser: Número de tubos - 1 NO MÍNIMO
        const numCores = numTubos - 1;
        
        // Escolher cores aleatórias
        const coresUsadas = this.randomChoice(
            levelNumber <= 15 ? this.config.coresBasicas : this.config.cores,
            numCores,
            baseSeed + 2
        );

        // REGRA 3: Cada tubo pode conter de 2 a 8 bolas
        // REGRA 4: Total de bolas pode ser NO MÁXIMO: O máximo de espaço nos tubos - (o maior tubo/2)
        const configuracaoTubos = this.generateSimpleTubeConfiguration(
            numTubos, 
            coresUsadas, 
            baseSeed + 3
        );

        return {
            levelNumber,
            difficulty: 'SIMPLES',
            seed: customSeed || levelNumber.toString(),
            baseSeed,
            config: configuracaoTubos,
            metadata: {
                totalBolas: configuracaoTubos.reduce((sum, tubo) => sum + tubo.bolas.length, 0),
                coresUsadas,
                numTubos,
                solucao: this.generateSolution(configuracaoTubos, baseSeed + 4)
            }
        };
    }

    /**
     * Gera configuração simples de tubos seguindo as regras exatas
     * @param {number} numTubos - Número de tubos
     * @param {Array} coresUsadas - Cores disponíveis
     * @param {number} seed - Seed para randomização
     * @returns {Array} Configuração dos tubos
     */
    generateSimpleTubeConfiguration(numTubos, coresUsadas, seed) {
        const configuracao = [];
        
        // Criar todas as bolas necessárias (4 de cada cor)
        const todasBolas = [];
        coresUsadas.forEach(cor => {
            for (let i = 0; i < 4; i++) {
                todasBolas.push(cor);
            }
        });
        
        // Misturar as bolas
        const bolasMisturadas = this.shuffleArray([...todasBolas], seed);
        
        // Calcular limites baseados nas regras
        const totalEspaco = numTubos * this.configuracaoBase.maxBolasPorTubo; // Espaço total máximo
        const maiorTubo = this.configuracaoBase.maxBolasPorTubo;
        const limiteMaximo = totalEspaco - Math.floor(maiorTubo / 2); // Regra: máximo - (maior tubo/2)
        
        // Usar menos bolas para garantir mais espaços vazios
        const totalBolasUsar = Math.min(bolasMisturadas.length, limiteMaximo - 4); // -4 para garantir espaços extras
        
        // Distribuir bolas pelos tubos
        let bolaIndex = 0;
        for (let i = 0; i < numTubos; i++) {
            // Cada tubo pode ter de 2 a 8 bolas
            const maxBolasTubo = this.randomInt(seed + i * 100, 
                this.configuracaoBase.minBolasPorTubo, 
                this.configuracaoBase.maxBolasPorTubo
            );
            
            const bolasTubo = [];
            const bolasNesteTubo = Math.min(
                maxBolasTubo,
                totalBolasUsar - bolaIndex,
                Math.max(2, Math.floor(totalBolasUsar / numTubos)) // Distribuir mais ou menos igual
            );
            
            // Adicionar bolas ao tubo
            for (let j = 0; j < bolasNesteTubo && bolaIndex < totalBolasUsar; j++) {
                bolasTubo.push(bolasMisturadas[bolaIndex]);
                bolaIndex++;
            }
            
            configuracao.push({
                maxBolas: maxBolasTubo,
                cor: 0, // Sempre tubo normal
                min: 0,
                bolas: bolasTubo,
                tipo: 'NORMAL'
            });
        }
        
        return configuracao;
    }

    /**
     * Gera distribuição de bolas válida para os tubos
     * @param {Array} coresUsadas - Cores que serão usadas no nível
     * @param {number} numTubos - Número de tubos
     * @param {Object} config - Configuração de dificuldade
     * @param {number} seed - Semente para geração
     * @returns {Array} Array com distribuição de bolas válida
     */
    generateValidBallDistribution(coresUsadas, numTubos, config, seed) {
        // Regras: cada cor deve ter exatamente 4 bolas
        // Pelo menos 2 tubos devem estar vazios
        // cores = tubos - 1
        
        const resultado = [];
        
        // Criar todas as bolas (4 de cada cor)
        const todasBolas = [];
        coresUsadas.forEach(cor => {
            for (let i = 0; i < 4; i++) {
                todasBolas.push(cor);
            }
        });
        
        // Misturar as bolas
        const bolasMisturadas = this.shuffleArray([...todasBolas], seed);
        
        // Determinar quantos tubos terão bolas (máximo numTubos - 2 para garantir 2 vazios)
        const maxTubosComBolas = Math.max(1, numTubos - 2);
        const numTubosComBolas = this.randomInt(seed + 100, 1, maxTubosComBolas);
        
        // Distribuir bolas pelos tubos
        let bolaIndex = 0;
        for (let i = 0; i < numTubos; i++) {
            const maxBolasTubo = this.randomInt(seed + i * 1000, 4, config.maxBolasPorTubo);
            
            if (i < numTubosComBolas && bolaIndex < bolasMisturadas.length) {
                // Tubo com bolas
                const bolasTubo = [];
                const bolasNesteTubo = Math.min(
                    bolasMisturadas.length - bolaIndex,
                    maxBolasTubo
                );
                
                for (let j = 0; j < bolasNesteTubo; j++) {
                    bolasTubo.push(bolasMisturadas[bolaIndex + j]);
                }
                
                resultado.push({
                    bolas: bolasTubo,
                    maxBolas: maxBolasTubo
                });
                
                bolaIndex += bolasNesteTubo;
            } else {
                // Tubo vazio
                resultado.push({
                    bolas: [],
                    maxBolas: maxBolasTubo
                });
            }
        }
        
        return resultado;
    }

    /**
     * Mistura um array usando seed determinística
     * @param {Array} array - Array para misturar
     * @param {number} seed - Semente para mistura
     * @returns {Array} Array misturado
     */
    shuffleArray(array, seed) {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(this.seededRandom(seed + i * 1000) * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    /**
     * Gera distribuição de bolas para os tubos (versão antiga - mantida para compatibilidade)
     * @param {Array} coresUsadas - Cores que serão usadas no nível
     * @param {number} numTubos - Número de tubos
     * @param {Object} config - Configuração de dificuldade
     * @param {number} seed - Semente para geração
     * @returns {Array} Array com distribuição de bolas
     */
    generateBallDistribution(coresUsadas, numTubos, config, seed) {
        // Usar a nova função válida
        return this.generateValidBallDistribution(coresUsadas, numTubos, config, seed);
    }

    /**
     * Gera configuração específica dos tubos
     * @param {number} numTubos - Número de tubos
     * @param {Array} distribuicao - Distribuição de bolas
     * @param {number} seed - Semente para geração
     * @returns {Array} Configuração dos tubos
     */
    generateTubeConfiguration(numTubos, distribuicao, seed) {
        const configuracao = [];
        
        for (let i = 0; i < numTubos; i++) {
            const dist = distribuicao[i];
            const tipoTubo = this.getRandomTubeType(seed + i * 100);
            
            let configTubo = {
                maxBolas: dist.maxBolas,
                cor: tipoTubo.cor,
                min: 0,
                bolas: dist.bolas,
                tipo: tipoTubo.tipo
            };

            // Aplicar variações baseadas no tipo
            switch (tipoTubo.tipo) {
                case 'COLORIDO':
                    configTubo.cor = this.randomChoice(this.config.cores, 1, seed + i * 100 + 1)[0];
                    break;
                case 'RESTRITO':
                    configTubo.min = this.randomInt(seed + i * 100 + 2, 1, Math.min(3, dist.maxBolas));
                    break;
                case 'INVISIVEL':
                    configTubo.cor = 999;
                    configTubo.bolas = []; // Tubos invisíveis começam vazios
                    break;
            }

            configuracao.push(configTubo);
        }

        return configuracao;
    }

    /**
     * Escolhe um tipo de tubo aleatório
     * @param {number} seed - Semente para geração
     * @returns {Object} Tipo de tubo escolhido
     */
    getRandomTubeType(seed) {
        const tipos = [
            { tipo: 'NORMAL', cor: 0 },
            { tipo: 'COLORIDO', cor: null },
            { tipo: 'RESTRITO', cor: 0 },
            { tipo: 'INVISIVEL', cor: 999 }
        ];

        const randomIndex = this.randomInt(seed, 0, tipos.length - 1);
        return tipos[randomIndex];
    }

    /**
     * Gera uma solução básica para o nível (para validação)
     * @param {Array} configTubos - Configuração dos tubos
     * @param {number} seed - Semente para geração
     * @returns {Array} Solução sugerida
     */
    generateSolution(configTubos, seed) {
        // Esta é uma implementação básica - pode ser expandida para gerar soluções mais complexas
        const cores = [...new Set(configTubos.flatMap(tubo => tubo.bolas))];
        const solucao = [];

        cores.forEach(cor => {
            const bolasCor = configTubos.flatMap(tubo => 
                tubo.bolas.filter(bola => bola === cor)
            );
            
            if (bolasCor.length >= 4) {
                solucao.push({
                    cor: cor,
                    acoes: `Agrupar todas as ${bolasCor.length} bolas da cor ${cor}`
                });
            }
        });

        return solucao;
    }

    /**
     * Converte string em seed numérica
     * @param {string} str - String para converter
     * @returns {number} Seed numérica
     */
    stringToSeed(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    }

    /**
     * Validação simples - verifica apenas as regras essenciais
     * @param {Object} level - Configuração do nível
     * @returns {Object} Resultado da validação
     */
    validateLevel(level) {
        const result = {
            isValid: true,
            errors: []
        };

        // REGRA 1: Tubos de 4 a 12
        if (level.config.length < 4 || level.config.length > 12) {
            result.isValid = false;
            result.errors.push(`Nível deve ter 4-12 tubos (tem ${level.config.length})`);
        }

        // REGRA 2: Cores = tubos - 1 (mínimo)
        const cores = [...new Set(level.config.flatMap(tubo => tubo.bolas))];
        if (cores.length < level.config.length - 1) {
            result.isValid = false;
            result.errors.push(`Nível deve ter pelo menos ${level.config.length - 1} cores (tem ${cores.length})`);
        }

        // REGRA 3: Cada cor deve ter 4 bolas
        for (const cor of cores) {
            const totalBolas = level.config.reduce((sum, tubo) => 
                sum + tubo.bolas.filter(bola => bola === cor).length, 0
            );
            
            if (totalBolas !== 4) {
                result.isValid = false;
                result.errors.push(`Cor ${cor} deve ter exatamente 4 bolas (tem ${totalBolas})`);
            }
        }

        // REGRA 4: Verificar espaços vazios
        const totalBolas = level.config.reduce((sum, tubo) => sum + tubo.bolas.length, 0);
        const totalEspaco = level.config.reduce((sum, tubo) => sum + tubo.maxBolas, 0);
        const espacosVazios = totalEspaco - totalBolas;
        
        if (espacosVazios < 2) {
            result.isValid = false;
            result.errors.push(`Deve haver pelo menos 2 espaços vazios (tem ${espacosVazios})`);
        }

        return result;
    }

    /**
     * Verifica se um nível é matematicamente solucionável
     * @param {Array} config - Configuração dos tubos
     * @returns {boolean} Se é solucionável
     */
    isMathematicallySolvable(config) {
        // Contar cores e suas quantidades
        const cores = [...new Set(config.flatMap(tubo => tubo.bolas))];
        const coresComQuantidade = {};
        
        cores.forEach(cor => {
            coresComQuantidade[cor] = config.reduce((sum, tubo) => 
                sum + tubo.bolas.filter(bola => bola === cor).length, 0
            );
        });

        // Verificar se cada cor tem exatamente 4 bolas
        for (const cor of cores) {
            if (coresComQuantidade[cor] !== 4) {
                return false;
            }
        }

        // Verificar se há espaço suficiente para organizar todas as cores
        const totalBolas = Object.values(coresComQuantidade).reduce((sum, qtd) => sum + qtd, 0);
        const totalEspaco = config.reduce((sum, tubo) => sum + tubo.maxBolas, 0);
        
        // Precisa de pelo menos: cores * 4 bolas + 2 espaços vazios
        const espacoNecessario = totalBolas + 2;
        
        return totalEspaco >= espacoNecessario;
    }

    /**
     * Gera múltiplos níveis procedural (sistema simplificado)
     * @param {number} startLevel - Nível inicial
     * @param {number} count - Quantidade de níveis
     * @param {string} customSeed - Seed customizada (opcional)
     * @returns {Array} Array de níveis gerados
     */
    generateMultipleLevels(startLevel, count, customSeed = null) {
        const levels = [];
        
        for (let i = 0; i < count; i++) {
            const levelNumber = startLevel + i;
            const level = this.generateLevel(levelNumber, customSeed);
            
            // Validação simples - deve sempre passar
            const validation = this.validateLevel(level);
            if (!validation.isValid) {
                console.warn(`Nível ${levelNumber} não é válido:`, validation.errors);
            }
            
            levels.push(level);
        }
        
        return levels;
    }

    /**
     * Gera um nível com tema específico
     * @param {string} theme - Tema do nível ('rainbow', 'monochrome', 'gradient', etc.)
     * @param {number} levelNumber - Número do nível
     * @returns {Object} Configuração do nível temático
     */
    generateThemedLevel(theme, levelNumber) {
        let cores;
        
        switch (theme) {
            case 'rainbow':
                cores = [15, 45, 40, 35, 25, 30]; // Arco-íris clássico
                break;
            case 'monochrome':
                cores = [52, 1, 50, 51]; // Tons de cinza e branco
                break;
            case 'warm':
                cores = [15, 16, 17, 45, 46, 47, 40, 41]; // Vermelhos, laranjas e amarelos
                break;
            case 'cool':
                cores = [25, 26, 27, 35, 36, 37, 30, 31]; // Azuis, verdes e roxos
                break;
            case 'sunset':
                cores = [15, 18, 45, 46, 40, 41, 42]; // Pôr do sol
                break;
            case 'ocean':
                cores = [25, 26, 27, 28, 35, 36, 37]; // Oceano profundo
                break;
            case 'forest':
                cores = [35, 36, 37, 38, 39, 40, 41]; // Floresta
                break;
            case 'fire':
                cores = [15, 16, 17, 18, 45, 46, 47, 48]; // Fogo
                break;
            case 'ice':
                cores = [25, 26, 27, 28, 29, 30, 31, 32]; // Gelo
                break;
            case 'autumn':
                cores = [45, 46, 47, 40, 41, 42, 43, 44]; // Outono
                break;
            case 'spring':
                cores = [35, 36, 37, 40, 41, 42, 45, 46]; // Primavera
                break;
            case 'neon':
                cores = [15, 25, 35, 45, 16, 26, 36, 46]; // Neon vibrante
                break;
            case 'pastel':
                cores = [18, 19, 20, 28, 29, 30, 38, 39, 40]; // Pastéis suaves
                break;
            case 'vintage':
                cores = [50, 51, 52, 53, 54, 15, 45, 35]; // Tons vintage
                break;
            case 'galaxy':
                cores = [25, 26, 27, 30, 31, 32, 50, 51]; // Galáxia
                break;
            default:
                return this.generateLevel(levelNumber);
        }
        
        // Gerar nível com cores específicas seguindo as regras simplificadas
        const baseSeed = levelNumber * 12345;
        
        // Usar as mesmas regras simplificadas
        const numTubos = this.getNumTubos(levelNumber, baseSeed + 1);
        const numCores = numTubos - 1;
        const coresUsadas = this.randomChoice(cores, Math.min(numCores, cores.length), baseSeed + 2);
        
        const configuracaoTubos = this.generateSimpleTubeConfiguration(numTubos, coresUsadas, baseSeed + 3);
        
        return {
            levelNumber,
            difficulty,
            theme,
            seed: levelNumber.toString(),
            baseSeed,
            config: configuracaoTubos,
            metadata: {
                totalBolas: distribuicaoBolas.reduce((sum, dist) => sum + dist.bolas.length, 0),
                coresUsadas,
                numTubos,
                solucao: this.generateSolution(configuracaoTubos, baseSeed + 5)
            }
        };
    }

    /**
     * Função de teste integrada para verificar o sistema simplificado
     * @param {number} levelNumber - Número do nível para testar
     * @returns {Object} Resultado do teste
     */
    testSystem(levelNumber = 19) {
        console.log(`🧪 Testando sistema simplificado com nível ${levelNumber}`);
        
        const startTime = Date.now();
        const level = this.generateLevel(levelNumber);
        const endTime = Date.now();
        
        const validation = this.validateLevel(level);
        
        const result = {
            levelNumber,
            isValid: validation.isValid,
            generationTime: endTime - startTime,
            config: level.config,
            metadata: level.metadata,
            errors: validation.errors
        };
        
        console.log(`✅ Nível ${levelNumber} gerado em ${result.generationTime}ms`);
        console.log(`   Tubos: ${level.config.length} (regra: 4-12)`);
        console.log(`   Cores: ${level.metadata.coresUsadas.length} (regra: tubos-1)`);
        console.log(`   Total bolas: ${level.metadata.totalBolas}`);
        console.log(`   Válido: ${validation.isValid ? 'SIM' : 'NÃO'}`);
        
        if (!validation.isValid) {
            console.log(`   Erros: ${validation.errors.join(', ')}`);
        }
        
        return result;
    }
}

// Instância global do gerador
const proceduralGenerator = new ProceduralLevelGenerator();

// Funções utilitárias para integração com o jogo existente
function generateProceduralLevel(levelNumber, customSeed = null) {
    return proceduralGenerator.generateLevel(levelNumber, customSeed);
}

function generateThemedLevel(theme, levelNumber) {
    return proceduralGenerator.generateThemedLevel(theme, levelNumber);
}

function generateMultipleLevels(startLevel, count, customSeed = null) {
    return proceduralGenerator.generateMultipleLevels(startLevel, count, customSeed);
}

// Função de teste integrada
function testProceduralSystem(levelNumber = 19) {
    return proceduralGenerator.testSystem(levelNumber);
}

// Função de teste rápido para verificar as regras
function testarRegrasSimples() {
    console.log("🧪 TESTE DAS REGRAS SIMPLIFICADAS");
    console.log("==================================");
    
    const niveis = [20, 25, 30, 35, 40];
    let todosValidos = true;
    
    niveis.forEach(numeroNivel => {
        console.log(`\n🎯 Testando nível ${numeroNivel}:`);
        
        const nivel = generateProceduralLevel(numeroNivel);
        const validacao = proceduralGenerator.validateLevel(nivel);
        
        console.log(`   Tubos: ${nivel.config.length} (regra: 4-12)`);
        console.log(`   Cores: ${nivel.metadata.coresUsadas.length} (regra: ${nivel.config.length}-1)`);
        console.log(`   Total bolas: ${nivel.metadata.totalBolas}`);
        
        // Verificar cada tubo
        nivel.config.forEach((tubo, index) => {
            const bolasTubo = tubo.bolas.length;
            const maxBolas = tubo.maxBolas;
            console.log(`   Tubo ${index + 1}: ${bolasTubo}/${maxBolas} bolas (regra: 2-8)`);
        });
        
        // Verificar espaços vazios
        const totalEspaco = nivel.config.reduce((sum, t) => sum + t.maxBolas, 0);
        const espacosVazios = totalEspaco - nivel.metadata.totalBolas;
        console.log(`   Espaços vazios: ${espacosVazios} (regra: ≥2)`);
        
        if (validacao.isValid) {
            console.log(`   ✅ VÁLIDO`);
        } else {
            console.log(`   ❌ INVÁLIDO: ${validacao.errors.join(', ')}`);
            todosValidos = false;
        }
    });
    
    console.log(`\n📊 RESULTADO FINAL: ${todosValidos ? '✅ TODOS VÁLIDOS' : '❌ ALGUNS INVÁLIDOS'}`);
    return todosValidos;
}

// Exportar para uso global
window.ProceduralLevelGenerator = ProceduralLevelGenerator;
window.generateProceduralLevel = generateProceduralLevel;
window.generateThemedLevel = generateThemedLevel;
window.generateMultipleLevels = generateMultipleLevels;
window.testProceduralSystem = testProceduralSystem;
window.testarRegrasSimples = testarRegrasSimples;
