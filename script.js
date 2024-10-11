// Seleciona os elementos HTML que serão manipulados
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

let atual = 0;
let perguntaAtual;
let pontuacao = 0;

// FUNÇÃO MOSTRAR PERGUNTAS
function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa; // Define o texto do botão como a alternativa
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function verificaResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    // Esconde a caixa de perguntas
    caixaPrincipal.style.display = "none";
    // Mostra a caixa de resultado
    caixaResultado.style.display = "block";

    setTimeout(() => caixaResultado.classList.add("mostrar"), 10);
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    // Criar botão de reiniciar
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar";

    // Adiciona um evento de click ao botão de reiniciar
    botaoReiniciar.addEventListener("click", () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.classList.remove("mostrar");
        caixaResultado.style.display = "none";
        caixaPrincipal.style.display = "block";
        mostrarPergunta();
    });

    caixaResultado.innerHTML = "";
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicia o quiz
mostrarPergunta();