// 1. While
// 2. do while


// FOR loop
// for (let raqam1 = 1; raqam1 <= 10; raqam1++) {
//     console.log(raqam1);
    
// }

// WHILE loop
// let raqam2 = 1;
// while (raqam2 <= 10) {
//     console.log(raqam2);
//     raqam2++    
// }

// DO WHILE loop
// let raqam3 = 1;
// do {
//     console.log(raqam3);
//     raqam3++;
// } while (raqam3 <= 10);

// =========================

// let raqam1 = 1;
// let yigindi = 0;
// while (raqam1 <= 100) {
//     yigindi += raqam1;
//     raqam1++;
// }
// console.log(yigindi);

// // =====================================
// let raqam2 = 1;
// let yigindi2 = 0;
// do{
//     yigindi2 += raqam2;
//     raqam2++;
// } while (raqam2 <= 100);
// console.log(yigindi2);

// =======================================


// 3. 1 dan 50 gacha bo‘lgan juft sonlarni chiqaring.

// let raqam1 = 1;
// while ( raqam1 <= 50) {
//     if (raqam1 % 2 === 0) console.log(raqam1);
//     raqam1++
// }
// // ===============
// let raqam2 = 1;
// do{
//     if (raqam2 % 2 === 0) console.log(raqam2);
//     raqam2++
// }while (raqam2 <= 50)


// 3. 1 dan 50 gacha bo‘lgan juft sonlarni chiqaring.

// let raqam1 = 1;
// while ( raqam1 <= 50) {
//     if (raqam1 % 2 === 1) console.log(raqam1);
//     raqam1++
// }
// // ===============
// let raqam2 = 1;
// do{
//     if (raqam2 % 2 === 1) console.log(raqam2);
//     raqam2++
// }while (raqam2 <= 50)

// ===============================

// let n =15;
// let raqam1 = 1;
// while(raqam1 <= n) {
//     console.log(raqam1 * raqam1);
//     raqam1++
// }

// // ===============

// let raqam2 = 1;
// do{
//     console.log(raqam2 * raqam2);
//     raqam2++
// }while (raqam2 <= n)

// 6. 1 dan N gacha bo‘lgan sonlar ichida 3 ga bo‘linadiganlarini chiqaring.

// let n = 25;
// let raqam1 = 1;
// do{
//     if (raqam1 % 3 ===0 ) console.log(raqam1);
//     raqam1++
// }while(raqam1 <= n);

// let raqam2 = 1;
// while(raqam2 <= n) {
//     if (raqam2 % 3 ===0 ) console.log(raqam2);
//     raqam2++
// }



















// ====================================================================
// 1//
// while
// let i = 5;
// while (i <= 15) {
//   console.log(i);
//   i++;
// }

// // do...while
// let a = 5
// do {
//   console.log(a);
//   a++;
// } while (a <= 15);
// =============================
// 2//

// let i = 1
// let a = 0;
// while (i <= 200) {
//   sum += i;
//   i++;
// }
// console.log(a);

// let h = 1
// let b = 0;
// do {
//   b += h;
//   h++;
// } while (h <= 200);
// console.log(b);
// ==========================
// 3//

// let a = 1;
// while (a <= 60) {
//   if (a % 2 === 0) console.log(a);
//   a++;
// }

// let b = 1;
// do {
//   if (b % 2 === 0) console.log(b);
//   b++;
// } while (b <= 60);
// ==============================
// 4//

// let a = 1;
// while (a <= 60) {
//   if (a % 2 === 0) console.log(a);
//   a++;
// }

// let b = 1;
// do {
//   if (b % 2 === 0) console.log(b);
//   b++;
// } while (b <= 60);

// =================================
// // 5//
// let n = 120
// let i = 1;

// while (i <= n) {
//   console.log(i * i * i);
//   i++;
// }

// do {
//   console.log(i * i * i);
//   i++;
// } while (i <= n);
// ====================
// 6//
// let n = 20
// let i = 1;

