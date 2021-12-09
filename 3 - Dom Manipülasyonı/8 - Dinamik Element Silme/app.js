// Dinamik Element Silme İşlemleri


const todoList = document.querySelector("ul.list-group");   
const todos = document.querySelectorAll("li.list-group-item");


// Remove Metodu

// todos[0].remove(); // ilk child elementi siler


// Remove Child

// todoList.removeChild(todoList.lastElementChild); // Son Elementi Siler
// todoList.removeChild(todos[0]);  // burda da seçilen elementi siler


console.log(todos);
console.log(todoList);