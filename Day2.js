// let stream = "CSE";
// let user = {
//     name: 'Nidhi',
//     age: 23,
//     location: "Delhi",
//     CSE: true,
//     6:"hello"
// }

// every key inside objects is stored in string irrespective of how we store them 

// let user = {
//   "name": "Nidhi",
//   "age": 23,
//   "location": "Delhi",
//   "CSE": true,
//   "6": "hello",
// };

// console.log(user.name); //Nidhi
// console.log(user["age"]); //23
// console.log(user.stream); //ud
// console.log(user[stream]); //true
// console.log(user[1 + 2 + 3]); //hello


// const a = 10; //primitive-> number,boolean,string arr,obj,func
// a = 20;//error 
// const arr = [1, 2, 3, 4];
// arr.push(5);//[1,2,3,4,5]


// var j = 10;
// var printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (j === 10) {
//     printNumTwo = function () {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());


// let a = 10;
// function outer() {
//     let a = 100;
//     function inner() {
//         console.log(a)
//     }

//     return inner;
// }

// let ans = outer();
// ans();


// function outermost() {
//     var b = 10;
//     function inner() {
//         var a = 90;
//         function innermost() {
//             console.log(a,b);
//         }
//         innermost();
//     }
//     inner();
// }
// outermost();


//hoisting-> variable declration and functions are moved to the top. actually this just for understanding, but in reality memory is allocted from top to bottom in phase 1 , then in phase 2 code is executed. 
// console.log(a); //ud
// b(); //hello
// // c(); //error
// var a = 10;
// console.log(a);//10
// function b() {
//     console.log("hello");
// }
// //function expression
// var c = function () {
//     console.log("bye");
// }
// c(); //bye

// console.log(d); //reference error-> cannot access d before initialization
// let d; //tdz-> time difference taken by my variable when it is declared and initialized . 
// d = 10;
// console.log(d); //10

//type error -> assignment to constant variable 
// const b = 1000;
// b = 10;

//syntax error

//arrow functions
// let evenNum = (arr) => {
//     //do something
// }

// let evenNum = arr => {
//   //do something
// };

// let evenNum = (arr,a) => {
//   //do something
// };

// let print = name => console.log(name);
// print("Abhishek");

//hoisting difference
//they do not have their own 'this'


//default parameter-> default parameter kicks in when the argument is not specified (it is undefined)
// function cricketerInfo(name, age,country='India') { 
//     console.log('Hi my name is '+name+' my age is '+age+'. I am from '+country)
// }

// cricketerInfo('Kapil Dev', 60, "USA");
// cricketerInfo('Ms Dhoni', 40);

//rest parameters
// function print(...arr){
//     arr.forEach(cb);
//     function cb(ele) {
//         console.log(ele);
//     }
//}

// print("hi",'how','are') //arg
// print("hi",'how','are','you')
// print("hi",'how','are','1',2,3,4,5)
// print("hi", 'how', 'are', '1', 2, 3, 4, 5, 6, 7, 8, 9)

//we do know how many arguments are there in the function, it is going to be dynamic. so we use rest parameter for this 

// func def -> parameters
// func call-> args


//slice [start,end) -> //my fruits arr is not changed
// const fruits = ['kiwi', 'papaya', 'banana', 'mango', 'apple'];
// console.log(fruits.slice(1, 4));  //['papaya', 'banana', 'mango']
// console.log(fruits.slice(2,5)); //['banana', 'mango', 'apple']
// console.log(fruits.slice(-3)); //['mango', 'apple']
// console.log(fruits.slice(3)); //['mango', 'apple']
// console.log(fruits.slice(1, -2)); //['papaya', 'banana']
// console.log(fruits.slice()); //['kiwi', 'papaya', 'banana', 'mango', 'apple']
// console.log(fruits); //['kiwi', 'papaya', 'banana', 'mango', 'apple']

