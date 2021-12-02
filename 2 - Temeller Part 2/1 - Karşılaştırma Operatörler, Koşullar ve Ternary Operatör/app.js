// Karşılaşmtırma Operatorleri

// Eğer bir tarafta sayı bir tarafta string varsa, otomatik olarak string e dönüştürülür.

// ==       İki değerin eşitliğini kontrol eder
// ===      İki değerin hem eşitliğini hemde tipi kontrol eder
// !=       Eşit değil midir operatörü, eşitse false, değilse true
// !==      
// >        
// <        
// >=       
// <=       


// console.log(2 == 2);
// console.log("js" == "java");


// console.log(2 == "2");
// console.log(2 === "2");


// console.log(4>2);
// console.log(2>4);


// console.log(2 != 4);

// console.log(2 < 4);
// console.log(4 < 2);

// console.log (2 >= 2);

// console.log(2 <= 5);

// Mantıksal Bağlaçlar

// Not Operatörü 
// İşlem ne kadar doğru olursa olsun, false verir

// console.log(!(2 == 2));

// And Operatörü - 
// Bütün işlemleri toplar her birini
// kontrol eder sonuçta hepsi true ise true verir
// herhangi birisinin false olması durumunda
// false verir

// console.log((2 == 2) && ("Rıza" == "Ahmet"))

// Or Operatörü
// Koşullardan herhangi birisi true olsa bile genel sonuç true çıkar

// console.log((4 == 2) || ("Ahmet" == "Ahmet"));


// Koşullar


// if (kosul) {
//     // İf in bloğu burası
// }



// let a = true;

// if (a == true) {
//     console.log("Başarılı!")
// }


// const error = true;

// if (error == true) {
//     console.log("Hata oluştu!");
// }
// else {  // buranın çalışması üsttekine bağlı
//     console.log("Hata oluşmadı!")
// }

// console.log("Deneme!");


// const user1 = "cihan";
// const user2 = "ahmet";
// const user3 = "faruk";

// if (user1 === "cihan") {
//     console.log("Kullanıcı Bulundu!");
// }

// else {
//     console.log("Kullanıcı Bulunamadı!")
// }

///////////////////////////////////////////////// 

// const process = "6";

// if (process === "1"){
//     console.log("İşlem 1 Doğru");
// }
// else if (process === "2"){
//     console.log("İşlem 2 Doğru");
// }
// else if (process === "3"){
//     console.log("İşlem 3 Doğru");
// }
// else if (process === "4"){
//     console.log("İşlem 4 Doğru");
// }

// else {
//     console.log("İşlem Kontrolu Sağlayın!"); 
// }


///////////////////////////////////////////////// 

const number = 100;

// if (number == 100) {
//     console.log("Sayı 100'e Eşit!");
// }
// else {
//     console.log("Sayı 100'e Eşit Değil!");
// }

///////////////////////////////////////////////// 

// Ternary Operatörü 

// console.log(number === 100 ? "Sayı 100" : "Sayı 100 Değil");

///////////////////////////////////////////////// 

if (number === 100) 
    console.log ("Sayı 100");
else console.log ("Sayı 100 Değil");