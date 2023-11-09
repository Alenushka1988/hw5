// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

// let userInput = prompt("Enter a number");
// let number = parseFloat(userInput);
// let TenPersent = number * 0.1;
//  console.log(`10% of the number ${number} is: ${TenPersent}`);
//  Написать программу, которая получает два числа и выводит наименьшее
// let firstNumber = prompt("Введите первое чмсло");
// let secondNumber = prompt("Введите второе число");
// if(firstNumber < secondNumber){
    // console.log(`наименьшее число: ${firstNumber}`);
// }
// else if(secondNumber < firstNumber){
    // console.log(`Наименьшее число: ${secondNumber}`);
// }
// else{
    // console.log("Числа равны")
// }
//Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
let userInput = prompt("Введите число:");
 if(userInput < 100){
     console.log("Число меньше 100");
}
else if(userInput >100){
    console.log("Число больше 100");
}
else{
    console.log("Число равно 100")
}
//Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.
let userName = prompt("Введите ваше имя:");
let userAge = prompt("Введите ваш возраст:");
if(userAge >= 18) {
    console.log(`Hello, ${userName}`);
}
else{
    console.log(`Hi, ${userName}`);
}
