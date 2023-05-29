localStorage.setItem("cartoon", "Popeye");
localStorage.setItem("hobby", "eats spinach");
let ans = localStorage.getItem("cartoon");
console.log(ans);
// localStorage.removeItem("hobby");
// localStorage.clear();
let obj = {
    nme:'Shaikh',
    age: 23,
    place:"delhi"
}
localStorage.setItem("userData", obj);
localStorage.setItem("userData", JSON.stringify(obj));
let userObj = localStorage.getItem("userData");
console.log(userObj);
console.log(typeof userObj);
let parsedObj = JSON.parse(userObj);
console.log(parsedObj);
// let str="{nme:'Shaikh',age: 23,place:'delhi'}"
//sesssion storage 
//5mb-10mb
// sessionStorage.setItem("cartoon", "TomnJerry");
// sessionStorage.setItem("hobby", "fighting");
// let ans1 = sessionStorage.getItem("cartoon");
// console.log(ans1);
let arr = [10, 20, 30, 40];
sessionStorage.setItem('data', JSON.stringify(arr));
let parsdArr = JSON.parse(sessionStorage.getItem('data'));
console.log(parsdArr);
// let a = JSON.parse('{ "a": "a98" }')
// console.log(a);
// //'098' '98a'


//cookies 
//4kb


//promises
let burgerPromise = new Promise(function (resolve, reject) {
    //executor()
})

//initially my promise has state pending ,  then either it will be chnages to 'fulfilled when resolve is called  or 'rejected when reject method is called 
//result: initially undefined then chnages to value when resolve(value), or to error when reject(error)