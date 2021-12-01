// While Döngüsü


// let i = 0;

// while (i < 10){
//     console.log(i);
//     i++ // her döngüde 1 artırır
// }


// let i = 10;

// while (i > 0){
//     console.log(i);

//     // i--;
//     i -= 2;
// }


// Break ve Continue 
// Break koşul doğru olsa bile durdurur

 
// let i = 0;

// while(i < 10) {
//     console.log(i);
//     if (i == 5){
//         break; // Burda sonlanma gerçekleştirir
//     }
//     i++;
// }


// while (i < 10) {
//     if( i == 3 || i == 5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }


// Do While Döngüleri - en az bir defa çalışma garantisi var


// let i = 0;

// do {
//     console.log(i);
//     i++;

// } while(i < 10);

// Arraylerde geçiş yapmak yazdırmak

// const langs = ["Python", "Javascript", "Java"];

// let index = 0;

// while(index < langs.length){
//     console.log(langs[index]);

//     index++;
// }


// const langs = ["Python", "Javascript", "Java"];

// for(let index = 0; index < langs.length;index++){
//     console.log(langs[index] + " " + "naber");
// }

// For each metodu

// const langs = ["Python", "Javascript", "Java"];

// langs.forEach(function(lang, index){
//     console.log(lang, index);
// })


// const users = [
//     {name: "Mustafa", age:25},
//     {name: "Zeynep", age:40},
//     {name: "Ali", age:12}
// ];

// const names = users.map(function(user){
//     return user.name;
// })
// const ages = users.map(function(user){
//     return user.age;
// })
// console.log(names, ages);
// console.log(ages);


const user = {
    name: "Mustafa",
    age: 25,
};
for(let key in user){
    console.log(key, user[key]);
}