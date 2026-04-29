// let i = 1;
// let toqYigindi = 0;
// let juftYigindi = 0;
// while (i <= 20) {
//     if (i % 2 === 1) toqYigindi += i;
//     else juftYigindi += i;
//     i++
// }console.log(toqYigindi); console.log(juftYigindi);

// do {
//     if (i % 2 === 1) toqYigindi +=i;
//     else juftYigindi += i;
//     i++
// } while (i <= 20) ;

// =================
// let count = 0
// let i = 1;
// while(i <= 20) {
//     if (i % 3 === 0) count++
//     i++
// }console.log(count);
// // 
// let b = 20;
// do {
//      if (b % 3 === 0) count++; 
//     b++
// }while(b <= 20) console.log(count);

// =================
// let i = 30;
// let yigindi = 0;
// do {
//     if (i % 3 === 0 || i % 5 === 0) yigindi += i;
//     i--;
// } while (i >= 1)
// console.log(yigindi);


// for (let b = 30; b >= 1; b--) {
//     if (i % 3 === 0 || i % 5 === 0) yigindi += i;
// }
// console.log(yigindi);

// let kopaytma = 1;
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0 && i % 7 === 0) kopaytma *=i;
// }
// console.log(kopaytma);

// let b = 1;
// let kopaytma1
// while (b <= 100){
//      if (b % 5 === 0 && b % 7 === 0) kopaytma1 *= b;
//      b++
// }console.log(kopaytma1);
// let toqYigindi = 0;
// let juftYigindi = 0;
// let i = 1;
// while (i <=50){
//    if (i % 2 === 1) toqYigindi += i; 
//    else juftYigindi += i;
//    i++;
// }
// let result = juftYigindi - toqYigindi;
// if (result % 2 === 1) console.log(result, `Bu Toq son`);
// else console.log(result, `Bu Juft son.`);
// // ====================================================
// let toqYigindi1 = 0;
// let juftYigindi1 = 0;
// let b = 1;
// do {
//      if (b % 2 === 1) toqYigindi1 += b; 
//    else juftYigindi1 += b;
//    b++;
// }while (b <= 50)
// let result1 = juftYigindi1 - toqYigindi1;
// if (result1 % 2 === 1) console.log(result1, `Bu Toq son`);
// else console.log(result1, `Bu Juft son.`);












// ///////////////////////////////////// H/W//////////////////////////////////////


// for (let i = 1; i <= 30; i++) {
//     let sum = eval (`${i}`.split("").join("+"));
//     if (sum %5 === 0 ) continue;
//     console.log(i);
    
// }

// let kopaytma = 1;
// for (let i = 1; i <= 40; i++) {
//     if (i % 3 === 0 && i % 7 === 0) continue;
//     kopaytma *= i;
// }
// console.log(kopaytma);

// // TUB sonlar topish masalasi.

// for (let i = 2; i <= 50; i++) {
//     let x
// }

// let count = 0;
// for (let i = 1; i <= 50; i++) {
//     count++;
//     if (count === 11) {
//         count = 0;
//         continue;
//     }
//     console.log(i);
    
// }

// for ( let i = 11; i <= 100; i++) {
//     let sum = 0;
//     for (let k = 1; k < i; k++) {
//         if (i % k === 0) sum += k;
//     }
//     if (i !== sum) continue;
//     console.log(i);
    
// }



// function xisobla(stop) {
//     let ty = 0;
//     let jy = 0;
//     for (let a= 1; a <=stop; a++) {
//         if (a % 2 === 1) ty + a;
//         else jy + a;
//     }
//     console.log(jy-ty);
// }

// xisobla(30)
// xisobla(20)
// xisobla(10)


// =============================================================================================
// 1//
function masala1_for() {
  for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) continue;
    console.log(i);
  }
}

function masala1_while() {
  let i = 1;
  while (i <= 20) {
    if (i % 5 === 0) {
      i++;
      continue;
    }
    console.log(i);
    i++;
  }
}

function masala1_doWhile() {
  let i = 1;
  do {
    if (i % 5 === 0) {
      i++;
      continue;
    }
    console.log(i);
    i++;
  } while (i <= 20);
}



// ===============================================
// 2//
function masala2_for() {
  for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
  }
}

function masala2_while() {
  let i = 1;
  while (i <= 30) {
    if (i % 2 !== 0) {
      i++;
      continue;
    }
    console.log(i);
    i++;
  }
}

function masala2_doWhile() {
  let i = 1;
  do {
    if (i % 2 !== 0) {
      i++;
      continue;
    }
    console.log(i);
    i++;
  } while (i <= 30);
}
// ==============================================
//  3 //
function masala3_for() {
  let sum = 0;
  for (let i = 1; i <= 50; i++) {
    if (i >= 10 && i <= 20) continue;
    sum += i;
  }
  console.log(sum);
}

