import React, { useState } from "react";



// main function 


function sevenBoom(arr){

  for(let i=0; i<arr.length; i++){
    if(arr[i]===7 || arr[i] % 10 === 7){
       return 'Boom'
    }
  }
  return 'not Boom!'

}


const App=()=>{

  // using Hooks
  const [inputNumber,setInputNumber] = useState("")
  const [outPut,setOutPut] = useState("")



  


   // clickable function 

  const handleClick=()=>{
        let result = inputNumber.split(",").map((x)=>parseInt(x.trim()))
        setOutPut(sevenBoom(result))
  }
  return(
    <div>
           <h1>Number Finding App : {outPut}</h1>
           <input type="text" value={inputNumber} onChange={(e)=>setInputNumber(e.target.value)}/>
           <button onClick={handleClick}>Calculate</button>
           
           
    </div>
  )
}


export default App