// function slice(arr, s, e) {
//     let arr = [];
//     if (!s && !e) {
//         s = 0;
//         e = arr.length;
//     }
//     if (!e) {
//         e = arr.length;
//     }
//     if (s<0) {
//         s = s + arr.length;
//     }
//     if (e < 0) {
//          e = e + arr.length;
//     }
//     if (s > 0 && e > 0) {
//         // loop and push s to e-1
//     }
// }

//splice -> it changes contents of array by removig/replacing/adding elements
//syntax
// arr.splice(start, num_of_ele_to_delete, item1_to_add, item2_to_add, ...itemn_to_add);

// const cars = ["mustang", "G-Wagon", "Range Rover", "GTR", "Tesla", "Bugatti"];

// // console.log(cars.splice(1)); -> start removes the elements from original array 
// //removing from start to end
// // let removedArr = cars.splice(1);
// // console.log(removedArr);

// //controlled removing 
// // let removedSUV = cars.splice(1, 2);
// // console.log(removedSUV);

// //adding ele in cars arr
// // let removedSUVAddedSportsCar = cars.splice(1, 2, 'Aventador','Maseratti');
// // console.log(removedSUVAddedSportsCar);
// // console.log(cars);

// //only adding
// // let addedCars = cars.splice(3, 0, 'Porsche');
// // console.log(addedCars); //[]
// // console.log(cars); //['mustang','G-Wagon','Range Rover','Porsche','GTR','Tesla','Bugatti']


// // let ans = cars.indexOf("GTR");
// // console.log(ans);


// // Return Largest Numbers in Arrays
// //-1<-ve<-2000
// // function largestOfFour(twoDArr) {
// //     let largestNum;
// //     let arr = [];
// //     for (let idx = 0; idx < twoDArr.length; idx++){
// //         largestNum = twoDArr[idx][0];
// //         for (let subIdx = 1; subIdx < twoDArr[idx].length; subIdx++){
// //             largestNum = Math.max(largestNum, twoDArr[idx][subIdx]);
// //         }
// //         arr.push(largestNum);
// //         // largestNum = -1;
// //     }
// //     return arr;
// // }

// //map/forEach and reduce 

// function largestOfFour(twoDArr) {
//     return twoDArr.forEach(arr => {
//         return arr.reduce((acc, cur) => {
//             return cur>acc?cur:acc
//         })
//     })
// }



// let ans=largestOfFour([
//   [13, 27, 18, 26],
//   [4, 5, 1, 3],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 11],
// ]);

// console.log(ans);


// function confirmEnding(str, target) {
//     return str.slice(-target.length) === target;
// }

// function confirmEnding(str, target) {
//     let start = str.length - target.length;
//     let subStr=str.substring(start);
//   return subStr === target;
// }

// confirmEnding("Bastian", "ian");

// function repeatStringNumTimes(str, num) {
//     if (num <= 0) return "";
//     let ans=''
//     for (let i = 0; i < num; i++){
//         ans += str;
//     }
//   return ans;
// }

// function repeatStringNumTimes(str, num) {
// if (num <= 0) return "";
//   let ans = [];
//   for (let i = 0; i < num; i++) {
//     ans.push(str);
//   }
//   return ans.join('');
// }

// function repeatStringNumTimes(str, num) {
//     if(num<=0) return ''
//     return Array(num).fill(str).join("");
// }

// //recursion
// function repeatStringNumTimes(str, num) {
//     let res = '';
//     helper(res, str, num);
//     return res;
// }

// function helper(res, str, num) {
//     if(num<1) return ''
//     res = res + str;
//     helper(res, str, num-1);
// }

// repeatStringNumTimes("abc", 3);

// function truncateString(str, num) {
//     if (num >= str.length) return str;
//   return str.slice(0,num)+'...';
// }

// function truncateString(str, num) {
//     //subsring
// }
// truncateString("A-tisket a-tasket A green and yellow basket", 8);

