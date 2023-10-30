function getComputerChoice () {
	let choice = Math.floor(Math.random() * 3);
	if (choice == 0){
		return "rock";
	}
	else if (choice == 1){
		return "paper";
	}
	else{
		return "scissor";
	}
}

function playRound(playerSelection, computerSelection){
	let playerChoice = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();
	let computerChoice = computerSelection[0].toUpperCase() + computerSelection.substring(1).toLowerCase();
	
	if (playerChoice == computerChoice){
	    return `Draw! ${playerChoice} draws with ${computerChoice}.`;
	}
	
	if (playerChoice == "Rock" && computerChoice == "Scissor" ||
	  playerChoice == "Paper" && computerChoice == "Rock" ||
	  playerChoice == "Scissor" && computerChoice == "Paper"){
		return `You Win! ${playerChoice} beats ${computerChoice}.`;
	}
	else{
		return `You Lost! ${playerChoice} loses to ${computerChoice}.`;
	}
	
	
}