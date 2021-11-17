//console.log("Hellooo from file...")
//console.log(a);
// var a;
//var a = 10;
// let b;
//let b = 20;
//console.log(b); {
//var c = 10;
//console.log(c);
//let d = 20;
// console.log(d);
//}
//console.log(c);
//console.log(d);
//const a = "10";
//const b;
//a = 20;
//console.log(a);

//const myArr = {
//5000
//name: "Sheba",

//};
//myArr=5000
//myArr.name = "Vanu";
//myArr = {
//   name: "Aniket",
//};
//console.log(myArr);

//strings
//let myString1 = "abc@xyz.com";
//let myString2 = "Abc@xyz.com";

//console.log(myString1.toUpperCase() == myString2.toUpperCase());
//true

//for(let i = 0,i<myString1.length; i++);
//{
//   console.log(myString1(i)); //
//}

//let myString1 = " abcdafghj" ;

// const getRepeatedChars = (str) => {
//     const chars = {};
//     for (const char of str) {
//         chars[char] = (chars[char] || 0) + 1;
//     }
//     return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);
// }

// getRepeatedChars("aabbkdndiccoekdczufnrz"); // ["a", "b", "c", "d", "k", "n", "z"]




// let input = "abcdafgdbjcj";
// let output = "";
// for (let i = 0; i < input.length; i++) {
//     let count = 0;
//     for (let j = 0; j < input.length; j++) {
//         if (input[i] === input[j]) {
//             if (i < j) { break; }

//             count++;
//             if (count > 1) {
//                 output = output + input[i];
//                 break;
//             }
//         }
//     }
// }

// console.log(output);

//Array
//let myArr = [1, 2, 3, 4, 5, "my String", ["a", "b"]];

// let myArr = [1, 2, 3, 4, 5];
// let myArr1 = [1, 2, 3, 4, 5];
// let isSame = true;
// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] !== myArr1[i]) {
//         isSame = false;
//         break;
//     }
// }
// console.log(isSame); //True


// function reverseString(str) {

//     var newString = "India is my country";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i]; // or newString = newString + str[i];
//     }
//     return newString; // "olleh"
// }

// reverseString('');
// 

// Fuctions:
// console.log(addNumbers(10, 20));
// console.log(addnumbers);

// function addNumbers(number1, number2) {
//     return number1 + number2;
// }
// const addNumbers2 = function(number1, number2) {
//     return number1 + number2;
// };
// console.log(addNumbers2(10, 20));
// console.log(addNumbers2);

// const addNumbersArrow = (number1, number2) => {
//     return number1 + number2;
// }
// console.log(addNumbersArrow(10, 20));
// console.log(addNumbersArrow);

// //this:
// const myObject = {
//     //1000
//     name: "sheba",
//     getName: function() {
//         return this.name;
//     },
// };

// const myNewObject = {
//     //2000
//     name: "Sheba John",
// };
// //myObject.getName-> 1000
// //newGetName-> 2000
// const newGetName = myObject.getName.bind(myNewObject);
// console.log(myObject.getName());
// console.log(newGetName());

//Constructor Function

// function Person(name, age) {
//     if (!new.target) {
//         return new Person(name, age);
//     }
//     this.name = name;
//     this.age = age;
// }
// const personObject = new Person("Sheba", 24);
// const personObject1 = Person("Sheba", 24);
// console.log(personObject);
// console.log(personObject1);

// //Destructuring
// const myArr = [1, 2, 3, 4];
// // const a = myArr[0];
// // const b = myArr[1];
// // const c = myArr[2];
// // const d = myArr[3];
// const [a, c, b, d] = myArr; //sequence is very important
// console.log(a, b, c, d);
// const myObject = {
//     name: "Ankur",
//     age: 29,
// };
// // const name = myObject.name;
// // const age = myObject.age;
// const { age, name } = myObject; //sequence is not important
// console.log(name, age);


// array:
// let a1 = [1, 2, 3, 4, 5, [6, 7, 8, 9]];
// let a2 = [1, 2, 3, 4, 5, [6, 7, 8, 9]];
// let x = typeof a1;
// let y = [];
// let z = typeof y;

// let isSame = true;
// console.log(x);
// for (let i = 0; i < a1.length; i++) {
//     if (x === z) {
//         for (let j = 0; j < a1[i].length; j++) {
//             if (a1[i][j] !== a2[i][j]) {
//                 isSame = false;
//                 console.log(isSame);

//                 break;
//             }
//             console.log(a1[i][j], a2[i][j]);
//         }
//         if (isSame === false) {
//             break;
//             console.log(isSame);
//         }
//     }

//     if (a1[i] !== a2[i]) {
//         isSame = false;
//         console.log(isSame);
//         break;
//     }
//     console.log(a1[i], a2[i]);
//     console.log(isSame); //true
// }

// //Spread Operator
// const myArr = [1, 2, 3, 4, 5]; //1000
// const myArrNew = []; //2000 //old way
// // const myArrNew = [...myArr]; //2000
// for (let i = 0; i < myArr.length; i++) {
//     myArrNew.push(myArr[i]);
// }
// console.log(...myArr); //same as writing console.log(1, 2, 3, 4, 5); //new way
// console.log(myArr);
// console.log(myArrNew);
// myArr.push(6);
// console.log(myArr);
// console.log(myArrNew);

//...next prog

// const myObject = {
//   name : "vanz",
//   age : 24,
// };

// const myNewObject = {... myObject} ;
// console.log(myObject);
// console.log(myNewObject);
// myObject.name = "vanz";
// console.log(myObject);
// console.log(myNewObject);


// Rest
function addNumbers(...args) {
    //const args = [10, 20, 30, 40]; //internally
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];

    }
    return result;
}
console.log(addNumbers(10, 20, 30, 40));