// while (i <= n) {
//   if (i % 4 === 0) console.log(i);
//   i++;
// }

// do {
//   if (i % 4 === 0) console.log(i);
//   i++;
// } while (i <= n);
// =============
// 7//
// let n = 20
// let i = 1
// let b = 0;

// while (i <= n) {
//   b += i;
//   i++;
// }
// console.log(b);

// do {
//   b += i;
//   i++;
// } while (i <= n);
// console.log(b);
// =====================
// 8//
// let i = 1;
// while (i <= 150) {
//   if (i % 3 === 0 && i % 5 === 0) console.log(i);
//   i++;
// }

// do {
//   if (i % 3 === 0 && i % 5 === 0) console.log(i);
//   i++;
// } while (i <= 150);
// ===========================
// 9//
// let i = 20;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// do {
//   console.log(i);
//   i--;
// } while (i >= 1);
// ==========================
// 10//
// let n = 100
// let i = 1
// let b = 0;

// while (i <= n) {
//   if (i % 2 === 0) b += i;
//   i++;
// }
// console.log(b);

// do {
//   if (i % 2 === 0) b += i;
//   i++;
// } while (i <= n);
// console.log(b);
// ====================
 // 11//
// let n = 100
// let i = 1
// let count = 0;

// while (i <= n) {
//   if (i % 2 !== 0) count++;
//   i++;
// }
// console.log(count);

// i = 1; count = 0;
// do {
//   if (i % 2 !== 0) count++;
//   i++;
// } while (i <= n);
// console.log(count);
// =================================
// 12//
// let n = 100
// let i = 1
// let b = 1;

// while (i <= n) {
//   if (i < b) b = i;
//   i++;
// }
// console.log(b);

// do {
//   if (i < b) b = i;
//   i++;
// } while (i <= n);
// console.log(b);
// =================
// 13//
// let i = 1
// let count = 0;

// while (i <= 30) {
//   if (i % 3 === 0) count++;
//   i++;
// }
// console.log(count);

// do {
//   if (i % 3 === 0) count++;
//   i++;
// } while (i <= 30);
// console.log(count);
// ======================
// 14//
// let n = 20
// let i = 1;

// while (i <= n) {
//   if (i < 20) console.log(i);
//   i++;
// }

// do {
//   if (i < 20) console.log(i);
//   i++;
// } while (i <= n);
// ===========================
// 16//
// let i = 1;

// while (i <= 100) {
//   if (i % 9 === 0) console.log(i);
//   i++;
// }

// do {
//   if (i % 9 === 0) console.log(i);
//   i++;
// } while (i <= 100);
// =========================
// 17//
// let n = 26
// let i = 1
// let m = 0;

// while (i <= n) {
//   if (i % 2 === 0) m = i;
//   i++;
// }
// console.log(m);

// i = 1; m = 0;
// do {
//   if (i % 2 === 0) m = i;
//   i++;
// } while (i <= n);
// console.log(m);
// =========================
// 18//
// let i = 1;

// while (i <= 40) {
//   if (i % 6 === 0) console.log(i);
//   i++;
// }

// i = 1;
// do {
//   if (i % 6 === 0) console.log(i);
//   i++;
// } while (i <= 40);
// =====================
// 19//
// let n = 20
// let i = 1
// let count = 0;

// while (i <= n) {
//   if (i % 2 === 0 && i % 3 === 0) count++;
//   i++;
// }
// console.log(count);

// i = 1; count = 0;
// do {
//   if (i % 2 === 0 && i % 3 === 0) count++;
//   i++;
// } while (i <= n);
// console.log(count);
// ======================
// 20//
// let n = 20
// let i = 1
// let s = 0;

// while (i <= n) {
//   if (i % 5 === 0) s += i;
//   i++;
// }
// console.log(s);

// i = 1; s = 0;
// do {
//   if (i % 5 === 0) s += i;
//   i++;
// } while (i <= n);
// console.log(s);

