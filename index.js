
// create a Todo array
let allTodos = []

// initialed the handle new todo function
function handleNewTodo(){
    let newTodo = prompt("Todo name")
    allTodos.push(newTodo)
    init();
}


// Add a function to initialize the app
function init() {
    document.getElementById("todos").innerHTML=allTodos.map(todo=>`<li class="todo_element">
    ${todo} <input type="checkbox"/></li>`
    );

}

// Invoke the init function
init();