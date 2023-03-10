import React, { useState } from "react";



const App=()=>{
  const [input,setInputs] = useState("")
  const [res,setRes] = useState("")


  const handleChange=(e)=>{
    setInputs(e.target.value)
  }



  const handleClick=()=>{
         let res = `Hello ${input}`
         setRes(res)
  }



    return(
    <div>
      <h1>Buggy Code Part 04</h1>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Click</button>
      <h3>The Output is :{res}</h3>

    </div>

  )
}

export default App