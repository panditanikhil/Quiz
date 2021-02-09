const username=document.getElementById("username");
const saveScorebutton = document.getElementById("saveScorebutton");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES=5;
console.log(highScores);

finalScore.innerText = mostRecentScore;


username.addEventListener("keyup",() =>{
saveScorebutton.disabled = !username.value;
});


saveHighScore = e => {
console.log("clicked the save button")
e.preventDefault();

const Score ={
Score : Math.floor(Math.random() * 100),
name : username.value
};

highScores.push(Score);

highScores.sort((a,b) =>b.Score - a.Score);

highScores.splice(5);


localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.assign("Quiz.html");
};

