const filter = document.getElementById("filter");

// document.addEventListener("DomContentLoaded",load);

// function load(e){
//     console.log("Sayfa Yüklendi!");
// }

// console.log(filter);

// Focus 
// filter.addEventListener("focus",run);

//Blur 
// filter.addEventListener("blur",run);


// Paste
filter.addEventListener("paste",run);

// Copy
filter.addEventListener("copy",run);

// Cut
filter.addEventListener("cut",run);

// Select
filter.addEventListener("select",run);

function run(e){
    console.log(e.type);
}