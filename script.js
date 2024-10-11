// Seleciona os elementos HTML que manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

//Arry de objeto contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "O que é necessário para realizar um ritual?",
        alternativas: [
            "Um conjunto específico de sigilos, oferendas significativas e conhecimento avançado",
            "Apenas uma intenção clara e um círculo de proteção"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "o que possui além da 'membrana' que separa a realidade? ",
        alternativas: [
            "O Outro Lado, aonde determina o pós vida e alguém inocente em relaçao ao paranormal, retornando como uma criatura paranormal",
            "O Outro Lado, aonde fica as incompreenções do Paranormal e seus elementos"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Quais ão os elementos de Orem Paranormal?",
        alternativas: [
            "Fé, Alma, Escurião, Misticismo e Mantra",
            "Sangue, Conhecimento, Energia, Morte e Medo"
        ],
        correta: 1
    },
    {
        enunciado: "Sigílos paranormais podem ser lidos através do elemento de:",
        alternativas: [
            "Conhecimento",
            "Morte"
        ],
        correta: 0
    },
    {
        enunciado: "Qual elemento paranormal não pode ser compreendido ou entendido",
        alternativas: [
            "O Medo",
            "A Morte"
        ],
        correta: 0
    }
];

let atual = 0
let pergutaAtual;
let pontuacao = 0;

//FUNÇÃO MOSTRAR PERGUNTAS
function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    pergutaAtual.alternativas.forEach((alternativas, index) => {
        const botao = document.createElement("button");
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function vereficaResposta(Seleciona) {
    if (selecionda === pergutaAtual.correta) {
        pontuacao++;
    }
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostarResultado();
    }
}
