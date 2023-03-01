// // Задача №1 Конвертация скоростей
// let speedKm = prompt("Введите скорость в км/ч", 200);
// let speedm = speedKm*(1000 / 3600);

// console.log(`${speedKm} км/ч соответствует ${speedm} м/c`);


// // Задача №2 Прямоугольник
// let sideA = prompt("Введите сторону a");
// let sideB = prompt("Введите сторону b");
// let sideC = prompt("Введите сторону c");

// let P = Number(sideA) + Number(sideB) + Number(sideC);
// let p = P/2;
// let S = Math.sqrt(p * (p-Number(sideA)) * (p-Number(sideB)) * (p-Number(sideC)));

// if (((Number(sideA) + Number(sideB)) >= Number(sideC)) && ((Number(sideA) + Number(sideC)) >= Number(sideB)) && ((Number(sideC) + Number(sideB)) >= Number(sideA))) {
//     console.log("Треугольник существует");
//     console.log("Периметр = " + P);
//     console.log("Площадь = " + S);
//     console.log("Соотношение = " + (Number(P)/Number(S)));

// } else{
//     console.log("Треугольник  не существует")
// }

// // Задача №3 Fizz-Buzz
// let ex3 = prompt("Введите число");

// for (let i = 0; i <= (Number(ex3)); i++ ) {
//     if (i%2 == 0){
//         console.log(i + " buzz");
//     } else if (i%5 == 0) {
//         console.log(i + " fizzbuzz");
//     } else if (isNaN(i)){
//            console.log("Введено не число");
//        }else {
//         console.log(i + " fizz");
//     }
// }

// // Задача №4 Елка к новому году

// const xMasTreeHeight = Number(prompt("Введите высоту елки", 15));

// let treeStr = "";
// for (let i = 0; i <= xMasTreeHeight; i++) {
//     let str = null;

//     if (i % 2 === 0) {
//         str = "#".repeat(i) + "\n";
//     } else {
//         str = "*".repeat(i) + "\n";
//     }

//     treeStr +=str;
// }
// treeStr += "||";
// console.log(treeStr);


// //Задача №5 Угадай число

//  let number = 5;
//  let userNumber = "";

    
//     do {
//         userNumber = prompt("Введите число от 1 до 10");

//         if (userNumber == number) {
//             console.log("Угадал");
//         } else if (userNumber > number) {
//             console.log("Ваше число больше");
//         } else if (userNumber < number) {
//             console.log("Ваше число меньше");
//         } else {
//             console.log("Введено не число");
//         }   
//     } while (userNumber != number);

// //Задача №6 Деление

// let userNumber1 = Number(prompt("Введите число n"));
// let userNumber2 = Number(prompt("Введите число x"));
// let userNumber3 = Number(prompt("Введите число y"));

// if ((userNumber1 % userNumber2 === 0) && (userNumber1 % userNumber3 === 0)) {
//     console.log("Число n нацело делится на x и y")
// } else{
//     console.log("Число n не делится нацело на x и y")
// }

//Задача №7 Кварталы

let month = Number(prompt("Введите месяц в виде цифры до 12"))
if (month>12){
    console.log("Неверное число")
} else{
    let kvartal = (parseInt((month + 2) / 3));

    console.log(kvartal + " квартал");
}












