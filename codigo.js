// ---------- QUIZ AUTOMACAO INDUSTRIAL ----------

// Função para embaralhar array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let quizQuestions = [
    // --- Contadores ---
    {
        question: "O que é um contador em automação industrial?",
        options: [
            "Dispositivo que conta pulsos elétricos",
            "Sensor de temperatura",
            "Regulador de tensão",
            "Protetor contra surtos"
        ],
        correctAnswer: 0,
        explanation: "Contadores acumulam e exibem o número de eventos ou pulsos elétricos recebidos."
    },
    {
        question: "Qual a principal aplicação de um contador em automação industrial?",
        options: [
            "Contar pulsos de sensores",
            "Medir tensão de rede",
            "Atuar como disjuntor",
            "Regular frequência elétrica"
        ],
        correctAnswer: 0,
        explanation: "Contadores são usados principalmente para contar eventos, pulsos de sensores ou ciclos de máquinas."
    },
    {
        question: "Qual tipo de sinal geralmente os contadores recebem?",
        options: [
            "Pulsos elétricos digitais",
            "Sinal de áudio",
            "Corrente contínua constante",
            "Temperatura do ambiente"
        ],
        correctAnswer: 0,
        explanation: "A entrada típica de contadores é um sinal de pulso digital, representando eventos ou ciclos."
    },

    {
        question: "Qual o tipo de contador que retorna ao zero após atingir um valor pré-definido?",
        options: [
            "Contador cíclico",
            "Contador ascendente",
            "Contador decrescente",
            "Contador acumulativo"
        ],
        correctAnswer: 0,
        explanation: "O contador cíclico reinicia sua contagem automaticamente quando atinge o valor configurado."
    },
    {
        question: "Em sistemas automáticos, os contadores são normalmente associados a:",
        options: [
            "Sensores de proximidade ou fim de curso",
            "Medidores de tensão",
            "Transformadores de corrente",
            "Controladores de temperatura"
        ],
        correctAnswer: 0,
        explanation: "Os contadores recebem pulsos de sensores de proximidade, encoders ou chaves fim de curso."
    },


    // --- Motor CC ---
    {
        question: "Qual a principal característica de um Motor CC?",
        options: [
            "Funciona com corrente contínua",
            "Não possui comutador",
            "Só opera em alta velocidade",
            "Não precisa de manutenção"
        ],
        correctAnswer: 0,
        explanation: "Motores CC operam com alimentação de corrente contínua e possuem comutador."
    },
    {
        question: "Qual a vantagem do motor CC em comparação ao motor CA?",
        options: [
            "Maior controle de velocidade",
            "Menor custo de fabricação",
            "Dispensa manutenção",
            "Não precisa de fonte de alimentação"
        ],
        correctAnswer: 0,
        explanation: "Motores CC permitem controle de velocidade preciso ajustando a tensão ou corrente."
    },
    {
        question: "O comutador no motor CC tem a função de:",
        options: [
            "Inverter a corrente na armadura",
            "Aumentar a tensão de entrada",
            "Proteger contra curto-circuito",
            "Controlar a temperatura"
        ],
        correctAnswer: 0,
        explanation: "O comutador realiza a inversão de corrente na armadura para manter o torque unidirecional."
    },

    {
        question: "Qual parte do motor CC é responsável por gerar o campo magnético?",
        options: [
            "Estator",
            "Comutador",
            "Rotor",
            "Escovas"
        ],
        correctAnswer: 0,
        explanation: "O estator do motor CC possui enrolamentos ou ímãs permanentes que geram o campo magnético."
    },
    {
        question: "Motores CC são muito usados em:",
        options: [
            "Aplicações que exigem controle de velocidade",
            "Transmissão de energia em alta tensão",
            "Iluminação residencial",
            "Sistemas trifásicos industriais"
        ],
        correctAnswer: 0,
        explanation: "Motores CC são preferidos em aplicações que necessitam de ajuste fino de velocidade e torque."
    },


    // --- Temporizador ---
    {
        question: "Para que serve um temporizador em circuitos elétricos?",
        options: [
            "Controlar o tempo de atuação de dispositivos",
            "Medir a temperatura ambiente",
            "Regular a tensão de entrada",
            "Proteger contra curto-circuito"
        ],
        correctAnswer: 0,
        explanation: "Temporizadores controlam o tempo de atuação de dispositivos, ligando ou desligando após um intervalo."
    },
    {
        question: "Qual aplicação típica de um temporizador em painéis elétricos?",
        options: [
            "Atrasar a energização de um motor",
            "Medir corrente elétrica",
            "Substituir o relé térmico",
            "Aumentar tensão nominal"
        ],
        correctAnswer: 0,
        explanation: "Temporizadores podem atrasar ou antecipar comandos, como a partida de um motor após alguns segundos."
    },
    {
        question: "Qual tipo de contato um temporizador pode acionar?",
        options: [
            "NA (normalmente aberto) ou NF (normalmente fechado)",
            "Somente contatos de potência",
            "Apenas resistores",
            "Nenhum, ele apenas mede tempo"
        ],
        correctAnswer: 0,
        explanation: "Temporizadores possuem contatos NA e NF que mudam de estado após o tempo programado."
    },

    {
        question: "Qual o nome do temporizador que inicia a contagem somente após receber um sinal de comando?",
        options: [
            "Temporizador retardo na energização",
            "Temporizador cíclico",
            "Temporizador instantâneo",
            "Temporizador regressivo"
        ],
        correctAnswer: 0,
        explanation: "O temporizador de retardo na energização só começa a contar após ser acionado."
    },
    {
        question: "Em automação, um temporizador pode ser utilizado para:",
        options: [
            "Fazer intertravamento entre motores",
            "Alterar a tensão nominal",
            "Reduzir a corrente elétrica",
            "Atuar como disjuntor"
        ],
        correctAnswer: 0,
        explanation: "Temporizadores permitem intertravamento de comandos, como partidas sequenciais entre motores."
    },


    // --- Partida Estrela-Triângulo ---
    {
        question: "Qual a vantagem da partida estrela-triângulo?",
        options: [
            "Reduz a corrente de partida do motor",
            "Aumenta a velocidade do motor",
            "Economiza energia permanentemente",
            "Elimina a necessidade de relés"
        ],
        correctAnswer: 0,
        explanation: "Ela reduz a corrente de partida para aproximadamente 1/3 da corrente nominal."
    },
    {
        question: "Em que situação se usa a partida estrela-triângulo?",
        options: [
            "Motores que podem partir com carga reduzida",
            "Motores de alta velocidade",
            "Sistemas de corrente contínua",
            "Aplicações de baixa potência"
        ],
        correctAnswer: 0,
        explanation: "É usada em motores que podem partir com carga reduzida, pois o torque inicial também cai."
    },
    {
        question: "Qual a desvantagem da partida estrela-triângulo?",
        options: [
            "Redução de torque no arranque",
            "Maior consumo de energia",
            "Gera ruído excessivo",
            "Não funciona em motores trifásicos"
        ],
        correctAnswer: 0,
        explanation: "O torque inicial é reduzido, sendo necessário que a carga seja leve para o motor partir corretamente."
    },

    {
        question: "Durante a partida estrela-triângulo, o motor inicialmente recebe:",
        options: [
            "Uma tensão reduzida",
            "Tensão nominal total",
            "Corrente contínua",
            "Nenhuma tensão"
        ],
        correctAnswer: 0,
        explanation: "Na ligação estrela, a tensão aplicada nos enrolamentos é reduzida, diminuindo a corrente de partida."
    },
    {
        question: "Qual dispositivo é essencial para realizar a comutação estrela-triângulo?",
        options: [
            "Contator",
            "Transformador",
            "Relé térmico",
            "Fusível"
        ],
        correctAnswer: 0,
        explanation: "A comutação entre estrela e triângulo é feita com contatores específicos."
    },


    // --- Partida Direta ---
    {
        question: "Como funciona a partida direta de motores?",
        options: [
            "Liga o motor diretamente na tensão nominal",
            "Usa transformador de partida",
            "Requer chave comutadora",
            "Só para motores pequenos"
        ],
        correctAnswer: 0,
        explanation: "Na partida direta, o motor é ligado diretamente à tensão nominal da rede."
    },
    {
        question: "Na partida direta, a corrente inicial pode ser:",
        options: [
            "6 a 8 vezes a corrente nominal",
            "Igual à corrente nominal",
            "Menor que a nominal",
            "Zero"
        ],
        correctAnswer: 0,
        explanation: "O motor em partida direta consome corrente de 6 a 8 vezes a corrente nominal da placa."
    },
    {
        question: "Quando se usa a partida direta?",
        options: [
            "Motores de pequena potência",
            "Motores acima de 100 CV",
            "Somente em corrente contínua",
            "Nunca deve ser utilizada"
        ],
        correctAnswer: 0,
        explanation: "A partida direta é aplicada a motores de baixa potência, onde a corrente de partida não sobrecarrega a rede."
    },

    {
        question: "Qual a principal limitação da partida direta?",
        options: [
            "A corrente de partida é muito alta",
            "Não funciona em corrente alternada",
            "Necessita transformador auxiliar",
            "Só pode ser usada em motores síncronos"
        ],
        correctAnswer: 0,
        explanation: "A partida direta causa corrente inicial elevada, limitando seu uso a motores de menor potência."
    },
    {
        question: "O que acontece com o torque do motor na partida direta?",
        options: [
            "É máximo logo no arranque",
            "É reduzido a 1/3",
            "Não existe torque inicial",
            "Depende do relé térmico"
        ],
        correctAnswer: 0,
        explanation: "Na partida direta, o motor recebe tensão plena, gerando torque de arranque máximo."
    },


    // --- Relé Térmico ---
    {
        question: "Qual a função principal do relé térmico?",
        options: [
            "Proteger o motor contra sobrecarga",
            "Controlar a temperatura ambiente",
            "Regular a velocidade do motor",
            "Medir a umidade do ar"
        ],
        correctAnswer: 0,
        explanation: "O relé térmico protege motores contra sobrecargas desligando o circuito."
    },
    {
        question: "O relé térmico atua quando:",
        options: [
            "O motor sofre sobrecarga por tempo prolongado",
            "A tensão da rede cai",
            "O motor está em vazio",
            "O motor gira em excesso"
        ],
        correctAnswer: 0,
        explanation: "Relés térmicos detectam aquecimento por sobrecorrente e abrem o circuito."
    },
    {
        question: "O relé térmico é normalmente instalado em:",
        options: [
            "Série com o contator",
            "Paralelo ao motor",
            "Antes do disjuntor geral",
            "No neutro da rede"
        ],
        correctAnswer: 0,
        explanation: "O relé térmico é instalado em série com o contator para interromper a alimentação do motor em sobrecarga."
    },
    {
        question: "O relé térmico protege principalmente contra:",
        options: [
            "Sobrecarga prolongada",
            "Curto-circuito instantâneo",
            "Subtensão momentânea",
            "Oscilações de frequência"
        ],
        correctAnswer: 0,
        explanation: "O relé térmico é projetado para desligar o motor em casos de sobrecorrente por sobrecarga."
    },
    {
        question: "Qual elemento do relé térmico sofre deformação com o calor para desligar o circuito?",
        options: [
            "Bimetálico",
            "Fusível",
            "Transformador",
            "Disjuntor"
        ],
        correctAnswer: 0,
        explanation: "O relé térmico possui lâminas bimetálicas que se deformam com o aquecimento e abrem o contato."
    }
];

