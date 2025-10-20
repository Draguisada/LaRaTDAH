let levelGlobal;
const r = document.querySelector(':root');
const bolaSizePadrao = '55px';

// Configuração para usar níveis procedural
const USE_PROCEDURAL_LEVELS = true;
const PROCEDURAL_START_LEVEL = 19; // A partir de qual nível usar geração procedural

// ========================================
// PERSONALIZAÇÃO DOS NOMES DOS NÍVEIS
// ========================================
// Edite aqui para personalizar os nomes dos níveis procedurais

const NOMES_NIVEIS = [
    "Desafio das Cores", "Labirinto Colorido", "Quebra-Cabeça Mágico", "Puzzle das Bolas",
    "Desafio do Arco-íris", "Mistério das Cores", "Enigma Colorido", "Desafio Impossível",
    "Torre de Cores", "Dança das Bolas", "Sinfonia Colorida", "Balé das Cores",
    "Desafio Lunar", "Quebra-Cabeça Solar", "Enigma Estelar", "Desafio Galáctico",
    "Mistério das Estrelas", "Puzzle Cósmico", "Desafio do Universo", "Enigma Espacial",
    "Desafio do Oceano", "Mistério das Profundezas", "Quebra-Cabeça Submarino", "Enigma Aquático",
    "Desafio da Floresta", "Mistério da Natureza", "Puzzle Verde", "Enigma Natural",
    "Desafio do Fogo", "Mistério das Chamas", "Quebra-Cabeça Ardente", "Enigma Ígneo",
    "Desafio do Gelo", "Mistério Congelado", "Puzzle Gelado", "Enigma Glacial",
    "Desafio do Vento", "Mistério Aéreo", "Quebra-Cabeça Voador", "Enigma Celestial"
];

const NOMES_ESPECIAIS = {
    20: "🎯 Primeiro Procedural",
    30: "🌟 Estrela Dourada", 
    40: "💎 Diamante Precioso",
    50: "👑 Coroa Real",
    60: "🏆 Troféu de Ouro",
    70: "💫 Estrela Cadente",
    80: "🌙 Lua Cheia",
    90: "☀️ Sol Brilhante",
    100: "🎊 Centésimo Nível!"
};

const EMOJIS_COMPLEXIDADE = {
    INICIANTE: "🌱",    // Níveis 20-30
    INTERMEDIARIO: "🌿", // Níveis 31-60  
    AVANCADO: "🌳"      // Níveis 61+
};

