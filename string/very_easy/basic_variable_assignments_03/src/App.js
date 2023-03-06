import React, { useState } from 'react'



const App=()=>{


  const [varibales,setVariables] = useState("")
  const [outPut,setOutput] = useState("")



  function handleClick(){
         let result = `"${varibales} edabit.com"`
         setOutput(result)
  }





  return(
    <div>
      <h1>Basic Variable Assignment</h1>
      <input type="text" value={varibales} onChange={(e)=>setVariables(e.target.value)}/>
      <button onClick={handleClick}>Click</button>
      <h2>The Output is:{outPut}</h2>

    </div>
  )
}


export default App