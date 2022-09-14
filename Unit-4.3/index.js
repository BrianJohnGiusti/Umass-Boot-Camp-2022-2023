/*
Part 1
For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

As a user, you should be able to:

Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo
Part 2
Now that you have a functioning todo app, save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.
*/

const form = document.querySelector("form");
const input = document.querySelector("#input")
const todoList = document.querySelector("#todo-list");


//handle the current list
todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === 'LI'){
        e.target.style.textDecoration = 'line-through';
    }
});


//handle the creation of a new todo item
form.addEventListener('submit', function(e){
//prevent refresh
e.preventDefault();

//make new todo item
let newItem = document.createElement('li');
let removeButton = document.createElement('button');
removeButton.innerText = 'remove';

//get info for item
newItem.innerText = input.value;
newItem.appendChild(removeButton);
todoList.appendChild(newItem);
});


let listOfToDo = document.querySelectorAll('li');
localStorage.setItem("listOfToDo", JSON.stringify(listOfToDo));
