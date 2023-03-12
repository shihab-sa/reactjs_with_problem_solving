import React, { useState } from 'react'



const App=()=>{

  const [age,setAge] = useState("")
  const [days,setDays] = useState("")


  const handleClick=()=>{
    let result = Number(age) * 365
    setDays(result)
  }


  return(
    <div>



      <h1>Convert Age to days</h1>
      <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
      <button onClick={handleClick}>Calculate</button>
      <h2>The outpot is:{days}</h2>

    </div>
  )
}

export default App