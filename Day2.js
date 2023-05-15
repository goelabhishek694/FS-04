let stream = "CSE";
let user = {
    name: 'Nidhi',
    age: 23,
    location: "Delhi",
    CSE: true,
    6:"hello"
}

// every key inside objects is stored in string irrespective of how we store them 

// let user = {
//   "name": "Nidhi",
//   "age": 23,
//   "location": "Delhi",
//   "CSE": true,
//   "6": "hello",
// };

console.log(user.name); //Nidhi
console.log(user["age"]); //23
console.log(user.stream); //ud
console.log(user[stream]); //true
console.log(user[1 + 2 + 3]); //hello


const a = 10; //primitive-> number,boolean,string arr,obj,func
a = 20;//error 
const arr = [1, 2, 3, 4];
arr.push(5);//[1,2,3,4,5]







