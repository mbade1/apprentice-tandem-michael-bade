//global vars
let questionContainer = document.querySelector('.question'),
  answers = document.querySelector('.answers'),
  answer = document.querySelectorAll('.answer'),
  nextQuestion = document.querySelector('.next-question'),
  thisRoundOfQuestions = [];
  currentIndex = 0;

// document.addEventListener('DOMContentLoaded', (event) => {
//   fetchQuestions()
// })

//IIFE to load in the questions
(function fetchQuestions(questionsAndAnswersJSON = 'http://127.0.0.1:8887/Apprentice_TandemFor400_Data.json') {
  fetch(questionsAndAnswersJSON)
  .then(response => response.json())
  .then(questionsAndAnswers => shuffleQuestions(questionsAndAnswers))
})()

function shuffleQuestions(questionsAndAnswers) {
  for (let i = questionsAndAnswers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = questionsAndAnswers[i];
    questionsAndAnswers[i] = questionsAndAnswers[j]
    questionsAndAnswers[j] = temp;
  }
  let sliced = questionsAndAnswers.slice(-10)
  thisRoundOfQuestions = sliced;
  loadInQuestion(currentIndex);
  loadInAnswers(currentIndex);
  questionsForRound(sliced);
}

//example JSON data:
// let jsonExample = {
//   "question": "What was Tandem previous name?",
//   "incorrect": ["Tandem", "Burger Shack", "Extraordinary Humans"],
//   "correct": "Devmynd"
// }

function loadInQuestion(currentIndex) {
  let question = thisRoundOfQuestions[currentIndex].question;
  questionContainer.innerHTML = '';
  questionContainer.innerHTML = question;
}

function loadInAnswers(currentIndex) {
  let allAnswers = [];
  let incorrectAnswersForThisQuestion = thisRoundOfQuestions[currentIndex].incorrect;
  let correctAnswersForThisQuestion = thisRoundOfQuestions[currentIndex].correct;
  allAnswers.push(incorrectAnswersForThisQuestion);
  allAnswers.push(correctAnswersForThisQuestion);
  let allAnswersFlattened = allAnswers.flat(1);
  for (let i = allAnswersFlattened.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = allAnswersFlattened[i];
    allAnswersFlattened[i] = allAnswersFlattened[j]
    allAnswersFlattened[j] = temp;
  }
  
  debugger
}

function questionsForRound(thisRoundOfQuestions) {
  console.log(thisRoundOfQuestions)
  answers.innerHTML = '';
  for (let i = 0; i < thisRoundOfQuestions.length; i++) {
    let newQuestionDiv = document.createElement('div');
    let text = document.createTextNode(thisRoundOfQuestions[i]);

    newQuestionDiv.appendChild(text);
    // console.log('these are the questions for ' + i + ':')
    // console.log(slicedquestionsAndAnswers[i])
    // console.log('')
  }
}









//Flow: 
  //fetch call or pass in Apprentice_TandemFor400_Data.json 
  //Iterate over the passed in 
//Use a class constructor to pas