// let arr = [10, 20, 30, 40, 50, 60];
// //if atleast one ele passes the test it returns true
// arr.some(evenTest);
// function test(ele) {
//     return ele % 2 == 0;
// }

// //if all of the ele passes the test it returns true
// arr.every(greaterThan9);
// function test(ele) {
//     return ele>9;
// }

// function findElement(arr, func) {
//   let ans = arr.filter(func);
//   return ans[0];
// }

// function findElement(arr, func) {
//     return arr.find(func)
// }

// findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// function titleCase(str) {
// //toLowerCase
//   str = str.toLowerCase();
//   //split
//   let strArr=str.split(' ');
//   //for
//   for (let idx = 0; idx < strArr.length; idx++){
//     let word = strArr[idx];
//     let firstLetter = word[0].toUpperCase();
//     let restOfWord = word.slice(1);
//     strArr[idx] = firstLetter + restOfWord;
//   }
//   //map/forEach
//   return strArr.join(' ');
// }

// function titleCase(str) {
//   //toLowerCase
//   str = str.toLowerCase();
//   //split
//   let strArr = str.split(" ");
//   //for
//   strArr.map((word) => {
//     let firstLetter = word[0].toUpperCase();
//     let restOfWord = word.slice(1);
//     strArr[idx] = firstLetter + restOfWord;
//   })
    
  
//   //map
//   return strArr.join(" ");
// }

// function titleCase(str) {
//   //toLowerCase
//   str = str.toLowerCase();
//   //split
//   let strArr = str.split(" ");
//   let ans = '';
//   //for
//   strArr.forEach((word) => {
//     let firstLetter = word[0].toUpperCase();
//     let restOfWord = word.slice(1);
//     ans = ans+firstLetter + restOfWord + ' ';
//   });

//   //map
//   return ans.trim();
// }

// let ans1 = titleCase("I'm a little tea pot");
// console.log(ans1);

// function frankenSplice(arr1, arr2, n) {
//   let newArr = arr2.slice();
//   console.log(newArr);
//   newArr.splice(n, 0, ...arr1);
//   console.log(newArr);
//   return newArr;
// }

// function frankenSplice(arr1, arr2, n) {
//   let leftArr = arr2.slice(0,n);
//   let rightArr = arr2.slice(n);
//   let newArr = [...leftArr, ...arr1, ...rightArr];
//   // console.log(newArr);
//   // newArr.splice(n, 0, ...arr1);
//   // console.log(newArr);
//   return newArr;
// }

// frankenSplice([1, 2, 3], [4, 5, 6], 1);

// function bouncer(arr) {
//   return arr.filter(ele=>Boolean(ele))
// }

// console.log(bouncer([7, "ate", "", false, 9]));


// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] >= num) {
//       return i;
//     }
//   }
//   return arr.length;
// }

// function getIndexToIns(arr, num) {
//   return arr.filter(ele=>ele<num).length //[10,20,30]
// }

// function getIndexToIns(arr, num) {
//   arr.push(num);
//   arr.sort((a, b) => a - b);
//   return arr.indexOf(num);
// }

// getIndexToIns([10, 20, 30, 40, 50], 35);


// function mutation(arr) {
//   let testString = arr[0].toLowerCase();
//   let targetString = arr[1].toLowerCase();
//   for (let i = 0; i < targetString.length; i++){
//     let char = targetString[i];
//     if (testString.indexOf(char) == -1) return false;
//   }
//   return true;
// }

// mutation(["hello", "hey"]);

// function sumAll(arr) {
//   let s = Math.min(arr[0], arr[1]); //1
//   let b = Math.max(arr[0], arr[1]); //4
//   let sum = 0; //10
//   for (let i = s; i <= b; i++){
//     sum = sum + i;
//   }
//   return sum;
// }

// function sumAll(arr) {
//   let newArr = [];
//   let s = Math.min(arr[0], arr[1]); //1
//   let b = Math.max(arr[0], arr[1]); //4
//   for (let i = s; i <= b; i++) {
//     newArr.push(i);
//   }

