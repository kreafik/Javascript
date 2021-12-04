const element = document.querySelector("#clear-todos");

// Element Özellikleri
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);

// console.log(element.style);

// Style ve Element Özelliklerini Değiştirme


// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "20px";
// element.style.paddingTop = "10px";

// element.href = "https://cihanduran.com";
// element.target = "_blank";

// element.textContent = "TEEET"
// element.innerHTML = "<span style = 'color:green background-color:#fff'> TEYT </span>"


// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#e0e1e1"
// })



let element2 = document.querySelector("li:last-child");


element2 = document.querySelector("li:nth-child(2)") // ikinciyi alır 

element2 = document.querySelectorAll("li:nth-child(odd)"); // 1 - 3 - 5 diye seçer

element2 = document.querySelectorAll("li:nth-child(even)"); // 2-4-6-8 şeklinde seçim yapar

element2.forEach(function(el){
    el.style.background = "#ccc";
    el.style.color = "red";
});



console.log(element2);


// console.log(elements);

// console.log(element);