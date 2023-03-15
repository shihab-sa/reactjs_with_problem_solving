import React, { useState } from "react";


function isEmptys(str){

  return str.trim().length === 0

}

const App=()=>{


  const [input,setInput] = useState("")
  const [isEmpty,setIsEmpty] = useState(false)



  const handleClick=()=>{
     setIsEmpty(isEmptys(input))
  }




  return(
    <div>
      <h1>Is The String Empty!</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={handleClick} >Check</button>
      {
        isEmpty ? <p>True</p> : <p>False</p>
      }

    </div>
  )
}


export default App