//   return newArr.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0)
// }

// sumAll([1, 4]);




//map-> traverse + returns array of the same length as of original array always
// let abc = [1, 2, 3, 4];
// abc.map(ele => {
//   return ele * 10;
// }
//   return ans;

//forEach->traverse only, does not return anything 
  // let ans = [];
  // abc.forEach(ele => {
  //   abc.push(ele * 10);
  //   })

  // return ans;

//HOF-> when function accepts another function as an argument then that function is known as HOF
//conveert dollar to inr
let bankStatement = [15, 22, 32, 42,-12,-13];
let bankStatementInINR = bankStatement.map((numInDollar) => {
  return numInDollar * 85;
});
console.log(bankStatementInINR);
console.log(bankStatement);

//save the payments in db 
let res = bankStatement.forEach((num) => {
  console.log(num); //db.save(num)
  return num * 85;
});
console.log(res);

//total in bank account
let totalBalanceInDollar = bankStatement.reduce((acc, curr) => acc + curr);
console.log(totalBalanceInDollar);

let totalBalanceInINR = bankStatementInINR.reduce((acc, curr) => acc + curr);
console.log(totalBalanceInINR);

let numArr = [1, 2, 3, 4, 5];

// //sum of array 
// let sum = 0;
// for (let i = 0; i < numArr.length; i++){
//   sum = sum + numArr[i];
// }
// console.log(sum);
// //accumulator=>arr[0], currrent value in arr=>arr[1]
// let ans = numArr.reduce((acc, curr) => {
//   console.log('acc -> ', acc);
//   console.log('curr -> ', curr);
//   acc = acc + curr
//   return acc;
// });
// console.log(ans);

// //accumulator=>initial value, currrent value in arr=>arr[0]
// let ans1 = numArr.reduce((acc, curr) => {
//   console.log("acc -> ", acc);
//   console.log("curr -> ", curr);
//   acc = acc + curr;
//   return acc;
// }, 100); //initial value of acc
// console.log(ans1);

let arrOfObj = [{ x: 10 }, { x: 20 }, { x: 30 }] //{x:60}
let val=arrOfObj.reduce((acc, curr) => {
  acc['x'] = curr['x'];
  if (acc['x']) {
    acc['x']=acc['x']+curr['x']
  }
  return acc;
},{})
console.log(val);

function diffArray(arr1, arr2) {
  const newArr = [];
  for (let ele of arr1) {
    if (!arr2.includes(ele)) newArr.push(ele);
  }
  for (let ele of arr2) {
    if (!arr1.includes(ele)) newArr.push(ele);
  }
  // console.log(newArr);
  return newArr;
}

function diffArray(arr1, arr2) {
  let newArr = [];
  let a=arr1.filter(ele=>!arr2.includes(ele))
  let b = arr2.filter(ele => !arr1.includes(ele))
  newArr = [...a, ...b];
  // console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function destroyer(...arr) {
  let [repeatedArr, ...args] = arr;
  console.log(repeatedArr);
  console.log(args);
  args.forEach((ele) => {
    repeatedArr.filter((num) => num !== ele);
  });
  return repeatedArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function whatIsInAName(collection, source) {
  let res=[]
  res=collection.filter(obj => {
    for (let key in source) {
      // console.log(key);
      // console.log(source[key]);
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  })
  return res;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+|_+/g, "-")
    .toLowerCase();
}

spinalCase("This Is Spinal Tap");


function translatePigLatin(str) {
  let vowelArr = ["a", "e", "i", "o", "u"];
  let partitionIdx = str.length;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowelArr.includes(char)) {
      partitionIdx = i;
      break;
    }
  }
  let vowelStr = str.slice(partitionIdx); //eaker
  let consStr = str.slice(0, partitionIdx); //sp
  return partitionIdx == 0 ? str + "way" : vowelStr + consStr + "ay";
}

translatePigLatin("consonant");

(() => {
  console.log("hello")
})();







