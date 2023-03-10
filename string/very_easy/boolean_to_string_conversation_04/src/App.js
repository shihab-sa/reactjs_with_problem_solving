import React, { useState } from "react";




function myCon(arr){
  return `'${arr}'`

}



const App=()=>{

  const [inputBoolean,setBoolean] = useState("")
  const [outputs,setOutPuts] = useState("")


  const hnadleClick=()=>{
    let result = myCon(inputBoolean)
    setOutPuts(result)
  }


  return(
    <div>
       <h1>Boolean To String Conversation</h1>
       <input type="" value={inputBoolean} onChange={(e)=>setBoolean(e.target.value)} />
       <button onClick={hnadleClick} >Click</button> 
       <h2>The Final OutPut is{outputs}</h2>
        

    </div>
  )
}


export default App