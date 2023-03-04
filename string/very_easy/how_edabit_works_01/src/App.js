import React, { useState } from "react";



const App=()=>{

  const [inputValue,setInputValue] = useState("")
  const [outPutValue,setOutPutValue] = useState("")





  // input onChange 

  const handleChange=(e)=>{
       setInputValue(e.target.value)
  }

  // handle click changes 

  const handleClick=()=>{
        let result = inputValue.toLowerCase()  === "hello edabit.com" ? 'true' : 'false' 
        setOutPutValue(result)
  }
  return(
    <div>
          <h1>Hellow Edabit.com</h1>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button onClick={handleClick}>Click</button>
          <p>{outPutValue}</p>
    </div>
  )
}

export default App