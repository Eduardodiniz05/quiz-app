const quizData = [
    {
        question: 'De quem é a famosa frase “Penso, logo existo”?',
        a: "Platão",
        b: "Galileu Galilei",
        c: "Descartes",
        d: "Sócrates",
        e: "Francis Bacon",
        correct: 'René Descartes'
    },
    {
        question: "De onde é a invenção do chuveiro elétrico?",
       a: 'França',
       b: 'Inglaterra',
       c: 'Brasil',
       d: 'Austrália',
       e: 'Itália',
        correct: 'Brasil'
    },
    {
        question: 'Quais o menor e o maior país do mundo?',
       a: "Vaticano e Rússia",
       b: "Nauru e China",
       c: "Mônaco e Canadá",
       d: "Malta e Estados Unidos",
       e: "São Marino e Índia",
        correct: "Vaticano e Rússia"
    },
    {
       question: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
       a: "Jânio Quadros",
       b: "Jacinto Anjos",
       c: "Getúlio Vargas",
       d: "João Figueiredo",
       e: "João Goulart",
       correct: "João Goulart"
    },
    {
        question: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
       a: "O Senhor dos Anéis",
       b: "Dom Quixote",
       c: "O Pequeno Príncipe",
       d: "Ela, a Feiticeira",
       e: "Um Conto de Duas Cidades",
       correct: "Dom Quixote"
    },
    {
        question: 'Quantas casas decimais tem o número pi?',
       a: "Duas",
       b: "Centenas",
       c: "Infinitas",
       d: "Vinte",
       e: "Milhares",
       correct: 'Infinitas'
    },
    {
        question: 'Atualmente, quantos elementos químicos a tabela periódica possui?',
        a: '113',
        b: '109',
        c: '108',
        d: '118',
        e: '92',
        correct: '118'
    }
]





const questionEL = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');


let currentQuiz = 0;



loadQuiz();


function loadQuiz ()  {
    const currentQuizData = quizData[currentQuiz];

    questionEL.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;

    currentQuiz ++;
    
    console.log(a_text)
    console.log(b_text)
    console.log(c_text)
    console.log(d_text)
    console.log(e_text)
}