let value;
const numbers = [43,56,32,75,976,51,7,23]; // ikisi aynı
// const numbers2 = new Array(1,2,3,4,5,6,7); // ikisi aynı


const langs = ["Python","Java","C++","JavaScript"];

const a = ["Merhaba",22,null,undefined,3.14];

value = numbers.length;

value = numbers[0];
value = numbers[2];
value = numbers[numbers.length-1];


//Herhangi bir indexteki değeri değiştirme
numbers[2] = 1000;
value = numbers;

// Index Of
value = numbers.indexOf(1000);

//Array sonuna değer ekleme - push metodu
numbers.push(2000);
value = numbers;


//Array başına değer ekleme - 
numbers.unshift(3010);
value = numbers;


// Array sonunden değer çıkartmak
numbers.pop();
value = numbers;



// Array başından değer çıkartma
numbers.shift();
value = numbers;

// Array belli bir indexten belli bir indexe kadar çıkartmak
numbers.splice(0,3);
value = numbers;

//Reverse
numbers.reverse(value);

//Sorting
value = numbers.sort();


value = numbers.sort(function(x,y){ //Küçükten Büyüğe Sıralama
    return x - y;
});

value = numbers.sort(function(x,y){ //Büyükten Küçüğe Sıralama
    return y - x;
});





console.log(value);
