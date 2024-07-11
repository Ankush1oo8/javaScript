const choices=["rock","paper","scissors"];
const player=document.getElementById("playerDisplay");
const computer=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay")
const computerScoreDisplay=document.getElementById("computerScoreDisplay")
let pScore=0;
let cScore=0;
function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";

    if(playerChoice===computerChoice){
        result="IT'S A TIE";
    }else{
        switch(playerChoice){
            case 'rock':
                result=(computerChoice==='scissors')? "YOU WIN!" :"YOU LOSE";
                break;
            case 'paper':
                result=(computerChoice==='rock')? "YOU WIN!" :"YOU LOSE";
                break;
            case 'scissors':
                result=(computerChoice==='paper')? "YOU WIN!" :"YOU LOSE";
                break;
        }
    }
    player.textContent=`PLAYER: ${playerChoice}`;
    computer.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=result;

    resultDisplay.classList.remove("greenText","redText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            pScore++;
            playerScoreDisplay.textContent=pScore;
            break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            cScore++;
            computerScoreDisplay.textContent=cScore;
            break;
    }
}