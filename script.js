const quizData = [
{
    question: "Quelle chanson interprétée par Lisa est le générique de l'animé Demon Slayer (saison 1) ?",
    choices: ["Crossing field", "ADAMAS", "Gurenge","Unlasting"],
    correct: 2,
},
{
    question: "Quel groupe interprète l'opening Kick Back pour Chainsaw Man ?",
    choices: ["Maximum the Hormone", "Aimer", "ZUTOMAYO", "Kenshi Yonezu"],
    correct: 3,
},
{
    question: "Quel est le titre du générique de début de Death Note chanté par Nightmare ?",
    choices: ["Alumina", "The World", "What's up, people?!", "Zetsubo billy"],
    correct: 1,
},
{
    question: "Quel groupe interprète Unravel, le premier opening de Tokyo Ghoul ?",
    choices: ["TK from ling tosite sigure", "österreich", "Amazarashi", "Cö shu Nie"],
    correct: 0,
},
{
    question: "Quel est le titre du générique de Hunter x Hunter (2011), utilisé tout au long de la série ?",
    choices: ["Ohayou(おはよう)", "Departure!", "Taiyou wa Yoru mo Kagayaku", "Hotaru"],
    correct: 1,
},
];

let currentQuestionIndex = 0;
let score = 0;

const questionE1 = document.querySelector(".question");
const choicesE1 = document.querySelector(".choices");
const scoreE1 = document.querySelector(".score");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionE1.textContent = currentQuestion.question;

    choicesE1.innerHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => checkAnswer(index));
        choicesE1.appendChild(button);
    });
    scoreEl.textContent = `Score : ${score} / ${quizData.length}`;
}

function checkAnswer(choiceIndex) {
    if (choiceIndex === quizData[currentQuestionIndex].correct) {
        score++;
        alert("Bonne réponse !");    
    } else {
        alert("mauvaise réponse...");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionE1.textContent = "Quizz terminé !";
    choicesE1.innerHTML = "";
    scoreE1.textContent = `Votre score final est ${score} / ${quizData.length}`;
}

loadQuestion();