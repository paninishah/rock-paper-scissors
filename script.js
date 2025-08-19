function getComputerChoice(){
    const randomNum = Math.random();
    if(randomNum < 1/3){
        return "rock";
    }
    else if (randomNum < 2/3){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    const choice = prompt("Enter your choice: rock, paper or scissors: ");
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        if(humanChoice===computerChoice){
            console.log(`It's a tie! You both chose ${humanChoice}.`);
            return "tie";
        }

        if(
            (humanChoice==="rock"&& computerChoice==="scissors")||
            (humanChoice==="paper"&& computerChoice==="rock")||
            (humanChoice==="scissors"&& computerChoice==="paper")
        ){
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return "human";
        }
        else{
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return "computer";
        }
    }

     for (let round = 1; round <= 5; round++) {
        const humanSelect = getHumanChoice();
        const computerSelect = getComputerChoice();

        console.log(`Round ${round}:`);
        playRound(humanSelect, computerSelect);
        console.log(`Score => You: ${humanScore} | Computer: ${computerScore}\n`);
    }

    if (humanScore > computerScore) {
        console.log(`Game Over! You won with a score of ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Game Over! You lost with a score of ${humanScore} to ${computerScore}`);
    } else {
        console.log(`Game Over! It's a tie with a score of ${humanScore} to ${computerScore}`);
    }

}

playGame();