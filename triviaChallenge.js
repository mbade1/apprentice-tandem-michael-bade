//global vars
let questionContainer = document.querySelector(".question"),
  answerContainer = document.querySelector(".answer-container"),
  answers = document.querySelectorAll(".answer"),
  correctOrNot = document.querySelector(".correct-or-not"),
  thisRoundOfQuestions = [],
  total = document.querySelector(".total");
(currentIndex = 0), (score = 0);
let reset = document.querySelector('.reset');
reset.addEventListener('click', function() {location.reload()});

//Load in the questions
function fetchQuestions(
  questionsAndAnswersJSON = "http://127.0.0.1:8887/Apprentice_TandemFor400_Data.json"
) {
  fetch(questionsAndAnswersJSON)
    .then((response) => response.json())
    .then((questionsAndAnswers) => shuffleQuestions(questionsAndAnswers));
};

//shuffle the questions and slice 10 questions
function shuffleQuestions(questionsAndAnswers) {
  for (let i = questionsAndAnswers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = questionsAndAnswers[i];
    questionsAndAnswers[i] = questionsAndAnswers[j];
    questionsAndAnswers[j] = temp;
  }
  let sliced = questionsAndAnswers.slice(-10);
  thisRoundOfQuestions = sliced;
  loadInQuestion(currentIndex);
  loadInAnswers(currentIndex);
}

function loadInQuestion(currentIndex) {
  let question = thisRoundOfQuestions[currentIndex].question;
  questionContainer.innerHTML = "";
  questionContainer.innerHTML = question;
}

function loadInAnswers(currentIndex) {
  let allAnswers = [];
  let incorrectAnswersForThisQuestion =
    thisRoundOfQuestions[currentIndex].incorrect;
  let correctAnswersForThisQuestion =
    thisRoundOfQuestions[currentIndex].correct;
  allAnswers.push(incorrectAnswersForThisQuestion);
  allAnswers.push(correctAnswersForThisQuestion);
  let allAnswersFlattened = allAnswers.flat(1);

  //shuffle the answers
  for (let i = allAnswersFlattened.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = allAnswersFlattened[i];
    allAnswersFlattened[i] = allAnswersFlattened[j];
    allAnswersFlattened[j] = temp;
  }

  //add each answer to the answerContainer
  answerContainer.innerHTML = "";
  for (let i = 0; i < allAnswersFlattened.length; i++) {
    let individualAnswer = document.createElement("div");
    individualAnswer.setAttribute('data-aos', 'flip-up');
    individualAnswer.className = "answer";
    let answerText = document.createTextNode(allAnswersFlattened[i]);
    individualAnswer.appendChild(answerText);
    individualAnswer.addEventListener(
      "click",
      checkForAnswer.bind(this, allAnswersFlattened[i])
    );
    answerContainer.appendChild(individualAnswer);
  }
  // allAnswersFlattened;
}

function checkForAnswer(indexedAnswer) {
  let responseFromUser = indexedAnswer;
  let correctAnswer = thisRoundOfQuestions[currentIndex].correct;

  if (responseFromUser === correctAnswer) {
    truthyOrNot(true);
  } else {
    truthyOrNot(false);
  }

  if (currentIndex < thisRoundOfQuestions.length - 1) {
    currentIndex += 1;
    loadInQuestion(currentIndex);
    loadInAnswers(currentIndex);
  } else {
    answerContainer.innerHTML = `<h2> Final Score: ${score} points</h2>`;
    answerContainer.style = "font-size: 2em;"
    questionContainer.style = "font-size: 2em;"
    total.innerHTML = "";
    if (score <= 400) {
      questionContainer.innerHTML = "Better luck next time!"
    } else if (score > 400 && score <= 700) {
      questionContainer.innerHTML = "Wow, not bad!"
    } else if (score > 700 && score <= 900) {
      questionContainer.innerHTML = "Great job!"
    } else {
      "Fantastic! You got a perfect score!!"
    }
    reset.style = "display: block";
  }
}

function truthyOrNot(boolean) {
  // This function adds a div element to the page
  // Used to see if it was correct or false
  let truthyOrNotDiv = document.createElement("div"),
    truthyOrNotDivInnerText = document.createTextNode(`Question #${currentIndex + 1}: `);
  truthyOrNotDiv.appendChild(truthyOrNotDivInnerText);
  debugger

  if (boolean) {
    truthyOrNotDiv.className += "truthy";
    truthyOrNotDiv.setAttribute('data-aos', 'fade-up');
    let correctAnswerForThisQuestion = document.createTextNode(`Nice! Your correct answer was: ${thisRoundOfQuestions[currentIndex].correct}`)
    truthyOrNotDiv.appendChild(correctAnswerForThisQuestion);
    correctOrNot.appendChild(truthyOrNotDiv);
    score += 100;
    total.innerHTML = `Score: <strong>${score}</strong> points`;
  } else {
    let correctAnswerForThisQuestion = document.createTextNode(`Sorry! The correct answer was: ${thisRoundOfQuestions[currentIndex].correct}`)
    truthyOrNotDiv.className += "false";
    truthyOrNotDiv.setAttribute('data-aos', 'fade-up');
    truthyOrNotDiv.appendChild(correctAnswerForThisQuestion);
    correctOrNot.appendChild(truthyOrNotDiv);
  }
}

//call this function to bring in questions
fetchQuestions()