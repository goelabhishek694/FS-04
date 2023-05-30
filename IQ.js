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

function getWeatherData(url,cb){
  setTimeout(() => {
    const data = [10, 20, 30, 40, 50];
    cb(data);
  }, 3000);
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

function cb(data) {
    for (ele of data) {
      console.log(ele);
  }
}

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

let getJobPromise = new Promise(function (resolve, reject) {
    //process the data
    const data=[10,20,30,40,50]
    setTimeout(() => resolve(data), 2000);
})
console.log(getJobPromise);

//then catch
getJobPromise.then((res) => {
    for (ele of res) {
        console.log(ele);
    }
})
getJobPromise.catch((err) => {
    console.log(err);
})
//if my promise state has been fuflfilled then my sb function inside .then is called
//promise chaining 100->130
new Promise((resolve, reject) => {
  setTimeout(() => resolve(100), 2000);
})
  .then((res) => {
    let val = res + 10; //instantly resolved promise
    // //whenever i am returning a value from then , a new pomise is created and then returned
    // let addTenPromise = new Promise((resolve, reject) => {
    //   resolve(val); //instantly resolved promise
    // });
    // return addTenPromise;
      return val;
  })
  .then((res) => {
    let val = res + 10;
    let addTenPromise = new Promise((resolve, reject) => {
      resolve(val);
    });
    return addTenPromise;
  })
  .then((res) => {
    let val = res + 10;
    let addTenPromise = new Promise((resolve, reject) => {
      resolve(val);
    });
    return addTenPromise;
  })
  .then((res) => {
    console.log(res); //130
  })
  .catch((err) => console.log("error logged"));



let np=new Promise(function (resolve, reject) {
    setTimeout(() => resolve('hooray'), 2000);
})
  
np.then((res) => {
    console.log(res);
    return res+" yayya"
})

np.then((res) => {
    console.log(res);
    return res + " wowowowo"
})

np.then((res) => {
    console.log(res);
})

  //get weather api call data 
  //save it in db
  // console
  
  // promises used for network requests -> fetch
const API_KEY = "d8ab14f7e93c56cbe84562d28e8202bd";
let lat = '25.3176';
let lon = '82.9739';
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

let weatherData = fetch(url);
console.log(weatherData);
//when state is changed from pending to something else 
weatherData.then((data)=>{
    console.log(data);
    return data.json();
})
    .then((data) => {
        console.log(data);
    })

//
let username='itsShubhamShinde'
let githubAPI = `https://api.github.com/users/${username}`

let githubUserPromise = fetch(githubAPI);
githubUserPromise.then((res) => {
    return res.json()
    })
    .then((res) => {
        console.log(res);
        let img = document.createElement('img');
        let dpURL = res.avatar_url;
        img.src = dpURL;
        img.style.height = '300px';
        img.style.width = '300px';
        img.style.borderRadius = '50%';
        console.log(document);
        document.body.append(img);
        setTimeout(() => img.remove(), 4000);
})




//async await 


