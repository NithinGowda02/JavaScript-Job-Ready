let yourCount = 0;
let compCount = 0;
let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#your-score");
let compScore = document.querySelector("#com-score")
let message = document.querySelector(".msg");
let options = ["rock", "paper", "scissor"];
const getComputerChoice = () => {
    randomIdx =Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    message.innerText = "It's a Draw Game!";
    message.style.backgroundColor = "#0c0b0b";
}

const showWinner = (userWin) => {
    if (userWin){
        yourCount += 1;
        userScore.innerText = yourCount;
        message.innerText = "You Won The Game";
        message.style.backgroundColor = "green";
    }
    else{
        compCount += 1;
        compScore.innerText = compCount;
        message.innerText = "Computer Won The Game";
        message.style.backgroundColor = "red";
    }
}
const playGame = (userInput) => {
    let computerInput = getComputerChoice();
    if (userInput === computerInput){
        drawGame();
    }
    else {
        let userWin = true;
        if (userInput === "rock"){
            userWin = computerInput === "paper" ? false : true;
        }
        else if (userInput === "paper"){
            userWin = computerInput === "scissor" ? false : true;
        }
        else if (userInput === "scissor"){
            userWin = computerInput === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userInput = choice.getAttribute("id");
        playGame(userInput);    
        }
    )
})