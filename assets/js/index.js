
// Циклы и массивы + вычисляемые свойства


// 1. Создать массив в переменную  и после заполнить его числами последовательно от 5 до 15
// const arr = new Array ();
// for (let i = 5; i < 16; i++) {
//   arr.push(i)
// }
// console.log(arr)



// 2. Создать массив и заполнить его 10ю нечетными числами
// const arr = [];
// for (let i = 0; i < 20; i++) {
//     if (i % 2 == 0) continue 
//       arr.push(i)  
//   }
//   console.log(arr);



// 3. С помощью функции конструктора User создать 10 пользователей и поместить их в массив
// function User(name) {
//   this.name = name;
// }

// const userOne = new User('one');  
// const userTwo = new User('two'); 
// const userThree = new User('three'); 
// const userFour = new User('four'); 
// const userFive = new User('five'); 
// const userSix = new User('six'); 
// const userSeven = new User('seven'); 
// const userEigh = new User('eigh'); 
// const userNine = new User('nine'); 
// const userTen = new User('ten');

// const arr = [];
// arr.push(userOne, userTwo, userThree, userFour, userFive, userSix, userSeven, userEigh, userNine, userTen);

// console.log(arr);



// 4. * массив (с примитивными типами) перевести в строку с разделителем & или @
// var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
// console.log(boringAnimals.join(" & "));


// 5. * Переменную хранящей обьект преобразовать в массив
const obj = {
  name: 'Ivan',
  age: 43
}

const arr = Object.entries(obj);
const newArr = arr.flat();
console.log(newArr);


// const arr = Object.entries(obj);
// for (const [key, value] of arr){
//   console.log(`${key} : ${value}`);
// }


