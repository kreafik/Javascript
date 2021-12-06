// Yeni element oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>   

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://cihanduran.com";
newLink.targett = "_blank";

// Text Content

// newLink.textContent = "Git"; // çok mantıklı bir hareket değil

// cardbody.textContent = "Test";

// Text Node


// const text = document.createTextNode("test");
// cardbody.appendChild(text);
// console.log(cardbody);



newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardbody.appendChild(newLink);


console.log(newLink);