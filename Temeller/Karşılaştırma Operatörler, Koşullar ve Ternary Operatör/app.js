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


const error = true;

if (error == true) {
    console.log("Hata oluştu!");
}

console.log("Deneme!");