let value;

value = document;

// Scriptler

value = document.scripts; // body içindeki en alttaki script(js) dosyalarını reveal eder
value = document.scripts.length; // kaç adet olduğu
value = document.scripts[0]; // 0. indexteki scripti seçer koyar

// Linkler

value = document.links; // bütün linleri çıkarıp koyar
value = document.links[0]; // 0inci indexteki linki alır
value = document.links[document.links.length-1];
value = document.links[document.links.length-1].getAttribute("class");
value = document.links[document.links.length-1].getAttribute("href");
value = document.links[document.links.length-1].className;
value = document.links[document.links.length-1].classList;


// Formlar

value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["form"];
value = document.forms[0].id;
value = document.forms[0].getAttribute("id");
value = document.forms[0].name;
value = document.forms[0].getAttribute("name");
value = document.forms[0].method;

console.log(value);