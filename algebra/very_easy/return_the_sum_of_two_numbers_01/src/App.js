import React, { useState } from "react";



const App=()=>{


  const [num1,setNum] = useState("")
  const [num2,setNum2] = useState("")
  const [result,setResult] = useState("")


  // onclick function 

  const handleClick=()=>{
    let result = Number(num1) + Number(num2)
    setResult(result)
  }

  return(
    <div>
           <h1>First Number</h1>
           <input type="text" value={num1} onChange={(e)=>setNum(e.target.value)}/>
           <h1>Second Number</h1>
           <input type="text" value={num2} onChange={(e)=>setNum2(e.target.value)} />
           <button onClick={handleClick} >Add</button>

           <h2>The OutPut is: {result}</h2>
    </div>
  )
}


export default App