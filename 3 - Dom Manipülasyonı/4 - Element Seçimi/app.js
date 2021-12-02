// Elementi ID'ye göre seçmek

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Elementi Class'a Göre Seçmek


element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");


// Element Tag'e göre seçmek

element = document.getElementsByTagName("li");

// Query Selector - Tek bir element döndürüyor - Sayfada gördüğü ilk elementi döndürüyor

element = document.querySelector("#todo-form"); // ID Seçimi
element = document.querySelector("#tasks-title"); // ID Seçimi
element = document.querySelector(".list-group-item"); // Class Seçimi
element = document.querySelector("li"); // Class Seçimi
element = document.querySelector("div"); // Class Seçimi

// Query Selector All - Tüm Elementleri Seçer

element = document.querySelectorAll(".list-group-item");

element.forEach(function(el){
    console.log(el);
});

console.log(element);