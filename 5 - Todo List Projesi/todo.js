const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0]; 
const secondCardBody = document.querySelectorAll(".card-body")[1]; 
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

addEventListeners();

function addEventListeners() { // Tüm evenet listenerlar 
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
}

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem) {
        const text = listItem.textContent.toLowerCase();
    })
}

function deleteTodo(e){
    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Silindi");
    }
}

function deleteTodoFromStorage (deletetodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo, index){
        if (todo === deletetodo ) {
            todos.splice(index,1); // Arrayden değeri silmek
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));

}



function loadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function(todo) {
        addTodoToUI(todo);

    })
}

function addTodo(e) {
    const newTodo = todoInput.value.trim(); // trim başındaki ve sonundaki boşlukları kaldırır

    if (newTodo === "") {
        showAlert("danger", "lütfen bir todo gir lan!");

        // <div class="alert alert-danger" role="alert">
        //                 This is a danger alert—check it out!
        // </div>
    }
    else {
        addTodoToUI(newTodo); // Ekle
        addTodoToStorage(newTodo);
        showAlert("success", "helalin var!");
        
    }
    


    
    e.preventDefault();
}
function getTodosFromStorage(newTodo) {
    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else  {
        todos = JSON.parse(localStorage.getItem("todos"));
    }   

    return todos;
}


function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function showAlert (type, message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    firstCardBody.appendChild(alert);

    // setTimeout metodu belirli bir sanıye sonra kaldırır

    setTimeout(function(){
        alert.remove();
    },1000);
}

function addTodoToUI(newTodo) { // String değerini list item olarak UI'a ekleyecek.

    // List Item Oluşturma
    const listItem = document.createElement("li");
    // Link Oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove' ></i>";
    listItem.className = "list-group-item d-flex justify-content-between";

    //Text Node Eklemek
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // Todo List e List Item eklemek
    todoList.appendChild(listItem);
    todoInput.value = ""; // Girdikten sonra autocomplete i siler




} 