// Embaralhar perguntas e alternativas
quizQuestions = shuffleArray(quizQuestions).map(q => {
    const correctOption = q.options[q.correctAnswer];
    const shuffledOptions = shuffleArray([...q.options]);
    return {
        ...q,
        options: shuffledOptions,
        correctAnswer: shuffledOptions.indexOf(correctOption)
    };
});

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function renderQuiz() {
    const quizContent = document.getElementById('quiz-content');

    if (currentQuestion >= quizQuestions.length) {
        showResults();
        return;
    }

    const question = quizQuestions[currentQuestion];
    const isAnswered = selectedAnswer !== null;

    quizContent.innerHTML = `
        <div class="quiz-header">
            <h1 class="quiz-title">AUTOMAÇÃO INDUSTRIAL E SISTEMAS DE CONTROLE</h1>
            <div class="quiz-stats">
                <span class="stat-badge question-count">Questão ${currentQuestion + 1} de ${quizQuestions.length}</span>
                <span class="stat-badge score-count">Pontos: ${score}</span>
            </div>
        </div>

        <div class="progress-bar">
            <div class="progress-fill" style="width: ${((currentQuestion + 1) / quizQuestions.length) * 100}%"></div>
        </div>

        <div class="question-text">${question.question}</div>

        <div class="options-container">
            ${question.options.map((option, index) => `
                <button class="option-btn ${isAnswered ? (index === question.correctAnswer ? 'correct' : (index === selectedAnswer ? 'incorrect' : '')) : ''}"
                    onclick="${isAnswered ? '' : `handleAnswer(${index})`}"
                    ${isAnswered ? 'disabled' : ''}>
                    ${option}
                </button>
            `).join('')}
        </div>

        ${isAnswered ? `
            <div class="explanation-box">
                <p class="explanation-text"><strong>Explicação:</strong> ${question.explanation}</p>
            </div>
            <button class="next-btn" onclick="goToNext()">Próxima</button>
        ` : ''}
    `;
}

