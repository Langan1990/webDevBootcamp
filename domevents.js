var but = document.querySelector("button");
var isGreen = false;

but.addEventListener("click", function(){
	if(isGreen){
		document.body.style.background = ("white");
		isGreen=false;
	}
	else{
document.body.style.background = ("green");
isGreen = true;
}
});