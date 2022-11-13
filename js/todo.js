const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function onDeleteTodoClick(event) {
    const li = event.target.parentElement;
    li.remove();
}

function printTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", onDeleteTodoClick);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function onTodoSubmit(event) {
    event.preventDefault();
    const newTodoObj = {
        text: todoInput.value,
        id: Date.now()
    };
    todos.push(newTodoObj);
    saveTodos();
    todoInput.value = "";
    printTodo(newTodoObj);
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(printTodo);
    todos = parsedTodos;
}
