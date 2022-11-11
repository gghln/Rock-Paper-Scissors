const choices = ["Rock","Paper","Scissors"]

function getComputerChoice(){
    let result = choices[Math.floor(Math.random()*choices.length)];
    return result;
}

function playRound(playerSelection, computerSelection)
{
    let roundResult;

    if ((playerSelection == "Rock") && (computerSelection == "Paper"))
    {
        console.log("Player got " + playerSelection);
        console.log("Computer got " + computerSelection);
        roundResult = "You Lose Paper beats Rock";
    }
    else if ((playerSelection == "Rock") && (computerSelection == "Scissors"))
    {
        console.log("Player got " + playerSelection);
        console.log("Computer got " + computerSelection);
        roundResult = "You Win Rock beats Scissors";
    }else if ((playerSelection == "Paper") && (computerSelection == "Rock"))
    {
        console.log("Player got " + playerSelection);
        console.log("Computer got " + computerSelection);
        roundResult = "You Win Paper beats Rock";
    }else if ((playerSelection == "Paper") && (computerSelection == "Scissors"))
    {
        console.log("Player got " + playerSelection);
        console.log("Computer got " + computerSelection);
        roundResult = "You Lose Scissors beat Paper";
    }else if ((playerSelection == "Scissors") && (computerSelection == "Rock"))
    {
        console.log("Player got " + playerSelection);
        console.log("Computer got " + computerSelection);
        roundResult = "You Lose Rock beats Scissors";
    }else if ((playerSelection == "Scissors") && (computerSelection == "Paper"))
    {
        console.log("Player got " + playerSelection);
        console.log("Computer got " + computerSelection);
        roundResult = "You Win Scissors beat Paper";
    }
    else{
        console.log("Player got " + playerSelection);
        console.log("Computer got " + computerSelection);
        roundResult = "Its a draw both sides choose " + computerSelection;
    }
    console.log(roundResult);
    return roundResult;
}

game();


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