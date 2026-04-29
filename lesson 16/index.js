// let obj = {
//     ism: "Ali",
//     familiya: "Valiyev",
//     yosh: 15,
//     tel_raqam: "+998 99 111 22 33",
//     manzil: "Namangan shahar"
// };

// let obj1 = structuredClone(obj)
//    obj1.ism = "Salim"
//    obj1.familiya = "Alimov"
//    obj1.yosh = 15
//    obj1.tel_raqam = "+998 99 333 22 11"
//    obj1.manzil = "Namangan shahar"
//    console.log(obj);
//    console.log(obj1);

//    ============================

// let products = {
//     pen: {
//         color: "black",
//         price: 2000,
//     },
//     pencil: {
//         color: "blue",
//         price: 5000,
//     },
//     book: {
//         page_count: 200,
//         price:50000,
//     },
//     sumka: {
//         color: "red",
//         price:100000,
//     },
//     laprop: {
//         name: "Macbook",
//         price:10000000,
//     }
// };



// let summa = 0;
// for (let key in products) {
//     if ( products[key].price >= 50000 ) summa += products[key].price
// }
// console.log(summa);


// let parent = {
//     ism: "Eshmat",
//     yosh: 50,
//     child: {
//         ism: "Toshmat",
//         yosh: 20,
//     }
// };

// // let parent1 = Object.assign({}, parent)
// // parent1.child.ism = "Gulmat";
// // parent1.child.yosh = 25
   

// // console.log(parent1);

// let a = structuredClone(parent)
// a.child.ism = "Gulmat";
// a.child.yosh = 25;

// console.log(a);


let obj = {
    name: "Algoritm",
    status: "IT Center",
    year: 2026,
    filial: {
        name: "Algoritm, Chust filial",
        status: "IT Center",
        year: 2026
    }
}

let {
    name,
    status,
    year,
    filial: { name: nameChust, status: statusChust, year: yearChust},
} = obj;

console.log(name);
console.log(status);
console.log(year);
console.log(nameChust);
console.log(statusChust);
console.log(yearChust);






