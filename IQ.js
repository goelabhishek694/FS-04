// localStorage.setItem("cartoon", "Popeye");
// localStorage.setItem("hobby", "eats spinach");
// let ans = localStorage.getItem("cartoon");
// console.log(ans);
// // localStorage.removeItem("hobby");
// // localStorage.clear();
// let obj = {
//     nme:'Shaikh',
//     age: 23,
//     place:"delhi"
// }
// localStorage.setItem("userData", obj);
// localStorage.setItem("userData", JSON.stringify(obj));
// let userObj = localStorage.getItem("userData");
// console.log(userObj);
// console.log(typeof userObj);
// let parsedObj = JSON.parse(userObj);
// console.log(parsedObj);
// // let str="{nme:'Shaikh',age: 23,place:'delhi'}"
// //sesssion storage 
// //5mb-10mb
// // sessionStorage.setItem("cartoon", "TomnJerry");
// // sessionStorage.setItem("hobby", "fighting");
// // let ans1 = sessionStorage.getItem("cartoon");
// // console.log(ans1);
// let arr = [10, 20, 30, 40];
// sessionStorage.setItem('data', JSON.stringify(arr));
// let parsdArr = JSON.parse(sessionStorage.getItem('data'));
// console.log(parsdArr);
// // let a = JSON.parse('{ "a": "a98" }')
// // console.log(a);
// // //'098' '98a'


// //cookies 
// //4kb

// //callbacks-> as the name suggests , these functions are caled back upon fulfilling a certain condition 
// // a function which is present as an argument in another function is known as cb function 
// function isEven(num, cb) {
//     if (num % 2 == 0) {
//         cb(num)
//     }
// }
// function cb(num) {
//     console.log(num);
//     //perofrm some other action
// }

// //1. weather api call -> save that data in my db 

// function getWeatherData(url,cb){
//   setTimeout(() => {
//     const data = [10, 20, 30, 40, 50];
//     cb(data);
//   }, 3000);
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }

// function cb(data) {
//     for (ele of data) {
//       console.log(ele);
//   }
// }

// //callback hell -> dealing with multiple/nested callbacks 
// //drawbacks-> code is not readable, difficult to understand,it would be difficult to debug, maintain the code. 
// asyncFunction(function (err,res) {
//     if (err) console.log(err);
//     else {
//         asyncFunction2(function (err, res) {
//             if (err) console.log(err);
//             else {
//                 asyncFunction3(function (err, res) {
//                     if (err) console.log(err);
//                     else console.log('pyramid of doom has been formed')
//                 })
//             }
//         })
//     }
// })


// //promises
//                                         //executor
// let burgerPromise = new Promise(function (resolve, reject) {
//     //contains api call-> result
//     //resolve reject -> cb functions
//     //either resolve or reject
//     //resolve(value) -> if job i finished successfully with result 'value
//     //reject(err) -> if an error occurs with result error
// })
//initially my promise has state pending ,  then either it will be chnages to 'fulfilled when resolve is called  or 'rejected when reject method is called 
//result: initially undefined then chnages to value when resolve(value), or to error when reject(error)

//when new promise is created executor is called immediately

// let getJobPromise = new Promise(function (resolve, reject) {
//     //process the data
//     const data=[10,20,30,40,50]
//     setTimeout(() => resolve(data), 2000);
// })
// console.log(getJobPromise);

// //then catch
// getJobPromise.then((res) => {
//     for (ele of res) {
//         console.log(ele);
//     }
// })
// getJobPromise.catch((err) => {
//     console.log(err);
// })
// //if my promise state has been fuflfilled then my sb function inside .then is called
// //promise chaining 100->130
// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(100), 2000);
// })
//   .then((res) => {
//     let val = res + 10; //instantly resolved promise
//     // //whenever i am returning a value from then , a new pomise is created and then returned
//     // let addTenPromise = new Promise((resolve, reject) => {
//     //   resolve(val); //instantly resolved promise
//     // });
//     // return addTenPromise;
//       // return val;
//   })
//   .then((res) => {
//     let val = res + 10;
//     let addTenPromise = new Promise((resolve, reject) => {
//       resolve(val);
//     });
//     return addTenPromise;
//   })
//   .then((res) => {
//     let val = res + 10;
//     let addTenPromise = new Promise((resolve, reject) => {
//       resolve(val);
//     });
//     return addTenPromise;
//   })
//   .then((res) => {
//     console.log(res); //130
//   })
//   .catch((err) => console.log("error logged"));



// let np=new Promise(function (resolve, reject) {
//     setTimeout(() => resolve('hooray'), 2000);
// })
  
// np.then((res) => {
//     console.log(res);
//     return res+" yayya"
// })

