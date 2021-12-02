let value;

const now = new Date(); // Şuandaki Zamanı alır

const date1 = new Date("11-19-1993 13:00:00");

const date2 = new Date("September 19 1993");

const date3 = new Date("9/19/1993");

value = date1;

value = date1.getMonth(); // Aylar 0dan başlıyor
value = date1.getDate(); // Günler normal
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1992);
date1.setHours(0);
date1.setMinutes(13);
date1.setSeconds(30);

value = date1;


console.log(value);