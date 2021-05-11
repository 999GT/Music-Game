document.addEventListener("DOMContentLoaded", () => {
//game intialization or reset
	var points = 0;
	var guess = document.getElementById("guess");
	var answer = document.getElementById("answer");
	var showScore = document.getElementById("scoreText");
	var choice = -1
	var gameStart = false;
	//console.log(guess.style);

	guess.style.display = "none";
	answer.innerHTML = "";

	document.addEventListener("keydown", userInput, false);
	var button = document.getElementById("press");
	button.addEventListener("click",randomSound, false)


function userInput(event){

	if (gameStart){
		guess.innerHTML = "Guess:" + event.code;
		guess.style.display = "block";

		gameStart = false;
		checkAnswer(event.code);
	}

}

function randomSound(){
	//Math.floor(Math.random() * 7)
	choice = Math.floor(Math.random() * 7);
	console.log(choice);

	var audioFile = "Sounds/" + choice + ".m4a";

	var audio = new Audio(audioFile);

	audio.play();
	gameStart = true
}

function checkAnswer(eventCode){
	var keys = ["KeyC","KeyD","KeyE","KeyF","KeyG","KeyA","KeyB"];
	answer.innerHTML = "Answer:" + keys[choice];
	console.log(eventCode);
	console.log(keys[choice]);
	console.log(points);
	var minus = 0
	switch(eventCode){
		case "KeyC":
			eventCode = 0;
			break;
		case "KeyD":
			eventCode = 1;
			break;
		case "KeyE":
			eventCode = 2;
			break;
		case "KeyF":
			eventCode = 3;
			break;
		case "KeyG":
			eventCode = 4;
			break;
		case "KeyA":
			eventCode = 5;
			break;
		case "KeyB":
			eventCode = 6;
			break;
	}

	if(eventCode == choice){
		points += 5;
	}else{
		if(choice>eventCode){
			minus = choice - eventCode;
			points -= minus;
		}else{
			minus = eventCode - choice;
			points -= minus;
		}
	}
	showScore.innerHTML = "Score:" + points;
}
});