let value;

const programmer = {
    name: "Cihan Duran",
    age: 28,
    email: "tasarim@cihanduran.com",
    langs: ["Python", "Java", "Javascript"],

    address: {
        city: "Muğla",
        street: "Bodrum",
        no: 34 / 5,
    },

    work: function () {
        console.log("Programcı Çalışıyor....");
    }
}

value = programmer;

value = programmer.email; // Genel
value = programmer["email"];
value = programmer.langs;
value = programmer.address.city;
programmer.work();


const programmers = [
    { name: "Cihan Duran", age:28},
    { name: "İsim Soyisim", age:21},

]

value = programmers [0].name;


console.log(value);