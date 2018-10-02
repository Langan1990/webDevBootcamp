// IS EVEN FUNCTIONS


// function isEven(num){
// 	if (num % 2 ===0){
// 		return true;
// 	}
// 	else{
// 		return false
// 	}
// }
// isEven(2);

function isEven(num){
	return num % 2 ===0;
}


function factorial(num){
	//define a result variable
	var result = 1;

	for(var i = 1; i<=num; i++){
		result *= i;
	}
	//return the result
	return result;
}

function kebabToSnake(str){
//replace all dashes with underscores
var newStr = str.replace(/-/g , "_");
//return str
return newStr;
}