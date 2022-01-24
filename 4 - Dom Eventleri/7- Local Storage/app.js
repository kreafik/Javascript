// Local Storage 

// SetItem


// localStorage.setItem("hareket","burpee"); 
// localStorage.setItem("tekrar", 50); // daima string olarak kaydeder

// // Get Item

// const value = localStorage.getItem("tekrar");

// console.log(value);
// console.log(typeof value);


// Clear Local Storage

// localStorage.clear();

// localStorage.setItem("hareket","burpee"); 
// localStorage.setItem("tekrar", 50); 

// console.log(localStorage.getItem("sport"));


// if (localStorage.getItem("hareket") === null) {
//     console.log("Yok");
// }

// else {
//     console.log("Var");
// }


// Local Storage Array Yazmak

// const todos = ["Todo 1", "Todo 2", "Todo 3"]

// localStorage.setItem("todos", JSON.stringify(todos)); //JSON ile array e çeviriyor

// const value = JSON.parse(localStorage.getItem("todos")); // JSON parse ile console a array şeklinde yazdırıyor

// console.log(value);

const form = document.getElementById("todo-form"); // todo form elementini seçtik
const todoInput = document.getElementById("todo"); // todo input elementini seçtik

form.addEventListener("submit", addTodo); // bu form submit olduğunda eventi ekledik

function addTodo(e) {
    const value = todoInput.value; // Inputtan değeri almak için kullandık o andaki değeri

    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value); 

    localStorage.setItem("todos", JSON.stringify(todos));


    e.preventDefault();
}