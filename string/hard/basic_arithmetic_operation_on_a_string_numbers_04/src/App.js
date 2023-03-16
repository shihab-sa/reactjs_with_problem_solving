import React, { useState } from "react";



function arithmeticOperation(input){

  let res = input.split(" ")
  let num1 = parseInt(res[0])
  let num2 = parseInt(res[2])
  let ope = res[1]


  switch(ope){
     case "+":
      return num1 + num2

      case "-":
        return num1 - num2

        case "*":
          return num1 * num2 

          case "/" :
            if(num2 === 0){
              return -1
            }
            else{
              return num1 / num2
            }

            default : 
            return null
  }

}

const App=()=>{


  const [input,setInput] = useState("")
  const [results,setResult] = useState("")


  const handleClick=()=>{
    
    let xyz = arithmeticOperation(input)
    setResult(xyz)

  }





  return(
    <div>
      <h1>Basic Arithmetic Operations on a String Number</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={handleClick}>Calculate</button>
      <h2>The Output is:{results}</h2>

    </div>
  )
}

export default App