const choices = ["Rock","Paper","Scissors"]

function getComputerChoice(){
    let result = choices[Math.floor(Math.random()*choices.length)];
    return result;
}

let rock = document.createElement("img");
rock.src = "images/stone.png";

let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection)
{
    document.getElementById("computer").style.display = "block";
    document.getElementById("player").style.display = "block";
    let computerSelection = getComputerChoice();

    if ((playerSelection == "Rock") && (computerSelection == "Paper"))
    {
        document.getElementById("player").innerHTML = "Player chose Rock";
        document.getElementById("computer").innerHTML = "Computer chose Paper";
        document.getElementById("result").innerHTML = "You Lose, Paper beats Rock";
        computerScore += 1;
        document.getElementById("scoreText").innerHTML = playerScore + " - " + computerScore;
    }
    else if ((playerSelection == "Rock") && (computerSelection == "Scissors"))
    {
        document.getElementById("player").innerHTML = "Player chose Rock";
        document.getElementById("computer").innerHTML = "Computer chose Scissors";
        document.getElementById("result").innerHTML = "You Win, Rock beats Scissors";
        playerScore += 1;
        document.getElementById("scoreText").innerHTML = playerScore + " - " + computerScore;
    }else if ((playerSelection == "Paper") && (computerSelection == "Rock"))
    {
        document.getElementById("player").innerHTML = "Player chose Paper";
        document.getElementById("computer").innerHTML = "Computer chose Rock";
        document.getElementById("result").innerHTML = "You Win, Paper beats Rock";
        playerScore += 1;
        document.getElementById("scoreText").innerHTML = playerScore + " - " + computerScore;
    }else if ((playerSelection == "Paper") && (computerSelection == "Scissors"))
    {
        document.getElementById("player").innerHTML = "Player chose Paper";
        document.getElementById("computer").innerHTML = "Computer chose Scissors";
        document.getElementById("result").innerHTML = "You Lose, Scissors beat Paper";
        computerScore += 1;
        document.getElementById("scoreText").innerHTML = playerScore + " - " + computerScore;
    }else if ((playerSelection == "Scissors") && (computerSelection == "Rock"))
    {
        document.getElementById("player").innerHTML = "Player chose Scissors";
        document.getElementById("computer").innerHTML = "Computer chose Rock";
        document.getElementById("result").innerHTML = "You Lose, Rock beats Scissors";
        computerScore += 1;
        document.getElementById("scoreText").innerHTML = playerScore + " - " + computerScore;
    }else if ((playerSelection == "Scissors") && (computerSelection == "Paper"))
    {
        document.getElementById("player").innerHTML = "Player chose Scissors";
        document.getElementById("computer").innerHTML = "Computer chose Paper";
        document.getElementById("result").innerHTML = "You Win, Scissors beats Rock";
        playerScore += 1;
        document.getElementById("scoreText").innerHTML = playerScore + " - " + computerScore;
    }
    else{
        document.getElementById("player").innerHTML = "Player chose " + playerSelection;
        document.getElementById("computer").innerHTML = "Computer chose " + computerSelection;
        document.getElementById("result").innerHTML = "It's a Draw, both sides chose " + playerSelection;
        document.getElementById("scoreText").innerHTML = playerScore + " - " + computerScore;
    }

    if((playerScore == 5)||(computerScore == 5)){
        if(playerScore > computerScore){
            document.getElementById("result").innerHTML = "Player won! final score " + playerScore + "-" + computerScore;
            document.getElementById("player").style.display = "none";
            document.getElementById("computer").style.display = "none";
        }else{
            document.getElementById("result").innerHTML = "Computer won! final score " + playerScore + "-" + computerScore;
            document.getElementById("computer").style.display = "none";
            document.getElementById("player").style.display = "none";
        }
        playerScore = 0;
        computerScore = 0;
    }
}




/*
function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt ("Choose between Rock, Paper or Scissors. Let them game begin");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        let computerSelection = getComputerChoice();

        let Score = playRound(playerSelection,computerSelection);
        if (Score.includes("Win")){
            playerScore += 1;
            console.log(playerScore + " - " + computerScore);
        }else if(Score.includes("Lose")){
            computerScore += 1;
            console.log(playerScore + " - " + computerScore);
        }else if(Score.includes("draw")){
            console.log(playerScore + " - " + computerScore);
        }

        if(i == 5){
            if(playerScore > computerScore){
                console.log("Player won! final score " + playerScore + "-" + computerScore);
            }else{
                console.log("Computer won! final score " + playerScore + "-" + computerScore);
            }
        }
     }
}
*/