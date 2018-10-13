var numSquares = 6;
var colors = [];
var pickedColor;
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init(){
	//mode buttons event listeners
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent ==="Easy" ? numSquares = 3 : numSquares = 6;
		reset();	
		});
	}

	for(var i=0; i< squares.length; i++){
		
		//add click liseners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to picked color
			if(clickedColor === pickedColor){
				resetButton.textContent = "PLAY AGAIN?";
				messageDisplay.textContent = "CORRECT";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "TRY AGAIN";
			}
		});
	}



}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent ="";
	resetButton.textContent="new colors";

	for (var i=0;i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display= "block";
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;



function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i=0; i< num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}