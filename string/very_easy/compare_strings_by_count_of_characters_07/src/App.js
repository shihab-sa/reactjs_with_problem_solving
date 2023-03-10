import React, { useState } from "react";




function strLength(str1,str2){

  let str = ""

  if(str1.length === str2.length){
    str += true

  }
  else{
    str += false
  }

  return str
}


const App=()=>{

  const [str1,setStr1] = useState("")
  const [str2,setStr2] = useState("")
  const [res,setRes] = useState("")


  const handleClick=()=>{
    let result = strLength(str1,str2)
    setRes(result)
  }





  return(
    <div>

      <h1>Compare Strings by Count of Characters</h1>
      <input type="text" value={str1} onChange={(e)=>setStr1(e.target.value)}/>
      <input type="text" value={str2} onChange={(e)=>setStr2(e.target.value)}/>
      <button onClick={handleClick}>Click</button>
      <h3>The Final output is:{res}</h3>
    </div>
  )
}


export default App