let ball = 0;

//Mashina
let savol1 = prompt("Bu mashina kichkina, odam tashiydi. Bu nima?");
switch (savol1) {
  case "Damas":
    console.log("To'g'ri");
    ball++;
    break;
  case "Nexia":
  case "Cobalt":
    console.log("Xato");
    break;
  default:
    console.log("Noto'g'ri qiymat");
}

//Oyin
let savol2 = prompt("Bu oyinda odamlar urush qiladi. Bu qaysi oyin?");
switch (savol2) {
  case "Pubg":
    console.log("To'g'ri");
    ball++;
    break;
  case "Minecraft":
  case "Chess":
    console.log("Xato");
    break;
  default:
    console.log("Noto'g'ri qiymat");
}

//Uy
let savol3 = prompt("Bu joyda odamlar yashaydi. Bu nima?");
switch (savol3) {
  case "Uy":
    console.log("To'g'ri");
    ball++;
    break;
  case "Maktab":
  case "Dokon":
    console.log("Xato");
    break;
  default:
    console.log("Noto'g'ri qiymat");
}

//Notebook
let savol4 = prompt("Bu kotarib yuriladigan kompyuter turi. Bu nima?");
switch (savol4) {
  case "Notebook":
  case "Laptop":
    console.log("To'g'ri");
    ball++;
    break;
  case "Telefon":
  case "Planshet":
    console.log("Xato");
    break;
  default:
    console.log("Noto'g'ri qiymat");
}

//Dasturlash
let savol5 = prompt("Bu web sahifani harakatlantiradi. Bu qaysi til?");
switch (savol5) {
  case "JavaScript":
    console.log("To'g'ri");
    ball++;
    break;
  case "html":
  case "css":
    console.log("Xato");
    break;
  default:
    console.log("Noto'g'ri qiymat");
}


// ##############################


let savol = prompt("U mashina buxankaga oxshaydi, odam tashiydi va uzunroq. GM zavodiga tegishli. Bu qaysi avtomobil?");

switch (savol) {
  case "Nexia":
    console.log("Siz xato javob kiritdingiz");
    break;

  case "Damas":
    console.log("Siz togri javob kiritdingiz, javob Damas edi");
    break;

  case "Cobalt":
    console.log("Siz xato javob kiritdingiz");
    break;

  default:
    console.log("Siz mavjud bolmagan qiymat kiritdingiz");
}