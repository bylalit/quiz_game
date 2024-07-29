const questions = [
  {
    question: "Which is larget animal in the world?",

    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },
  {
    question: "Which is larget desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Austrialia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Which is larget desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
];


let qustionElement = document.getElementById("qustion-element");
let ansBtn = document.getElementById("ans-btn");
let nextBtn = document.getElementById("nextbtn");


let curruntIndex = 0;


function showQuestion(){
    resertStart();
    let currectQuction = questions[curruntIndex];
    let qusestionNo = curruntIndex + 1;
    qustionElement.innerHTML = qusestionNo + ". " + currectQuction.question;

    currectQuction.answers.forEach(ans => {
        let button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("ans");
        ansBtn.appendChild(button);
    });
};

function handleQuestion(){
    curruntIndex++;
};

nextBtn.addEventListener("click", ()=>{
    handleQuestion();
});

function resertStart(){
    nextBtn.style.display = "none";
    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

showQuestion();