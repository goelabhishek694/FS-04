var user = {
  name: "Abhishek",
  age: 90,
  greet: function () {
    console.log("hello");
  },
};

user.age;
user.greet();

let myFn = user.greet;
myFn();

function fun() {
  console.log("hello");
//   return "hello";
//   return undefined; //js by default returns undefined if nothing is returned from a function 
}

var a=fun();
console.log(a)
// console.log(fun());

for (var i = 0; i < 10; i++){
    console.log(i);
}

console.log(i); //10


