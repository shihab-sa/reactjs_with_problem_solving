import React, { useState } from "react";


// main function  
function histoGram(arr,char){
   let newStr = ""
  for(let i=0; i<arr.length; i++){
       newStr += char.repeat(arr[i]) + "/n"
  }
 return newStr

}

const App=()=>{

  const [inputNumofArray,setNumOfArray] = useState("")
  const [output,setOutput] = useState("")

  // how to input in Array type number 

  const handleChaneArrayNum=(e)=>{
      let result = e.target.value.split(",").map((x)=>x.trim())
        setNumOfArray(result)
  }

  // Give me only charcter type sign 

    const [inputCharSign,setInputCharSign] = useState("")

    const handleCharSingChaneg=(e)=>{
      setInputCharSign(e.target.value)
    }

    // button and onClick function 

    const handleClick=()=>{

      setOutput(histoGram(inputNumofArray,inputCharSign))
         
    }


  return(
    <div>

        <h2>Give me some number of Array</h2>
        <input type="" value={inputNumofArray} onChange={handleChaneArrayNum} />
        <h2>Give me only charcter type sign</h2>
        <input type="text" value={inputCharSign} onChange={handleCharSingChaneg} />
         <button onClick={handleClick}>Click</button>

        <h5>The output is :{output} </h5>

    </div>
  )
}

export default App