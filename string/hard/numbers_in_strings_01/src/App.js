import React, { useState } from "react";



// main function 


function numbersInStrings(arr){
  let newArr = []

  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
       if(arr[i][j] >= "0" && arr[i][j] <= "9"){
         newArr.push(arr[i])
       }
    }
  }

  return newArr

}

const App=()=>{
  const [inputNumber,setInputNumber] = useState("")
  const [outPut,setOutput] = useState("")


  // on change function 

  const handleChange=(e)=>{
    setInputNumber(e.target.value)
  }

  // click able function 

  const handleClick=()=>{
       let data = inputNumber.split(",").map((x)=>(x.trim()))
       setOutput(numbersInStrings(data))
  }
  return(
    <div>
         <h1>Numbers in Strings  { JSON.stringify(outPut) }</h1>
         <input type="text" value={inputNumber} onChange={handleChange} />
         <button onClick={handleClick}>Click</button>
         
    </div>
  )
}


export default App