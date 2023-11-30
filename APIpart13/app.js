// accessing data from JSON file


// let jsonRes = '{"fact":"A cat will tremble or shiver when it is in extreme pain.","length":56}'

// let jsonObj = JSON.parse(jsonRes)           //convert string to object 
// // console.log(jsonObj);
// // console.log(jsonObj.fact)



// let jsonStr = JSON.stringify(jsonObj)

// console.log(jsonStr)





// first API request
// let url = "https://catfact.ninja/fact";

// fetch(url).then((res)=>{
//   console.log(res)
//   res.json().then((data)=>{                  //res.json()     -  for pasing the data into readable form
//     console.log(data);
//   })
// })
// .catch((err)=>{
//   console.log("Error - ",err)
// })


//refactoring this code

// let  url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res)=>{
//     console.log(res);
//     return res.json();
//   })
//   .then((data)=>{
//     console.log(data.fact)
//   })
//   .catch((err)=>{
//     console.log("Error",err)
//   })




// second request

// let body = document.querySelector("body");
// let url = "https://catfact.ninja/fact"
// fetch(url)                             //first request
//   .then((res)=>{
//     return res.json();
//   })
//   .then((data)=>{
//     console.log("data 1 =", data.fact);
//     return fetch(url)                   //second request 
//   })
//     .then((res)=>{
//       return res.json()
//     })
//     .then((data2)=>{

//       let box = document.createElement("p")                          // printing data on screen 
//       box.innerText=data2.fact;
//       body.appendChild(box) 



//       // console.log("data2 = ",data2.fact);
//       return fetch(url)                                            // third request
//     })
//       .then((res)=>{
//         return res.json()
//       })
//       .then((data3)=>{

//         let box = document.createElement("p")                          // printing data on screen 
//         box.innerText=data3.fact;
//         body.appendChild(box) 



//         // console.log("data2 = ",data2.fact);
        
//       })
//   .catch((err)=>{
//     console.log("Error - ",err)
//   })







// using fetch with async-await 


let url = "https://catfact.ninja/fact"

async function getFact(){
  let res = await fetch(url)        //first API call
  let data = await res.json()
  console.log (data.fact)

  let res2 = await fetch(url)       //second API call
  let data2 = await res2.json()
  console.log (data2.fact)
}
getFact()