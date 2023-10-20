

// let h1 = document.querySelector("h1")
// function changeColor(color,delay,nextChangeColor){
//   setTimeout(()=>{
//     h1.style.color=color;
//     if(nextChangeColor){ nextChangeColor()};
//   },delay);
// }


// // callback hell
// changeColor("red",1000,()=>{
//   changeColor("blue",1000,()=>{
//     changeColor("green",1000,()=>{
//       changeColor("yellow",1000,()=>{
//         changeColor("orange",1000)
//       })
//     })
//   })
// })







// eg- for saving data into DB  
// setting up for promises 

// function savetoDB(data,success,failure){
//   let internetSpeed = Math.floor(Math.random()*10)+1;
//   if (internetSpeed > 4){
//     success();
//   }else{
//     failure();
//   }
// }

// // function call

// savetoDB(

//   "shashwat srivastava",             //data


//   ()=>{                                             //success callback 
//     console.log("success: your data is saved");
    
//     savetoDB(                                               //if the above data got stored than store the second data also 
//       "anwesha srivastava",

//       ()=> {
//         console.log("success2: your data is saved");
        
//         savetoDB(                                               //if the above data got stored than store the second data also 
//           "rajesh srivastava",

//           ()=> {
//             console.log("success3: your data is saved");
//           },

//           ()=>{
//             console.log("failure3: weak connection, data not saved")
//           }
//         )
//       },


//       ()=>{
//         console.log("failure2: weak connection, data not saved")
//       }
//     )
//   },



//   ()=>{                                             //failure callback
//     console.log("failure: weak connection, data not saved")
//   }

// )





// methods- .then() & .catch(), promise chaining, result and error


// function savetoDB(data){
//   return new Promise((resolve,reject)=>{
//     let internetSpeed = Math.floor(Math.random()*10)+1
//     if (internetSpeed > 4 ){
//       resolve("Success: data is saved")            //these are the return values 

//     }else{
//       reject("Failure: week connection")           //there are the error value of the promise
//     }
//   });
// }


// //promise chaining

// savetoDB("apna college").then((result)=>{     //this result parameter is the return value of the promise 
//   console.log("data 1 saved");
//   console.log("result of promise:", result);
//   return savetoDB("shashwat");
// })
// .then((result)=>{
//   console.log("data 2 saved")
//   console.log("result of promise:", result);
//   return savetoDB("anwesha srivastava")

// })
// .then((result)=>{
//   console.log("data 3 saved")
//   console.log("result of promise:", result);
// })
// .catch((error)=>{
//   console.log("promise was rejected")
//   console.log("error of promise:", error);
// })







// refactoring old color callback hell


// let h1 = document.querySelector("h1")

// function changeColor(color,delay){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       h1.style.color=color;
//       resolve("color changed")
//     },delay);
//   });
// }



// changeColor("red",1000).then((result)=>{
//   console.log("first interval done:",result)
//   return changeColor("blue",1000)
// })
// .then((result)=>{
//   console.log("second interval done:",result)
//   return changeColor("green",1000)
// })
// .then((result)=>{
//   console.log("third interval done:", result)
//   return changeColor("purple",1000)
// })
// .then((result)=>{
//   console.log("fifth interval done:",result)
//   return changeColor("yellow",1000)
// })
// .then((result)=>{
//   console.log("sixth interval done:", result)
//   return changeColor("orange",1000)
// })






// async function 

// async function greet(){
//   // abc.abc();
//   // throw "some random error"
//   return "hello";
// }


// greet().then((result)=>{
//   console.log (" promise was resolved:",result)
// })
// .catch((error)=>{
//   console.log ("promise rejected:",error)
// })



// arrow async function
let greet = async ()=>{
  return 5;
}

greet().then((result)=>{
  console.log("promise resolved:", result);
})