// Seleciona os elementos HTML que manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

//Arry de objeto contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "No universo de Ordem Paranormal, o que é necessário para realizar um Ritual de Conjuração de Entidades Maiores",
        alternativas: [
            "Um conjunto específico de runas, oferendas significativas e conhecimento avançado",
            "Apenas uma inenção clara e um cŕiculo de proteção"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Em Ordem Paranormal, o que possui além da 'membrana' que separa a realidade",
        alternativas: [
            "O paranormal",
            "o pós vida"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Quais são os elementos de ordem paranormal",
        alternativas: [
            "Fé, alma, escuridão, misticismo e mantra",
            "Sangue. Conhecimento, Energia, Morte e Medo"
        ],
        correta: 1
    },
    {
        enunciado: "Em Ordem paranormal, sigílos do outro lado escritos em uma língua incompreensível, podem ser lidos através de um ritual do elemento de:",
        alternativas: [
            "Conhecimento",
            "Morte"
        ],
        correta: 0
    },
    {
        enunciado: "Os Elementos Paranormais, podem ser usados e compreendidos através de Transcendência e rituais, mas apenas um elemento não pode ser manipulado como os outros, este elemento é:",
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

function mostrarResultado() {
    caixaPrincipal.computedStyleMap.display = "none";

    caixaResultado.style.display = "block";

    setTimeout(() => caixaResultado.classList.add("mostrar"),10);
    textoResultado.textContent = "Você acertou $ {pontuação} de $ {perguntas.length}"
}