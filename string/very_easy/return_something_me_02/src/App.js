import React, { useState } from "react";



const App=()=>{

  const [input,setInput] = useState("")
  const [result,setResult] = useState("")


// change the handle 
  const handleChanege=(e)=>{
       setInput(e.target.value)
  }


  // click able function 

  const handleClick=()=>{
          setResult(`something ${input}`)
  }


  return(
    <div>
         <h1>Return Something to Me!</h1>
         <input type="text" value={input} onChange={handleChanege} />
         <button onClick={handleClick}>Result!</button>
         <h2>The Output is :{result}</h2>
    </div>
  )
}


export default App