function changeLevels(level) {
    mainGame.innerHTML = '';

    levelDisplay.innerText = level;

    r.style.setProperty('--bolaSize', bolaSizePadrao);

    vitoria(false);
    gameState.corSegurar = 999;
    let tubosGameplay;

    renderizarPreview();
    toggleAcabou(false);
    levelGlobal = level;

    localStorage.setItem('salvarNivel', levelGlobal);
    resetState();
    
    switch (level) {
        case 1:
            nomeNivel('Joguinho TDAH pra LaRa :D');
            obj = new Tubo(3, 0);
            obj.gerarBolas([2, 3]);
            
            obj = new Tubo(3);
            obj.gerarBolas();
            
            break;
        case 2:
            nomeNivel('Mais parecido com aqueles anúncios');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/8}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=4, cor=999, min=0);
            obj.gerarBolas([2,3,4,2]);
            
            obj = new Tubo(maxBolas=4, cor=999, min=0);
            obj.gerarBolas([3,3,4,2]);

            obj = new Tubo(maxBolas=4, cor=0, min=3);
            obj.gerarBolas([4,2,3,4]);

            obj = new Tubo(maxBolas=4, cor=0, min=3);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=4, cor=0, min=3);
            obj.gerarBolas();
            break;
        case 3:
            nomeNivel('Tubos invisíveis!');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);

            obj = new Tubo(6, 999);
            obj.gerarBolas([6, 7, 8, 8, 7, 6]);

            obj = new Tubo(5, 0, 4);
            obj.gerarBolas();

            obj = new Tubo(5, 0, 4);
            obj.gerarBolas();

            obj = new Tubo(5, 0, 4);
            obj.gerarBolas();

            obj = new Tubo(6, 999);
            obj.gerarBolas([6, 7, 8, 8, 7, 6]);

            break;
        case 4:
            nomeNivel('Começa a doer <br><br> Clica no título (aqui) pra mostrar as cores!');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);

            obj = new Tubo(maxBolas=6, cor=0);
            obj.gerarBolas([11,6,7,8,11,6]);
            
            obj = new Tubo(maxBolas=6, cor=0);
            obj.gerarBolas([11,11,6,7,11,8]);

            obj = new Tubo(maxBolas=6, cor=0);
            obj.gerarBolas([6,11,8,8]);

            obj = new Tubo(maxBolas=6, cor=0);
            obj.gerarBolas([7,6,7]);

            obj = new Tubo(maxBolas=6, cor=0);
            obj.gerarBolas([8,6,7,8,7]);
            break;
        case 6:
            nomeNivel('Tubos coloridos!');
            obj = new Tubo(maxBolas=4, cor=6, min=2);
            obj.gerarBolas([6, 6, 8, 8]);
            
            obj = new Tubo(3);
            obj.gerarBolas();

            obj = new Tubo(3, 8);
            obj.gerarBolas();

            break;
        case 5:
            nomeNivel('Meu deus quanto');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/13}px, ${bolaSizePadrao})`);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([5]);
            
            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([6,6,6,8,8,6,9,6,6]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([7,7,7,7,7,7,7,7,7]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([8,6,6,8,5,8,5,5,5]);
            
            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([9,6,6,5,8,8,5,5,5,7]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([9,9,9,9,9,9,9,9]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([8,8,8]);

            break;
        case 7:
            nomeNivel('... e tamanhos diferentes?');
            obj = new Tubo(maxBolas=4, cor =0, min = 0);
            obj.gerarBolas([4, 2]);
            
            obj = new Tubo(maxBolas=2, cor=2, min=2);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=1, cor=3, min=1);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=3, cor=4, min=2);
            obj.gerarBolas([2, 4]);

            obj = new Tubo(maxBolas=4, cor=0, min=0);
            obj.gerarBolas([3]);
            break;
        case 9:
            nomeNivel('de 0 a 100 né');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/13}px, ${bolaSizePadrao})`);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([5]);
            
            obj = new Tubo(maxBolas=10, cor=6, min=10);
            obj.gerarBolas([6,6,6,8,8,6,9,6,6]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([7,7,7,7,7,7,7,7,7]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([8,6,6,8,5,8,5,5,5]);
            
            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([9,6,6,5,8,8,5,5,5,7]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([9,9,9,9,9,9,9,9]);

            obj = new Tubo(maxBolas=10, cor=8, min=10);
            obj.gerarBolas([8,8,8]);
            break;
        case 8:
            nomeNivel('.. e um tico de lógica');
            obj = new Tubo(maxBolas=4, cor=0);
            obj.gerarBolas([4,4,3]);
            
            obj = new Tubo(2, 3, 2);
            obj.gerarBolas();
            
            obj = new Tubo(4, 2, 1);
            obj.gerarBolas();
            
            obj = new Tubo(4, 0, 0);
            obj.gerarBolas([3, 4, 2]);
            break;
        case 10:
            nomeNivel('muito azulzinho');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/13}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=8, cor=0, min=0);
            obj.gerarBolas([8,8,8,8,7]);
            
            obj = new Tubo(maxBolas=5, cor=0, min=0);
            obj.gerarBolas([6,6, 7]);

            obj = new Tubo(maxBolas=8, cor=0, min=0);
            obj.gerarBolas([8, 8, 6, 6, 8, 8, 6, 7]);

            obj = new Tubo(maxBolas=8, cor=0, min=0);
            obj.gerarBolas([6, 6, 8, 6, 8, 7]);

            obj = new Tubo(maxBolas=6, cor=0, min=0);
            obj.gerarBolas([8, 8, 6, 7]);

            obj = new Tubo(maxBolas=8, cor=0, min=0);
            obj.gerarBolas([10, 10, 10, 10, 10]);

            break;
        case 11:
            nomeNivel('ficando com pouco espaço...');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=7, cor=7, min=5);
            obj.gerarBolas([8,12,12,10,8,8]);
            
            obj = new Tubo(maxBolas=5, cor=0, min=0);
            obj.gerarBolas([12,10,8,8,7]);

            obj = new Tubo(maxBolas=7, cor=0, min=0);
            obj.gerarBolas([7,8,12,10,12,8]);

            obj = new Tubo(maxBolas=7, cor=0, min=0);
            obj.gerarBolas([10,12,10]);

            obj = new Tubo(maxBolas=5, cor=10, min=0);
            obj.gerarBolas([7,7,7,7]);

        break;

        case 12:
            nomeNivel('Meu deus quanto tubo colorido');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=8, cor=8, min=7);
            obj.gerarBolas([12,12,8,12,10,10,8]);
            
            obj = new Tubo(maxBolas=8, cor=12, min=5);
            obj.gerarBolas([10,4,10,4,8,4,12]);

            obj = new Tubo(maxBolas=7, cor=10, min=6);
            obj.gerarBolas([4,10,4,10,8,12]);

            obj = new Tubo(maxBolas=2, cor=0, min=0);
            obj.gerarBolas([4]);

            obj = new Tubo(maxBolas=6, cor=4, min=6);
            obj.gerarBolas([8,8,8]);

        break;

        case 13:
            nomeNivel('Quanto pouco espaço..');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=1, cor=0, min=0);
            obj.gerarBolas();
            
            obj = new Tubo(maxBolas=2, cor=0, min=0);
            obj.gerarBolas([ 7, 8]);
            
            obj = new Tubo(maxBolas=2, cor=8, min=0);
            obj.gerarBolas([1, 1]);

            obj = new Tubo(maxBolas=3, cor=0, min=0);
            obj.gerarBolas([9, 1]);

            obj = new Tubo(maxBolas=3, cor=0, min=0);
            obj.gerarBolas([7, 9, 8]);

            obj = new Tubo(maxBolas=4, cor=0, min=0);
            obj.gerarBolas([6, 6, 1, 1]);

            obj = new Tubo(maxBolas=2, cor=0, min=0);
            obj.gerarBolas([1]);

        break;
        case 14:
            nomeNivel('Ai ta doendo, ta prensado <br><br> clique duas vezes no vazio para reverter');
            obj = new Tubo(maxBolas=1, cor=0, min=0);
            obj.gerarBolas([1,  2]);
            obj = new Tubo(maxBolas=1, cor=0, min=0);
            obj.gerarBolas([1,  2]);
            
            obj = new Tubo(maxBolas=1, cor=0, min=0);
            obj.gerarBolas([]);

            obj = new Tubo(maxBolas=2, cor=2, min=2);
            obj.gerarBolas([]);
            break;
        case 15:
            nomeNivel('Ordem! <i>paranormal<i>');
            obj = new Tubo(maxBolas=1, cor=0, min=1);
            obj.gerarBolas([]);
            obj = new Tubo(maxBolas=1, cor=7, min=1);
            obj.gerarBolas([8, 7]);
            
            obj = new Tubo(maxBolas=1, cor=7, min=1);
            obj.gerarBolas([7, 8]);

            obj = new Tubo(maxBolas=1, cor=0, min=2);
            obj.gerarBolas([]);

            break;
        case 16:
            nomeNivel('Boa sorte');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/13}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=8, cor=0, min=0);
            obj.gerarBolas([1, 2, 3, 4, 1, 2, 5, 3]);

            obj = new Tubo(maxBolas=8, cor=6, min=0);
            obj.gerarBolas([4, 4, 6, 2, 3, 5, 6, 1 ]);

            obj = new Tubo(maxBolas=7, cor=2, min=0);
            obj.gerarBolas([4, 2, 1, 5, 6, 3, 4, 4]);
            
            obj = new Tubo(maxBolas=7, cor=0, min=0);
            obj.gerarBolas([3, 1, 2, 6, 4, 6, 5, 3]);

            obj = new Tubo(maxBolas=7, cor=0, min=0);
            obj.gerarBolas([5, 4, 6, 2, 5, 6, 1, 3]);
            
            obj = new Tubo(maxBolas=8, cor=5, min=0);
            obj.gerarBolas([2, 5, 5, 2, 3, 1, 1, 6]);
            
            obj = new Tubo(maxBolas=8, cor=4, min=0);
            obj.gerarBolas([]);
            
            obj = new Tubo(maxBolas=7, cor=0, min=0);
            obj.gerarBolas([]);
            
            break;
        
            case 17:
            nomeNivel('Como é possível isso');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);

            obj = new Tubo(maxBolas=5, cor=5, min=4);
            obj.gerarBolas([1, 2, 3, 2]);
            
            obj = new Tubo(maxBolas=4, cor=0, min=0);
            obj.gerarBolas([ 3, 1, ]);

            obj = new Tubo(maxBolas=5, cor=2, min=5);
            obj.gerarBolas([4, 2, 4, 3, 2]);

            obj = new Tubo(maxBolas=4, cor=2, min=4);
            obj.gerarBolas([3, 5, 4, 2]);

            obj = new Tubo(maxBolas=2, cor=0, min=0);
            obj.gerarBolas([5, 4, 5]);

            obj = new Tubo(maxBolas=4, cor=3, min=3);
            obj.gerarBolas([ 3, 2, 1, 5]);

            obj = new Tubo(maxBolas=5, cor=3, min=4);
            obj.gerarBolas([3, 3,  1, 2]);

            obj = new Tubo(maxBolas=3, cor=0, min=0);
            obj.gerarBolas([3, 2, 2]);

            new Tubo(maxBolas=1, cor=0)
            break;

            case 18:
            nomeNivel('Como é possível isso');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=6, cor=0, min=0);
            obj.gerarBolas([1, 2,  1, 2, 3, 1, 3]);
            obj = new Tubo(maxBolas=6, cor=0, min=0);
            obj.gerarBolas([3,3, 1, 4, 1, 4, 2]);
            obj = new Tubo(maxBolas=8, cor=0, min=0);
            obj.gerarBolas([4, 5, 3, 1, 3, 2]);
            obj = new Tubo(maxBolas=2, cor=0, min=0);
            obj.gerarBolas([ 4, 5, 2]);
            obj = new Tubo(maxBolas=6, cor=0, min=0);
            obj.gerarBolas([4, 4, 3, 1]);
            obj = new Tubo(maxBolas=5, cor=2, min=0);
            obj.gerarBolas([5, 5, 5, 5]);
            obj = new Tubo(maxBolas=3, cor=0, min=0);
            obj.gerarBolas([]);
            break;
        
        default:
            // Níveis procedural a partir do nível 20
            if (USE_PROCEDURAL_LEVELS && level >= PROCEDURAL_START_LEVEL) {
                generateProceduralLevelContent(level);
            } else {
                // Nível não encontrado
                nomeNivel('Nível não encontrado');
                toggleAcabou(true);
            }
        break;
    }

    
    saveState();
    geralEvento();
    tubosGameplay = document.getElementsByClassName('tubo');
}

