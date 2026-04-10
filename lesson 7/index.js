// For Loop

// start = 1
// stop = 10

// for (let raqam = 1; raqam <= 10; raqam++) {
//     console.log(raqam);
// }

// ===================================

// for (let raqam = 10; raqam >=1; raqam--) {
//     console.log(raqam);
// }

// // =========================================

// for (let raqam = 10; raqam >=1; raqam-= 2) {
//     console.log(raqam);
// }


// for (let raqam = 1; raqam <10; raqam--) {
//     console.log(raqam);
// }

// for (let raqam = 1; raqam <=10; raqam++) {
//     if (raqam % 2 === 1) {
//         console.log(raqam);
//     }
// }


// for ( let raqam=1; raqam <=10; raqam++) {
//     if (raqam / -- 0)
//         console.log(raqam);
// }


// =====================================================

// 1. dan 10 gacha bo'lgan sonlarni ekranga chiqaring.
// for (let i=1; i <= 10; i++) {
// console.log(i) 
// }


// 2. 1 dan 100 gacha bo‘lgan sonlar yig‘indisini toping.
// let yigindi = 0;
// for (let k = 1; k <= 100; k++) {
//     yigindi += k;
// }
//  console.log(yigindi);


// 3. 1 dan 50 gacha bo‘lgan juft sonlarni chiqaring.
// for (let n=1; n <= 50; n++) {
//     if ( n % 2 === 0) console.log(n);
// }


// 4. 1 dan 50 gacha bo‘lgan toq sonlarni chiqaring.
// for (let a=1; a <= 50 ; a++) {
//     if (a % 2 === 1)  console.log(a);
// }

// 5. 1 dan N gacha bo‘lgan sonlarning kvadratlarini chiqaring (N raqam prompt dan olinadi).
// let n = 10;
// for ( let i=1; i <= n; i++) {
//     console.log(i * i);  
// }


// 6. 1 dan N gacha bo‘lgan sonlar ichida 3 ga bo‘linadiganlarini chiqaring.
// let n = 20;
// for (let i = 1; i <= n; i++) {
//     if ( i % 3 === 0 ) console.log(i);
// }



// 7. prompt dan berilgan N sonigacha bo‘lgan sonlar ko‘paytmasini hisoblang.
// let n = 10;
// let kopaytma = 1;
// for (let i =1; i <= n; i++) {
//     kopaytma *= i;
// }
// console.log(kopaytma);



// 8. 1 dan 100 gacha bo‘lgan sonlar ichida 5 ga ham, 7 ga ham bo‘linadigan sonlarni chiqaring.
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
    
// }


// 9. 10 dan 1 gacha bo‘lgan sonlarni teskari tartibda chiqaring.
// for (let i = 10; i>= 1; i--) {
//     console.log(i);  
// }



// 10. 1 dan berilgan N sonigacha bo‘lgan sonlarni faqat toq larini yig'indisini hisoblang. (N soni prompt dan kiritiladi.)
// let n = 10;
// let yigindi = 0;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 1) yigindi += i;
// }
// console.log(yigindi);


// 11. 1 dan N gacha bo‘lgan sonlar ichida nechta juft son borligini aniqlang. (N soni prompt dan kiritiladi.)
// let n = 27;
// let count = 0;
// for (let i=1; i <= n; i++) {
//     if (i % 2 === 0) count++;
// }
// console.log(count);



// 12. Berilgan N sonigacha bo‘lgan sonlar ichida maksimal sonni toping (faqat for orqali).
// let n = 30;
// let max = 0;
// for (let k = 1; k <= n; k++) {
//     if (max < k) max = k;
// }
// console.log(max);


// 13. 1 dan 20 gacha bo‘lgan sonlar ichida 4 ga bo‘linadigan sonlarni nechta ekanligini toping.
// let count = 0;
// for (let i=1; i <= 20; i++) {
//     if (i % 4 === 0) count++;
// }
// console.log(count);



// 14. 1 dan N gacha bo‘lgan sonlar ichida 10 dan katta bo‘lganlarini chiqaring.
// let n = 20;
// for (let raqam=1; raqam <= n; raqam++) {
//     if (raqam > 10) console.log(raqam);
    
// }



// 15. Foydalanuvchi prompt dan kiritgan N soni uchun ko‘paytirish jadvalini chiqaring.
// let n = 5;
// for (let  i = 1; i <= n; i++) {
//     for (let k = 1; k <= 10; k++) {
//         console.log(`${i} x ${k} = ${i * k}`);
//     }
// }


// ====================================================



// ================================
for (let i = 5; i <= 15; i++) console.log(i);

// ============================
let s = 0;
for (let i = 1; i <= 200; i++) s += i;
console.log(s);