function masala3_while() {
  let i = 1, sum = 0;
  while (i <= 50) {
    if (i >= 10 && i <= 20) {
      i++;
      continue;
    }
    sum += i;
    i++;
  }
  console.log(sum);
}

function masala3_doWhile() {
  let i = 1, sum = 0;
  do {
    if (i >= 10 && i <= 20) {
      i++;
      continue;
    }
    sum += i;
    i++;
  } while (i <= 50);
  console.log(sum);
}
// ==========================================================
//  4 //
function masala4_for() {
  for (let i = 1; i <= 100; i++) {
    let sum = Math.floor(i / 10) + (i % 10);
    if (sum === 5) continue;
    console.log(i);
  }
}
// ==========================================
//  5 //
function masala5_for() {
  let product = 1;
  for (let i = 1; i <= 40; i++) {
    if (i % 3 === 0 && i % 7 === 0) continue;
    product *= i;
  }
  console.log(product);
}
// ==================================================
// 6//
function masala6_for() {
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (!isPrime) continue;

    console.log(i);
  }
}
// =============================================
// 7//
function masala7_for() {
  for (let i = 1; i <= 50; i++) {
    if (i >= 10 && i % 11 === 0) continue;
    console.log(i);
  }
}
// ==============================
// 8//
function masala8_for() {
  let count = 0;

  for (let i = 1; i <= 100; i++) {
    let sum = 0;

    for (let j = 1; j < i; j++) {
      if (i % j === 0) sum += j;
    }

    if (sum !== i) continue;

    count++;
  }

  console.log(count);
}
// ==================================
// 9//
function masala9_for() {
  for (let i = 1; i <= 1000; i++) {
    let str = i.toString();
    let rev = str.split('').reverse().join('');

    if (str !== rev) continue;

    console.log(i);
  }
}
// ===============================
// 10 //
function masala10_for() {
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Son kiriting:"));

    if (num < 0) continue;

    sum += num;
  }

  console.log(sum);
}
// ===================================================
// 11//
function break1() {
  let i = 1;
  while (true) {
    if (i % 7 === 0) break;
    console.log(i);
    i++;
  }
}
// ==============================================
// 12//
function break2() {
  let sum = 0;
  let count = 0;
  let i = 1;

  while (true) {
    sum += i;
    count++;

    if (sum > 100) break;

    i++;
  }

  console.log("Sum:", sum);
  console.log("Count:", count);
}
// ==================================================
// 13//
function break3() {
  for (let i = 2; ; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (i > 50 && isPrime) {
      console.log(i);
      break;
    }
  }
}
// ==================================================
// 14//
function break4() {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Son kiriting:"));

    if (num === 0) break;

    sum += num;
    count++;
  }

  let avg = count === 0 ? 0 : sum / count;

  console.log("O‘rtacha:", avg);
}
// =====================================================
// 15//
function break5() {
  for (let i = 1; ; i++) {
    let kv = i * i;

    if (kv > 1000) {
      console.log(i, kv);
      break;
    }
  }
}
// =====================================
// 16//
function break6() {
  let N = Number(prompt("N ni kiriting:"));
  let found = false;

  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
      found = true;
      break;
    }
  }

  if (!found) console.log("Topilmadi");
}
// ============================================
// 17//
function break7() {
  for (let i = 100; i >= 1; i--) {
    if (i % 17 === 0) {
      console.log(i);
      break;
    }
    console.log(i);
  }
}
// ========================================
// 18 //
function break8() {
  let factorial = 1;

  for (let i = 1; ; i++) {
    factorial *= i;

    if (factorial > 5000) {
      console.log(i, factorial);
      break;
    }
  }
}
// ===========================
// 19 //
function break9() {
  let a = 1, b = 1;
  let count = 2;

  console.log(a);
  console.log(b);

  while (true) {
    let c = a + b;

    if (c > 200) {
      console.log(c);
      break;
    }

    console.log(c);
    count++;

    a = b;
    b = c;
  }

  console.log("Count:", count);
}
// =========================================
// 20//
function break10() {
  let N = Number(prompt("Son kiriting:"));

  while (N > 0) {
    let digit = N % 10;

    console.log(digit);

    if (digit === 5) {
      console.log("5 raqami uchratildi");
      break;
    }

    N = Math.floor(N / 10);
  }
}

// ===========================

masala1_for(30);
masala2_for(30);
masala3_for(30);
masala4_for(30);
masala5_for(30);
masala6_for(30);
masala7_for(30);
masala8_for(30);
masala9_for(30);
masala10_for(30);
// ==============================
break1(30);
break2(30);
break3(30);
break4(30);
break5(30);
break6(30);
break7(30);
break8(30);
break9(30);
break10(30);
