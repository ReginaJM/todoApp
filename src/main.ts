import { Todo } from './models/Todo.ts';
import './style.css'

const todos: Todo[] = [];

document.getElementById("save")?.addEventListener("click", () => {

  const text = (document.getElementById("todoText") as HTMLInputElement).value;

  if(text !== "") {
    todos.push(new Todo(text));
    createHtml(todos);
  }
});

const createHtml = (todos: Todo[]) => {
  const todoList = document.getElementById("todos") as HTMLUListElement;

  todoList.innerHTML = "";

  for(let i = 0; i < todos.length; i++) {
    const liTag = document.createElement("li");
    liTag.innerHTML = todos[i].text;
    liTag.className = todos[i].done ? "done" : "";

    liTag.addEventListener("click", () => {
      todos[i].done = !todos[i].done;
      createHtml(todos);

    })

    todoList.appendChild(liTag);
  }
 }