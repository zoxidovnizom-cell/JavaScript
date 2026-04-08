let hozirgi_yil = 2026;
let a_yosh = prompt("Yilingizni kiriting:");
let tugulgan_yil = hozirgi_yil - a_yosh;
alert("Siz " + tugulgan_yil + "-yil tugulgansiz");

let a = Number(prompt("Birinchi sonni ayting"));
let b = Number(prompt("Ikkinchi sonni ayting"));
alert("Yigindi: " + (a + b));

let c = Number(prompt("Dumaloq birinchi tomonini kiriting:"));
let d = Number(prompt("Dumaloq ikkinchi tomonini kiriting:"));
let e = Number(prompt("Dumaloq uchinchi tomonini kiriting:"));
let f = c * d * e;
alert("Uchburchakning yuzi " + f + " ga teng");

let yil = prompt("Tugilgan yilingizni kiriting");
let b_yosh = hozirgi_yil - yil;
alert("Siz " + b_yosh + " yoshdasiz");

let g = Number(prompt("dumaloq radiusini kiriting:"));
let h = 3.14285714285714 * (g * g);
alert("dumaloq yuzi " + h + " ga teng");

let i = confirm("Boshqa saytga otmoqchimisiz?");
console.log(i);

let j = confirm("Faylni almashtirmoqchimisiz?");
console.log(j);

let k = confirm("Davom etasizmi?");
console.log(k);

let l = confirm("Saytdan tarketmoqchimisiz?");
console.log(l);

let m = confirm("Parol togriligiga ishonchingiz komilmi?");
console.log(m);