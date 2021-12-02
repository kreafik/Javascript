let value;
const firstName = "Cihan";
const lastName = "Duran";

const langs = "Java, Python, C++";

value = firstName + " " + lastName;

value = "Cihan Duran ";

value += "Developer"  // value = value + "Developer" value yi yeniden güncelleyip yazdırmak için, += kullanırsak aynı bok

value = firstName.length; //  stringin içinde kaç adet harf olduğunu çıkarır

value = firstName.concat(" ",lastName," ","Developer") // toplama yapmak yerine bu concat kullanılabilir

value = firstName.toLowerCase(); // harfleri küçülttü
value = firstName.toUpperCase(); // harfleri büyüttü

value = firstName[0]; // ilk indexteki harfi aldı
value = firstName[firstName.length - 1]; // stringimizin boyunu bilmediğimiz durumlarda falan kullanabiliriz
value = firstName.toUpperCase()[2]; // 3. harfi aldı ve o harfi büyüttü



// Index Of Metodu
value = firstName.concat(" ",lastName," ","Developer");
value = value.indexOf("a"); // kaçıncı INDEX te olduğunu söylüyor. Sırada değil. indexleme 0'dan başlar.



//Chat At Metodu


value = firstName.charAt(0); // indexteki elemanı almak için kullanılır
value = firstName.concat(" ",lastName," ","Developer");
value = value.charAt(1); // indexteki elemanı almak için kullanılır
value = value.charAt(value.length - 1); // indexteki elemanı almak için kullanılır


//Split Metodu

value = langs.split(","); // virgül ile parçalayıp array oluşturur 


//Replace Metodu

value = langs.replace("Python", "Css") // 1. tırnak içindekini sildi 2. tırnak içindekini yazdı
value = value.split(","); // array e dönüştürdü


// Includes

value = langs.includes("Java"); // bulursa true döner
value = langs.includes("asdasdasd"); // bulamazsa false döner



console.log(value);