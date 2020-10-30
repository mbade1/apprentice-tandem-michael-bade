//global vars
let question = document.querySelector('.question'),
  answers = document.querySelector('.answers'),
  answer = document.querySelectorAll('.answer'),
  nextQuestion = document.querySelector('.next-question'),
  current = 0;

document.addEventListener('DOMContentLoaded', (event) => {
  fetchQuestions()
})

//IIFE to load in the questions
function fetchQuestions(questionsAndAnswersJSON = 'http://127.0.0.1:8887/Apprentice_TandemFor400_Data.json') {
  fetch(questionsAndAnswersJSON)
  .then(response => response.json())
  .then(questionsAndAnswers => shuffleQuestions(questionsAndAnswers))
}

function shuffleQuestions(questionsAndAnswers) {
  for (let i = questionsAndAnswers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = questionsAndAnswers[i];
    questionsAndAnswers[i] = questionsAndAnswers[j]
    questionsAndAnswers[j] = temp;
  }
  let sliced = questionsAndAnswers.slice(-10)
  questionForRound(sliced)
}



//example JSON data:
// let jsonExample = {
//   "question": "What was Tandem previous name?",
//   "incorrect": ["Tandem", "Burger Shack", "Extraordinary Humans"],
//   "correct": "Devmynd"
// }

function questionsForRound(thisRoundOfQuestions) {
  console.log(thisRoundOfQuestions)
  for (let i = 0; i < thisRoundOfQuestions.length; i++) {
    // console.log('these are the questions for ' + i + ':')
    // console.log(slicedquestionsAndAnswers[i])
    // console.log('')
  }
}









//Flow: 
  //fetch call or pass in Apprentice_TandemFor400_Data.json 
  //Iterate over the passed in 
//Use a class constructor to pas