import React, { useState } from 'react'



const App=()=>{



      const [inputValue,setInputValue] = useState("")
      const [result,setResult] = useState("")


      const handleChange=(e)=>{
        setInputValue(e.target.value)
      }



      const handleClick=()=>{
        let resultss = Number(inputValue)
        let res = ++resultss
        setResult(res)
      }



    return(
        <div>
             <h2>Increment The Numbers</h2>
             <input type="" value={inputValue} onChange={handleChange} />
             <button onClick={handleClick}>Click</button>
             <h2>The Output is : {result}</h2>
        </div>
    )
}

export default App