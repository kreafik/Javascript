let value;


const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");
value = todoList;
value = todo;
value = cardrow;


// Child Nodes


value = todoList.childNodes;
value = todoList.childNodes[0];

// Sadece Elementleri almak

// Children özelliği
value = todoList.children;
value = todoList.children[1];


value = todoList.children[todoList.children.length - 1];

value = todoList.children[2].textContent = "Değiştir";


value = cardrow;

value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burayı değiştir";

value = todoList;
value = todoList.children[0];
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;

value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

// Element Kardeşleri

value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;
value = todo.previousElementSibling.previousElementSibling; // bir öncekinden bir önceki


console.log(value);


