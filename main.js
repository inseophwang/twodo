// Global data.
// A few todos in there to start with!
// This is mostly for testing purposes.
// let todos = [
//   `Be able to mark todos "done".`,
//   `Allow user interaction through the DOM`,
//   `Add dates to todos.`,
// ];

// let completed = [
//   false,
//   false,
//   false,
// ]

// Or the ALTERNATE method:
let todos = [
  [`Be able to mark todos "done".`, false],
  [`Allow user interaction through the DOM`, false],
  [`Add dates to todos.`, false],
]

function printToDo(todo){
  const makeLi = document.createElement('li');

  const makeUl = document.querySelector('.todo-list');

  makeLi.innerText = todo;

  makeUl.appendChild(makeLi);
}

function printEveryTodo(){
  for(let i = 0; i < todos.length; i++){
    printToDo(todos[i])
  }
}

function addingTodo(todoName){
  todos.push([todoName, false])
}

function removingTodo(i) {
  todos.splice(i, 1)
}



const addButton = document.querySelector('.add-todo');

addButton.addEventListener('click', funcAdd)

function funcAdd(){
  const todoInput = document.querySelector('.todo-input');

  const todoText = todoInput.value;

  addingTodo(todoText);

  printToDo(todoText);
}

function markData(index){
  todos[index] = true;
}

function markDone(number) {
  const ol = document.querySelector('.todo-list')
}

// const markButton = document.querySelector('.mark-todo-complete');

// const deleteButton = document.querySelector('.delete-completed-todos');


