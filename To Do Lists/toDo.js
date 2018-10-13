var todos = [];

var input = prompt("What would you like to do?");


window.setTimeout(function(){
while(input !=="quit"){

	if(input === "list"){
		listTodos();

	}
	else if(input === "new"){
		newTodos();
	}
	else if(input === "delete"){
		deleteTodos();
	}
	var input = prompt("What would you like to do?");
}
console.log("You quit the app");
}, 500);


function listTodos(){
	console.log("**********");
		todos.forEach(function(todo, i){
			console.log(i +": " + todo);
		console.log("**********");
		});
}

function newTodos(){
	var newToDo = prompt("Enter new todo");
	todos.push(newToDo);
	console.log("Item added");
}

function deleteTodos(){
	var index = prompt("Enter the index of todo to delete");

		todos.splice(index, 1);
		console.log("Item deleted");
}