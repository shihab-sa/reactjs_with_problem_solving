import React, { useState } from "react";




function myPair(n){

    return [...n]

}


const App=()=>{
    const [inputValue,setInputValue] = useState("")
    const [outpus,setOutputs] = useState([])



    const hnadleClick=()=>{
        let result = inputValue.split(",").slice(0,2).map((x)=>x.trim())
        setOutputs(myPair(result))
    }
    






    return(
        <div>
            <h1>Pair Managements App</h1>
            <p>Input Only Two Numbers</p>
            <input type="" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <button onClick={hnadleClick}>Click</button>
            <h2>The output is {JSON.stringify(outpus)}</h2>

        </div>
    )
}

export default App