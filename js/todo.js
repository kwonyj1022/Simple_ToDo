const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const todos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function onDeleteTodoClick(event) {
    const li = event.target.parentElement;
    li.remove();
}

function printTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", onDeleteTodoClick);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function onTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todos.push(newTodo);
    saveTodos();
    todoInput.value = "";
    printTodo(newTodo);
}

todoForm.addEventListener("submit", onTodoSubmit);
