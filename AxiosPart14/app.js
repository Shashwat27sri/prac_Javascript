// using Axios in place of fetch
// axios provide us direct res in json format   we have 2 methods get and post in axios also

// let url = "https://catfact.ninja/fact"

// async function getFact(){
//   try{
//     let res = await axios.get(url)        //first API call 
//     console.log(res.data.fact)  


//     let res2 = await axios.get(url)       //second API call 
//     console.log(res2.data.fact)  
//   }catch(e){
//     console.log ("Error - ",e);
//   }
  
// }
// getFact();







// 1
// eventLsitener with axios





// let btn = document.querySelector("button")
// let p =document.querySelector("p")
// btn.addEventListener("click", async ()=>{                //as the function return a promise because it is async in nature we also need to make this callback function as async
//   let result = await getFact()
//   p.innerText= result;
// })




// let url = "https://catfact.ninja/fact"

// async function getFact(){
//   try{
//     let res = await axios.get(url)        //first API call 
//     return res.data.fact  

//   }catch(e){
//     console.log ("Error - ",e);
//   }
  
// }




// 2

// DogPicture API


// let url = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");
// let image = document.querySelector("img")
// btn.addEventListener("click",async ()=>{
//   let result = await getImage();
//   image.setAttribute("src",result);
//   console.log(result)
// })




// async function getImage(){
//   try{
//     let res = await axios.get(url);
//     return res.data.message;
//   }catch(e){
//     return "/";
//   }
// }





// 3
// sending header through Axios


// let url ="https://icanhazdadjoke.com/";

// async function getJokes(){
//   try{
//     const config = {headers : {Accept: "application/json"} };
//     let res = await axios.get(url , config);
//     console.log(res.data);
//   }catch(e){
//     console.log(e);
//   }
// }




// 4
// updating query Strings 


let url ="http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button")

btn.addEventListener("click", async ()=>{
  let country=document.querySelector("input").value;
  
  let clgArr =await getCollege(country);
  // console.log (colleges)


  show(clgArr)

})

function show(clgArr){

  let list = document.querySelector("#list")
  list.innerText="";
  for (clg of clgArr){
    console.log(clg.name)

    let li = document.createElement("li");
    li.innerText = clg.name;
    list.appendChild(li);
  }
}



async function getCollege(country){
  try{
    let res = await axios.get(url + country);
    return res.data;
  }catch(e){
    console.log ("error",e);
    return [];
  }  
}