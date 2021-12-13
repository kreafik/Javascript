// Klavye Eventleri yani keypress klavyede basılan bişy - harfler ve sayılar sadece 

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");


todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
    // console.log(e.target.value);
}


// document.addEventListener("keypress",run);

// function run(e){

//     console.log(e.which); // ASCII tablosundaki değer

//     console.log(e.key);  // Basılan tuşu yazdırır
//     console.clear;

    
// }


// keydown - tuşa bastığımızda event başlar



// document.addEventListener("keydown",run);

// function run(e){

//     console.log(e.key);

// }


// Keyup eventi - Tuşu bırakınca bu event oluşur

// document.addEventListener("keyup",run);

// function run(e){

//     console.log(e.key);

// }