function handleAnswer(answerIndex) {
    selectedAnswer = answerIndex;
    const question = quizQuestions[currentQuestion];

    if (answerIndex === question.correctAnswer) score++;
    renderQuiz();
}

function goToNext() {
    selectedAnswer = null;
    currentQuestion++;
    renderQuiz();
}

function showResults() {
    const quizContent = document.getElementById('quiz-content');
    const percentage = Math.round((score / quizQuestions.length) * 100);

    quizContent.innerHTML = `
        <div class="results-container">
            <div class="results-icon">✓</div>
            <h2 class="results-title">Quiz Finalizado!</h2>
            <p class="results-score">Você acertou ${score} de ${quizQuestions.length}</p>

            <div class="results-progress">
                <div class="results-progress-fill" style="width: ${percentage}%"></div>
            </div>

            <p class="results-percentage">${percentage}% de acerto</p>

            <button class="restart-btn" onclick="restartQuiz()">Recomeçar</button>
            <button class="restart-btn" onclick="location.reload()">Voltar ao Menu</button>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    quizQuestions = shuffleArray(quizQuestions).map(q => {
        const correctOption = q.options[q.correctAnswer];
        const shuffledOptions = shuffleArray([...q.options]);
        return {
            ...q,
            options: shuffledOptions,
            correctAnswer: shuffledOptions.indexOf(correctOption)
        };
    });

    renderQuiz();
}

renderQuiz();