// np.then((res) => {
//     console.log(res);
//     return res + " wowowowo"
// })

// np.then((res) => {
//     console.log(res);
// })

//   //get weather api call data 
//   //save it in db
//   // console
  
//   // promises used for network requests -> fetch
// const API_KEY = "d8ab14f7e93c56cbe84562d28e8202bd";
// let lat = '25.3176';
// let lon = '82.9739';
// let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

// let weatherData = fetch(url);
// console.log(weatherData);
// //when state is changed from pending to something else 
// weatherData.then((data)=>{
//     console.log(data);
//     return data.json();
// })
//     .then((data) => {
//         console.log(data);
//     })

// //
// let username='itsShubhamShinde'
// let githubAPI = `https://api.github.com/users/${username}`

// let githubUserPromise = fetch(githubAPI);
// githubUserPromise.then((res) => {
//     return res.json()
//     })
//     .then((res) => {
//         console.log(res);
//         let img = document.createElement('img');
//         let dpURL = res.avatar_url;
//         img.src = dpURL;
//         img.style.height = '300px';
//         img.style.width = '300px';
//         img.style.borderRadius = '50%';
//         console.log(document);
//         document.body.append(img);
//         setTimeout(() => img.remove(), 4000);
// })


// let isEvenPromise = new Promise(function (resolve, reject) {
//     function getVal() {
//         //[0 to 1)
//         let val = Math.floor(Math.random() * 100) //0 to 99
//         if (val % 2 == 0) resolve(val);
//         else reject(`received odd number ${val}`)
//     }
//     setTimeout(getVal, 4000);
// })

// //when state is changed from pending to something else 
//                             //fulfilled      //rejected
// isEvenPromise.then(
//     (val) => { console.log(val) },
//     (err) => { console.log(err) }
// )

// isEvenPromise.then(
//   (val) => {
//     console.log(val);
//   }
// );
// isEvenPromise.catch(
//     (err) => {
//   console.log(err);
// });


//promise API/methods
//promise.all -> it waits for all the promises to be executed in parallel. promise.all will only be resolved if all of the listed promises are resolved. all of the promises resolved with value will be placed in a result array in repective manner promises were placed. 
//if any of the listed promise gets rejected then the result of promise.all will be that error
//all or nothing 
//let p1 = new Promise((resolve, reject) => setTimeout(() => reject('err'), 4000));
// let p2 = new Promise((resolve, reject) => setTimeout(()=>reject('err'), 5000));
// let p3 = new Promise((resolve, reject) => setTimeout(()=>resolve(300), 6000));

// let allPromises = Promise.all([p1,p2,p3]);

// allPromises
// .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//10-12lpa
// let numPromise = Promise.all([p1, 10, 20]);
// numPromise.then(data => console.log(data)); //[100,10,20]

//Promise.allSettled 
//it is going to give me result of all the promises as soon as they are settled. i.e. if the promise has been resolved or rejected. 

// let p1 = new Promise((resolve, reject) => setTimeout(() => resolve(100), 4000));
// let p2 = new Promise((resolve, reject) => setTimeout(()=>reject('err'), 5000));
// let p3 = new Promise((resolve, reject) => setTimeout(()=>resolve(300), 6000));

// let allSettledPromises = Promise.allSettled([p1,p2,p3]);
// let failedPromise = [];
// allSettledPromises
//     .then((data) => {
//         console.log(data) //aray of objects
//         data.forEach(promiseObj => {
//             if (promiseObj.status == "fulfilled") {
//               console.log(promiseObj.value);
//             } else failedPromise.push(promiseObj.reason);
//         })
//         return failedPromise
//     })
//     .then(arr=>console.log(arr))



//Pomise.race-> similar to promise.all , but as the name suggests it is going to return the value of promise which gets resolved the fastest

// let p1 = new Promise((resolve, reject) => setTimeout(() => reject(200), 9000));
// let p2 = new Promise((resolve, reject) => setTimeout(()=>reject('err'), 1000));
// let p3 = new Promise((resolve, reject) => setTimeout(()=>resolve(300), 3000));

// let racePromises = Promise.race([p1,p2,p3]);

// racePromises
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));



//Promise.any-> like race but it waits for first fulfiled promise 

// let p1 = new Promise((resolve, reject) => setTimeout(() => resolve(200), 9000));
// let p2 = new Promise((resolve, reject) => setTimeout(()=>reject('err'), 1000));
// let p3 = new Promise((resolve, reject) => setTimeout(()=>resolve(300), 3000));

// let anyPromises = Promise.any([p1,p2,p3]);

// anyPromises.then((data) => console.log(data)).catch((err) => console.log(err));

//promise.reject 
// let p1 = Promise.reject('err');
// //promise.resolve
// let p2 = Promise.resolve("hello");


