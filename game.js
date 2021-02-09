const question= document.getElementById("question");
const choices= Array.from(document.getElementsByClassName("choice-text"));
const questionCountertext=document.getElementById("questionCounter");
const ScoreText = document.getElementById("Score");

let currentQuestion={};
let acceptingAnswers= false;
let Score=0;
let questionCounter=0;
let availableQuestion=[];

let questions = [
{
 question: "HTML stands for ?",
 choice1: "HighText Machine Language",
 choice2: "HyperText and links Markup Language",
 choice3: "HyperText Markup Language",
 choice4: "None of these",
 answer:3
},

{ question:"The correct sequence of HTML tags for starting a webpage is -",

 choice1:"Head, Title, HTML, body",
 choice2:"HTML, Body, Title, Head",
 choice3:"HTML, h1, Title, Body",
 choice4:"HTML, Head, Title, Body",
 answer:4
},

{ question:"Which of the following element is responsible for making the text bold in HTML?",

 choice1:"<pre>" ,
 choice2:"<a>" ,
 choice3:"<b>" ,
 choice4:"<br>" ,
 answer:3
},
{ question: "Which tag inserts a line horizontally on your web page?",
choice1:"<hr>",
choice2:"<line>",
choice3:"<line direction>",
choice4:"<tr>",
answer:1
},

 {
question: "What should be the first tag in any HTML document?",
choice1:"<head>",
choice2:"<title>",
choice3:"<html>",
choice4:"<document>",
answer:3
}

];
const Correct_Bonus=10;
const MAX_QUESTIONS=5;

 startGame=()=>{
questionCounter=0;
Score=0;
availableQuestions = [...questions]
getNewQuestion();
}
getNewQuestion = () =>
{
if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
localStorage.setItem("mostRecentScore",Score);
return window.location.assign("end.html");
}
questionCounter++;
questionCountertext.innerText=questionCounter + "/" + MAX_QUESTIONS;
const questionIndex=Math.floor(Math.random() * availableQuestions.length);
currentQuestion=availableQuestions[questionIndex];
question.innerText=currentQuestion.question;

choices.forEach(choice => {
 const number= choice.dataset["number"];
choice.innerText =currentQuestion["choice" + number];
});
availableQuestions.splice(questionIndex, 1);
acceptingAnswers = true;
};
choices.forEach(choice=> {
choice.addEventListener("click",e =>{
 if(!acceptingAnswers)return;

acceptingAnswers=false;
const selectedChoice =e.target;
const selectedAnswer = selectedChoice.dataset["number"];

const classToApply=
selectedAnswer==currentQuestion.answer?"correct":"incorrect";

if(classToApply =="correct"){
  incrementScore(Correct_Bonus);
}
selectedChoice.parentElement.classList.add(classToApply);
setTimeout(() =>{
selectedChoice.parentElement.classList.remove(classToApply);
getNewQuestion();
},1000);
});
});

incrementScore=num => {
Score = Score + num;
ScoreText.innerText=Score;
}



startGame();








