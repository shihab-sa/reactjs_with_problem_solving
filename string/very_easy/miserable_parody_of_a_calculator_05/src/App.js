import React, { useState } from "react";




function miseRable(ev){

  return eval(ev)

}

const App=()=>{

  const [inputdata,setInputdata] = useState("")
  const [res,setRes] = useState("")


  const handleChange=(e)=>{
    setInputdata(e.target.value)
  }


  const handleClick=()=>{
    // let result = inputdata.map((x)=>x.trim())
    setRes(miseRable(inputdata))
  }


  return(
    <div>
       <h1>Miserable Parody of a Calculator</h1>
       <input type="text" value={inputdata} onChange={handleChange} />
       <button onClick={handleClick} >Click</button>
       <h2>The Output is{res}</h2>
    </div>
  )
}

export default App