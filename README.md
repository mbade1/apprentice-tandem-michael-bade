# Tandem Trivia

Welcome to Tandem Trivia, an app to help you get better at trivia, and see if you "know your stuff"! This app was created as part of a code challenge for Tandem's Apprentice Software Engineer position. It was a joy to create, and even more fun to test my trivia!

## Building this App

This app is built using vanilla JavaScript, HTML, and CSS. Before beginning this project, I considered using React but decided to use vanilla JavaScript instead. Before starting this project, I planned out the flow from beginning a round of trivia, to completion:

1. When User goes to the URL for this app, the app fetches the Apprentice_Tandemfor400_Data.json data
2. When fetched, the questions are randomized, and 10 questions are selected from the list.
3. The User is presented with the first question and its 4 options to answer.
4. As the User answers each question, he or she is shown whether or not they got the answer correct, along with the correct answer. If they answer the question correctly, 100 points are added to their score. If they answer incorrectly, 0 points are added to their score.
5. After 10 questions have been answered, the Users' final score and correct answers are shown. The User has an option to play again.

To make this app more awesome in the future, I would love to add the features of having an all-time score leader board and option for Users to input new questions to the trivia database. If the database were to expand large enough, a "category" option would be great as well, such as "Sports", "Movies", "Random" (where Random would shuffle 10 random trivia questions for the user). Another cool feature would be adding a timer for each question to be answered within 10 seconds.

To incorporate these features, I would need to set up a database which would receive fetch requests from the frontend to add information. For instance, at the end of each trivia round, that Users' score would be POST-ed to the database. This information could be saved, and on the frontend, Users can see a leaderboard with the highest number of points. So, the database would store each User as an individual key, along with their (encrypted) password, an array of scores, and array of objects with new questions to add. Something like:

Users: [
    {
        "name": "Mike",
        "password": "a0sd9fj0ianweipfh0awhef",
        "scores": 
            [
                0: 800,
                1: 900,
                2: 400,
                3: 500 
            ],
        "inputtedQuestions":
            [
                {
                    "question": "What year did the USA land on the moon?",
                    "incorrect": ["1940", "1971", "1967"],
                    "correct": "1969"
                },
            ]
    },
    {
        "name": "Sarah"..... (so on and so forth...)
    }
]

As for the 10 second countdown timer, a timeToAnswer variable can be set at 10, and a setTimeout function could be incorporated to update that timer every second. Once timeToAnswer === 0, a new div is renderd, saying "Ran out of time," and the next question is shown.

## Prompt: Tandem for 400!

At Tandem, we love to learn and have fun and what better way to do that than to play a round of trivia. One of our favorite ways to wait while our test suite is running is to hop over to the #games channel on Slack and play a quick round of trivia. Playing trivia isn’t just a fun way to learn something new but also a great way to take a little break from a normal work task.

While we’re all knowledgeable in our own right, only one person can be crowned trivia champion with the highest score. Your goal is to create an application that others will be able to use in order to help improve their trivia skills.

Train to improve your trivia knowledge by creating your own trivia training app!

## Goal

Your goal is to create an application that displays trivia questions with multiple-choice answers to select from.
Use creative license in terms of how you want us to see this game. At minimum, the player can view the question(s), the answer choices, the correct answer upon submission, and their score. It could be a user interface (UI), command-line-tool, etc. Feel free to use whatever framework or language you are comfortable with. We would also like to see a README which includes any information about how to run the code, 
any known issues or complexity we should look out for, and any additional features you would like to have added to make your 
trivia app even more awesome.

Before you begin, familiarity with the following concepts will be helpful:

Arrays and loops 
Data manipulation 
Parsing JSON

## Assumptions
- A round of trivia has 10 Questions.
- All questions are multiple-choice questions.
- Your score does not need to update in real time.
- Results can update on form submit, button click, or any interaction you choose.
- We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file. 

## Acceptance Criteria
- A user can view questions. 
- Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers. 
- The correct answer must be revealed after a user has submitted their answer.
- A user can see the score they received at the end of the round.

## Additional Considerations

Tandem's first core value is "Ship Quality Work." 
We love unit tests and automated test coverage in our projects. Well-tested code provides documentation for other developers and prevents future regressions (bugs introduced after a change) among other things. If you would like a challenge, consider adding unit tests to display your commitment to quality code.

## Installation

To go to the live site and test your trivia, [click here](https://mbade1.github.io/apprentice-tandem-michael-bade/)

Otherwise, to install and test this repository on your own machine, proceed with the following steps:

1. Clone down this repository to your local machine.
2. cd into this repository: ```$ cd apprentice-tandem-michael-bade```
3. Open index html with this command: ```$ open index.html```
4. Your app should be up and running!