// let urls = [
//   "https://api.github123.com/users123/goelabhishek694",
//   "https://api.github.com/users/ramesh1234chaudhary",
//   "https://api.github.com/users/bhi2710",
//   "https://api.github.com/users/sonukumar77",
//   "https://api.github.com/users/saumya-bisht",
//   "https://api.github.com/users/venky123895",
//   "https://api.github.com/users/nidhirathour",
//   "https://api.github.com/users/debashish7862",
//   "https://api.github.com/users/rajnikant-raghav",
// ];

//go and get avatar url of all these users

// let promiseUrl = urls.map(url => fetch(url));

// let promiseData = Promise.allSettled(promiseUrl);
// let failedRequests = [];
// promiseData
//   .then((data) => {
//     console.log(data); //aray of objects
//     let userData = data.filter((promiseObj) => {
//       if (promiseObj.status == "fulfilled") {
//         return promiseObj;
//       } else failedRequests.push(promiseObj);
//     });
//     return userData;
//   })
//   .then((userData) => {
//     console.log(userData);
//     userData=userData.map((user) => user.value.json());
//     return Promise.all(userData);
//   })
//   .then((userData) => {
//     console.log(userData);
//     userData.map((user) => {
//       let img = document.createElement("img");
//       let url = user.avatar_url;
//       img.src = url;
//       img.style.height = "300px";
//       img.style.width = "300px";
//       img.style.borderRadius = "50%";
//       console.log(document);
//       document.body.append(img);
//       setTimeout(() => img.remove(), 4000);
//     });
//   })
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log(failedRequests);
//   });
//try catch finally 
//then catch finally 

//async await 

// async function foo() {
//   return 1;
// }

// let ans = foo();
// console.log(ans);
// ans.then(res => console.log(res));

// async function foo() {
//   let p = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(100), 2000);
//   });
//   let res = await p; // execution stops at that line and only resumes when promise has been settled 
//   console.log(res);
//   return res;
// }
//await keyword can only be used inside async function
//codeoputside the function would be executed as usual , it wont be affected from await keyword inside a function. only that function's execution is suspended in which await keyword is used. 

// let ans = foo();
// ans.then(res => console.log(res));

// let ans = await foo();
// console.log(ans); //await is only valid in async functions and the top level bodies of modules
// promise.then(res => console.log(res));


// let username='itsShubhamShinde'
// let githubAPI = `https://api.github.com/users/${username}`

// async function getAvatarURL(githubAPI) {
//   let req = await fetch(githubAPI);
//   let data = await req.json();
//   console.log(data);
//   let img = document.createElement("img");
//   let url = data.avatar_url;
//   img.src = url;
//   img.style.height = "300px";
//   img.style.width = "300px";
//   img.style.borderRadius = "50%";
//   console.log(document);
//   document.body.append(img);
//   setTimeout(() => img.remove(), 4000);
// }

// // getAvatarURL(githubAPI);

// //error handling in reject
// async function foo() {
//   try {
//     let p = new Promise((resolve, reject) => {
//     setTimeout(() => reject('error received'), 2000);
//     });
//     let res = await p; // execution stops at that line and only resumes when promise has been settled
//     console.log(res);
//     return res;
//   }
//   catch (err) {
//     console.log(err)
//   }
// }

// // foo()


// function fun() {
//   try {
//     const a=10;
//     a = 20;
//     return a
//   }
//   catch (err) {
//     console.log(err);
//     return err
//   }
// }

// let ans = fun()
// console.log(ans);

// for (let i = 0; i < 5; i++){
//   console.log(i);
// }

let userObj = {
  name: 'Abhishek',
  age: 22,
  address: {
    state: 'delhi',
    city:'new delhi',
    greet: function () {
      console.log('hello Geeksters')
    }
  }
}

console.log(userObj);
// let user2 = userObj;
// user2.name = 'Arbaz'
// console.log(user2);

//objects are passed by refereence. user2 is a reference of userObj

//shallow copy -> only the first level of the object is copied. deeper levels are referenced
//1. spread operator 
// const shallowObj = { ...userObj };
// shallowObj.name = 'Arbaz';
// shallowObj.address.state = 'Chennai';
// console.log(shallowObj);

//2. Object.assign() -> MDN  //Object.freeze()
// const shallowObj = Object.assign(userObj);
// shallowObj.name = 'Arbaz';
// shallowObj.address.state = 'Goa';
// console.log(shallowObj);

//deep copy
//when all the levels of keys are copied it is know as deep copy
const deepObj = JSON.parse(JSON.stringify(userObj));
//cons-> if your obj contains a function , then function cannot will not be copied
deepObj.name = "Arbaz";
deepObj.address.state = "Karnataka";
console.log(deepObj);