/**
 * Gera nome criativo para o nível procedural
 * @param {number} level - Número do nível
 * @param {number} numTubos - Número de tubos
 * @param {number} numCores - Número de cores
 * @returns {string} Nome do nível
 */
function gerarNomeNivel(level, numTubos, numCores) {
    // Usar nome especial se for múltiplo de 10
    let nomeNivel = 'O tal do infinito';
    // Adicionar emoji baseado na complexidade
    let emoji;
    if (level <= 30) {
        emoji = EMOJIS_COMPLEXIDADE.INICIANTE;
    } else if (level <= 60) {
        emoji = EMOJIS_COMPLEXIDADE.INTERMEDIARIO;
    } else {
        emoji = EMOJIS_COMPLEXIDADE.AVANCADO;
    }
    
    if (level == 100) {
        nomeNivel = 'meu deus amor';
    } else if (level == 200) {
        nomeNivel = 'Meu. deus.'
    } else if (level == 300) {
        nomeNivel = 'Me contate amor meu deus pare é o nível 300 já'
    }

    
    return `${emoji} ${nomeNivel}`;
}

/**
 * Gera conteúdo para um nível procedural
 * @param {number} level - Número do nível
 */
function generateProceduralLevelContent(level) {
    try {
        // Gerar configuração do nível
        const levelConfig = generateProceduralLevel(level);
        
        // Definir nome do nível baseado no número e configuração
        const numTubos = levelConfig.config.length;
        const numCores = levelConfig.metadata.coresUsadas.length;
        
        // Gerar nome criativo baseado no nível
        const levelName = gerarNomeNivel(level, numTubos, numCores);
        nomeNivel(levelName);
        
        // Ajustar tamanho das bolas baseado na quantidade de tubos
        if (numTubos > 6) {
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/12}px, ${bolaSizePadrao})`);
        } else if (numTubos > 4) {
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);
        }
        
        // Criar tubos baseado na configuração
        levelConfig.config.forEach((tuboConfig, index) => {
            const obj = new Tubo(
                tuboConfig.maxBolas,
                tuboConfig.cor,
                tuboConfig.min
            );
            
            // Adicionar bolas se houver (em ordem reversa para empilhar corretamente)
            if (tuboConfig.bolas && tuboConfig.bolas.length > 0) {
                obj.gerarBolas([...tuboConfig.bolas].reverse());
            }
        });
        
        // Log para debug (pode ser removido em produção)
        console.log(`Nível ${level} gerado procedural:`, levelConfig);
        
    } catch (error) {
        console.error('Erro ao gerar nível procedural:', error);
        nomeNivel('Erro na geração do nível');
        
        // Fallback: criar um nível simples
        const obj = new Tubo(4, 0);
        obj.gerarBolas([2, 3]);
        
        const obj2 = new Tubo(4, 0);
        obj2.gerarBolas([3, 2]);
    }
}

/**
 * Gera um nível temático procedural
 * @param {string} theme - Tema do nível
 * @param {number} level - Número do nível
 */
function generateThemedLevelContent(theme, level) {
    try {
        const levelConfig = generateThemedLevel(theme, level);
        
        const themeNames = {
            'rainbow': 'Arco-íris',
            'monochrome': 'Monocromático',
            'warm': 'Cores Quentes',
            'cool': 'Cores Frias',
            'sunset': 'Pôr do Sol',
            'ocean': 'Oceano',
            'forest': 'Floresta',
            'fire': 'Fogo',
            'ice': 'Gelo',
            'autumn': 'Outono',
            'spring': 'Primavera',
            'neon': 'Neon',
            'pastel': 'Pastéis',
            'vintage': 'Vintage',
            'galaxy': 'Galáxia'
        };
        
        const levelName = `${themeNames[theme]} - Nível ${level}`;
        nomeNivel(levelName);
        
        // Criar tubos baseado na configuração
        levelConfig.config.forEach((tuboConfig, index) => {
            const obj = new Tubo(
                tuboConfig.maxBolas,
                tuboConfig.cor,
                tuboConfig.min
            );
            
            if (tuboConfig.bolas && tuboConfig.bolas.length > 0) {
                obj.gerarBolas([...tuboConfig.bolas].reverse());
            }
        });
        
        console.log(`Nível temático ${theme} gerado:`, levelConfig);
        
    } catch (error) {
        console.error('Erro ao gerar nível temático:', error);
        generateProceduralLevelContent(level); // Fallback
    }
}

// aaa