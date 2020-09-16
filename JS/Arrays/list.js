var todos = [];



var input = prompt("What would you like to do?");
while (input != "quit"){
    if (input === "list") {
        listTodo();
    }
    else if (input === "new"){
       newTodo();
   }
   else if (input === "delete"){
       deleteTodo();
   }
    var input = prompt("What would you like to do?"); 
}
  
console.log("OK you quit the app")


function listTodo(){
    // console.log("*********")
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo)
    })
    // console.log("*********")
}
function newTodo(){
    var newTodo = prompt("What would you like to add?");
    todos.push(newTodo);
    console.log("added todo")
}
function deleteTodo(){
    var index = prompt("which index would you like to delete?")
    todos.splice(index, 1);
    console.log("deleted todo")
}