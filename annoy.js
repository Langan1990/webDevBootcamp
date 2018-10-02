// var answer = prompt("are we there yet?");

// while (answer !== "yes" && answer !== "yeah" && answer !== "yep"){
// 	var answer = prompt("are we there yet?");
// } 
// alert("we finally made it");




//VERSION 2


var answer = prompt("are we there yet?");

while (answer.indexOf("yes") === -1){
	var answer = prompt("are we there yet?");
} 
alert("we finally made it");