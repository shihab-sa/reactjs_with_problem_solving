import React, { useState } from "react";


// main function 

function firstArr(arr){
  return arr[0]
}


const App=()=>{



  const [inputValue,setInputValue] = useState("")
  const [output,setoUTpUT] = useState("")


  const handleChange=(e)=>{
      setInputValue(e.target.value)
  }


  const hnadleClick=()=>{
    let result = inputValue.split(",").map((x)=>Number(x.trim()))
    setoUTpUT(firstArr(result))
  }


  return(
    <div>
       <h1>Return the First Element in an Array</h1>
       <input type="" value={inputValue} onChange={handleChange} />
       <button onClick={hnadleClick}>Click</button>
       <h2>The Output is :{output}</h2>

    </div>
  )
}


export default App