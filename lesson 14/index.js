// let algoritm = {
//     ism:"Algoritm IT Center",
//     yil:2016,
//     manzil: "Chorsu DXA binosi",
//     telRaqam: "+998 99 111 22 33"
// };

// console.log(algoritm.ism); //1

// console.log(algoritm["ism"]); //2

// let str = "ism";
// console.log(algoritm[str]); //3




// let algoritm = {
//     ism1: "Algoritm IT Center",
//     yil1: 2026,
// };

// let start21 = {
//     ism2: "Start21",010
//     yil2: 2021,
// };

// let birlashgan = Object.assign(algoritm, start21)
// console.log(birlashgan);
// let obj



// let obj = {
//     ism: "Eshmat",
//     yosh: 20,
//     status: "Talaba",
//     manzil: "Toshkent"
// };



// let obj1 = Object.assign({}, obj)

// obj1.ism = "Toshmat";
// obj1.yosh = "27";
// obj1.status = "Ishchi";
// obj1.manzil = "Namangan";




// let obj2 = structuredClone(obj)
// obj2.ism = "Ali";
// obj2.yosh = 17;
// obj2.status = "Maktab";
// obj2.manzil = "Farg'ona";


// console.log(obj2);
// console.log(obj1);
// console.log(obj);


// ==============================================

let obj1 = {
    ism: "Eshmat", yosh: 20, status: "Talaba", manzil: "Toshkent",
};


let ism1 = Object.assign({}, obj1)

  ism1.ism = "Aziz",
  ism1.yosh = 22,
  ism1.status = "Talaba",
  ism1.manzil = "Termiz" ;


  let ismm1 = structuredClone(obj1)
   ismm1.ism = "Akmal",
     ismm1.yosh = 23,
     ismm1.status = "Dasturchi",
     ismm1.manzil = "Jizzax" ;

   console.log(obj1);
   console.log(ism1);
   console.log(ismm1);
//    ==========================

let obj2 = {
 ism: "Vali", yosh: 25, status: "Dasturchi", manzil: "Andijon" 
};
   
 let ism2 = Object.assign({}, obj2)

   ism2.ism = "Rustam",
    ism2.yosh = 28, 
    ism2.status = "Biznesmen", 
    ism2.manzil = "Toshkent" ;

    let ismm2 = structuredClone(obj2)
    ismm2.ism = "Temur",
    ismm2.yosh = 28,
    ismm2.status = "Harbiy",
    ismm2.manzil = "Termiz" 

    console.log(obj2);
    console.log(ism2);
    console.log(ismm2);
    
    // ==============================================================

    let obj3 = {
      ism: "Eshmat", yosh: 20, status: "Talaba", manzil: "Toshkent" 
    };

    let ism3 = Object.assign({}, obj3)
    ism3.ism = "Ali",
    ism3.yosh = 22,
    ism3.status = "Ishchi",
    ism3.manzil = "Samarqand" ;

    let ismm3 = structuredClone(obj3)
     ismm3.ism = "Vali",
     ismm3.yosh = 19,
     ismm3.status = "Talaba",
     ismm3.manzil = "Buxoro";

    //  =============


    let obj4 = {
      ism: "Sardor", yosh: 25, status: "Dasturchi", manzil: "Toshkent"
    };

let ism4 = Object.assign({}, obj4)
    ism4.ism = "Jasur",
   ism4.yosh = 23,
   ism4.status = "Talaba",
   ism4.manzil = "Namangan";

   let ismm4 = structuredClone(obj4)
    ismm4.ism = "Bekzod",
    ismm4.yosh = 28,
    ismm4.status =  "Ishchi",
    ismm4.manzil = "Farg'ona";

    let obj5 = {
      ism: "Dilshod", yosh: 21, status: "Talaba", manzil: "Qarshi"
    }

    let ism5 = Object.assign({}, obj5)
       ism5.ism = "Aziz",
       ism5.yosh = 24,
       ism5.status = "Bloger",
       ism5.manzil = "Toshkent";
     
       
    let ismm5 = structuredClone(obj5)
        ismm5.ism = "Rustam",
        ismm5.yosh = 30,
        ismm5.status = "Haydovchi",
        ismm5.manzil = "Andijon";
