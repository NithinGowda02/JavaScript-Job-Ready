let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".rst-btn");
let newButton = document.querySelector(".new-game");
let message = document.querySelector(".win-msg");
let messageConatiner = document.querySelector(".msg")

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [1, 4, 7],
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO =true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const newGame = () => {
    turnO = true;
    enableBoxes();
    messageConatiner.classList.add("hidden");
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText; 

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                displayWinner(pos1Val);
            }
        }
    }
}

const displayWinner = (winner) => {
    message.innerHTML = `Congratulations!. Winner is ${winner}`;
    messageConatiner.classList.remove("hidden");
    disableBoxes();
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

newButton.addEventListener("click",() => newGame());
resetButton.addEventListener("click",() => newGame());