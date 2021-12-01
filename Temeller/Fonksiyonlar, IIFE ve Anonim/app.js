// Fonksiyon tanımlama


// function merhaba(name = "Bilgi Yok",age ="Bilgi Yok"){
//     // if (typeof name == "undefined") name = "Bilgi Yok";
//     // if (typeof age == "undefined") age = "Bilgi Yok";
//     console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Murat", 25); // Fonksion Çağrısı / Function Call

// merhaba("Ayşe", 30);

// merhaba();

// merhaba("Kadir");

////////////////////////////////////////////

// Return Tanımlama


// function square(x) {
//     // console.log(x*x);
//     return x * x;

//     console.log("Naber") // burası hiç bir zaman çalıştırılmaz.
// }
// function cube(x) {
//     // console.log(x*x*x);
//     return x * x * x;
// }

// // let a = square(12);
// // a = cube(a);

// let a = cube(square(12));

// console.log(a);


// function merhaba(){
//     return("Merhaba");
// }

// console.log(merhaba());



// const merhaba = function(name){
//     console.log("Merhaba " + name);
// }

// merhaba("Murat");

/// Immediately Invoked Function Expression (IIFE)


// (function(name){
//     console.log("Merhaba: " + name);
// }) ("Murat");




const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get: function(){
        console.log("Ekle Edildi");
    },
    update: function(id){
        console.log(`ID: ${id} Güncellendi`);
    },
    delete: function(id){
        console.log(`ID: ${id} Silindi`);
    }
}

console.log(database.host);

database.add();

database.delete(10);