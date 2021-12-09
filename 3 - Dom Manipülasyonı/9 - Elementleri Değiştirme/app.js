// Replace yani elementleri birbiri ile değiştirmek 




const cardBody = document.querySelectorAll(".card-body")[1];

// Yeni Element Oluşturma


const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar";



// Eski Element Seçme


const oldElement = document.querySelector("#tasks-title");

console.log(oldElement);

cardBody.replaceChild(newElement, oldElement);



console.log(newElement);