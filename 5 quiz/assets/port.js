const quizData = [
    {
        question: "1. Qual é a principal característica do Quinhentismo?",
        a: "Religiosidade e moralidade",
        b: "Exaltação do amor romântico",
        c: "Descrição das terras e povos do Brasil",
        d: "Crítica social e política",
        correct: "c"
    },
    {
        question: "2. O Barroco é marcado por:",
        a: "Simplicidade e objetividade",
        b: "Culto ao racionalismo",
        c: "Contrastes e exageros",
        d: "Exaltação da natureza",
        correct: "c"
    },
    {
        question: "3. Qual desses é um autor romântico brasileiro?",
        a: "Machado de Assis",
        b: "José de Alencar",
        c: "Gregório de Matos",
        d: "Padre Antônio Vieira",
        correct: "b"
    },
    {
        question: "4. O Realismo no Brasil teve como um de seus principais representantes:",
        a: "Álvares de Azevedo",
        b: "Gonçalves Dias",
        c: "Raul Pompeia",
        d: "Castro Alves",
        correct: "c"
    }
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

function loadQuiz() {
    const quizHTML = quizData.map((q, index) => {
        return `
            <div class="quiz-item">
                <div class="question">${q.question}</div>
                <div class="options">
                    <label><input type="radio" name="question${index}" value="a"> ${q.a}</label>
                    <label><input type="radio" name="question${index}" value="b"> ${q.b}</label>
                    <label><input type="radio" name="question${index}" value="c"> ${q.c}</label>
                    <label><input type="radio" name="question${index}" value="d"> ${q.d}</label>
                </div>
            </div>
        `;
    }).join('');
    quizContainer.innerHTML = quizHTML;
}

function getResults() {
    let score = 0;
    quizData.forEach((q, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        if (answer && answer.value === q.correct) {
            score++;
        }
    });
    return score;
}

submitButton.addEventListener('click', () => {
    const score = getResults();
    resultContainer.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas.`;
});

resetButton.addEventListener('click', () => {
    loadQuiz();
    resultContainer.innerHTML = '';
});

loadQuiz();