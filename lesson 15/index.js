// //let obj = {
//     ism: "Hayotbek",
//     familiya: "Saidahmadov",
//     yosh: 14,
//     kurs: "Frontend"
// };

// // 1.static
// obj.ism = "Azizbek";
// obj.familiya = "Abdukarimov";
// obj.yosh = 15;
// obj.kurs = "JavaScript";
// console.log(obj);

// // 2.dinamic
// obj["ism"] = "Mubosher";
// obj ["familiya"] = "Xojiyev";
// obj ["yosh"] = 12;
// obj ["kurs"] = "Backend";
// console.log(obj);


// ==========================


// let obj = {
//     ism: "Hayotbek",
//     familiya: "Saidahmadov",
//     yosh: 14,
//     kurs: "Frontend"
// };


// for(let i in obj ) {
//     console.log(i, obj[i]);
// };


// let laptop = {
//     name: "Macbook",
//     country: "USA" ,
//     price: 1000,
// }
// let newlaptop = {};
// for(let key in laptop) {
//     if (typeof laptop [ key ] === "number") {
//         newlaptop [ key ] = laptop [key] / 2;
//     }else {
//         newlaptop [key] = laptop [key];
//     }
    
// }
// console.log(newlaptop);

// let laptop = {
//     name: "Macbook",
//     country: "USA" ,
//     price: 1000,
//     chip: "M5"
// }             
// let newlaptop = {}
// for (let key in laptop){
//     if (typeof laptop[key] === "number" ) {
//         newlaptop [key] = laptop[key] / 2;
//     } else if (key === "chip") {
//         newlaptop[key] = "M2";
//     }else {
//         newlaptop[key] = laptop[key];
//     }
// }
// console.log(newlaptop);


let Iphone = {
    name: "Iphone 17 Pro Max",
    color: "White" ,
    price: 1400,
    
}             
let newIphone = {}
for (let key in Iphone){
    if (typeof Iphone[key] === "number" ) {
        newIphone [key] = Iphone[key] = 2000;
    } else if (key === "color") {
        newIphone[key] = "BlueViolet";
    }else if (key === "name") {
        newIphone[key] = "Iphone 18 pro "
    } else {
        newIphone[key] = laptop[key];
    }
}
console.log(newIphone);