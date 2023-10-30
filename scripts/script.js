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
		console.log(`Draw! ${playerChoice} draws with ${computerChoice}.`);
		return 0.5;
	}
	
	if (playerChoice == "Rock" && computerChoice == "Scissor" ||
	  playerChoice == "Paper" && computerChoice == "Rock" ||
	  playerChoice == "Scissor" && computerChoice == "Paper"){
		console.log(`You Win! ${playerChoice} beats ${computerChoice}.`);
		return 1;
	}
	else{
		console.log(`You Lost! ${playerChoice} loses to ${computerChoice}.`);
		return 0;
	}
}

function game(){
	let score = 0;
	const GAMES_PLAYED = 5;
	for (let i = 0; i < GAMES_PLAYED; i++){
		score += playRound(prompt("Rock, Paper or Scissor?"), getComputerChoice());
	}
	
	if (score >= 3){
		console.log(`You Win! Score is ${score}/${GAMES_PLAYED}`);
	}
	else{
		console.log(`You Lose! Score is ${score}/${GAMES_PLAYED}`);
	}
	return;
}