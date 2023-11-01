const playerMove = document.querySelector("#player-move");
const playerRock = document.querySelector(".player-option.rock");
const playerPaper = document.querySelector(".player-option.paper");
const playerScissor = document.querySelector(".player-option.scissor");
const comRock = document.querySelector(".opponent-option.rock");
const comPaper = document.querySelector(".opponent-option.paper");
const comScissor = document.querySelector(".opponent-option.scissor");
const playerScore = document.querySelector("#player-score");
const comScore = document.querySelector("#opponent-score");

const message = document.querySelector("#message");

let round = 0;
let pScore = 0;
let cScore = 0;

let handler = (e) => {
	const target = e.target;
	let valid = false;
	let result = "";
	switch(target.id){
		case "rock":
			result = playRound("rock", getComputerChoice());
			valid = true;
			break;
		case "paper":
			result = playRound("paper", getComputerChoice());
			valid = true;
			break;
		case "scissor":
			result = playRound("scissor", getComputerChoice());
			valid = true;
			break;
	}
	
	if (valid){
		round++;
		resetBorder();
		target.setAttribute("style", "border-color: red");
		
		if(result.computerChoice === "Rock"){
			comRock.setAttribute("style", "border-color: blue");
		}
		else if(result.computerChoice === "Paper"){
			comPaper.setAttribute("style", "border-color: blue");
		}
		else{
			comScissor.setAttribute("style", "border-color: blue");
		}
		
		if (result.score === 1){
			pScore++;
		}
		else if (result.score === -1){
			cScore++;
		}
		updateScore();
		message.textContent = `Round ${round}: ${result.message}`;

		if (pScore >= 5){
			alert("You have won!");
			playerMove.removeEventListener("click", handler);
		}
		else if (cScore >= 5){
			alert("You have lost!");
			playerMove.removeEventListener("click", handler);
		}
		
	}
};

playerMove.addEventListener("click", handler);


function updateScore(){
	playerScore.textContent = `Score: ${pScore}`;
	comScore.textContent = `Score: ${cScore}`;
}


function resetBorder(){
	playerRock.setAttribute("style", "border-color: black");
	playerPaper.setAttribute("style", "border-color: black");
	playerScissor.setAttribute("style", "border-color: black");
	comRock.setAttribute("style", "border-color: black");
	comPaper.setAttribute("style", "border-color: black");
	comScissor.setAttribute("style", "border-color: black");
	return;
}




function getComputerChoice () {
	let choice = Math.floor(Math.random() * 3);
	if (choice === 0){
		return "rock";
	}
	else if (choice === 1){
		return "paper";
	}
	else{
		return "scissor";
	}
}

function playRound(playerSelection, computerSelection){
	let playerChoice = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();
	let computerChoice = computerSelection[0].toUpperCase() + computerSelection.substring(1).toLowerCase();
	let score = 0;
	let message = "";
	if (playerChoice === computerChoice){
		message = `Draw! ${playerChoice} draws with ${computerChoice}.`;
	}
	else if (playerChoice === "Rock" && computerChoice === "Scissor" ||
	  playerChoice === "Paper" && computerChoice === "Rock" ||
	  playerChoice === "Scissor" && computerChoice === "Paper"){
		message = `You Win! ${playerChoice} beats ${computerChoice}.`;
		score = 1;
	}
	else{
		message = `You Lost! ${playerChoice} loses to ${computerChoice}.`;
		score = -1;
	}
	
	return {
		message,
		score,
		computerChoice
	};
}