import React, { useState } from "react";




// main function 


function myBugguCode(arr){

  let newArr = []
  for(let i=1; i<=arr; i++){
    newArr.push(i)
  }
   return newArr
}


const App=()=>{

  const [inputVale,setInputValue] = useState("")
  const [output,setOutput] = useState([])




  const handleClick=()=>{
    
    setOutput(myBugguCode(Number(inputVale)))
  }





  return(
    <div>
           <h1>Buggy Code Part 05</h1>
           <input type="text" value={inputVale} onChange={(e)=>setInputValue(e.target.value)}/>
           <button onClick={handleClick}>Click</button>
           <h2>The output is{JSON.stringify(output)}</h2>
    </div>
  )
}

export default App 