import React, { useState } from "react";



const App=()=>{


  const [wins,setWins] = useState("")
  const [draws,setDrows] = useState("")
  const [losses,setLoses] = useState("")
  const [result,setResult] = useState()



  const handeClick=()=>{
    let results = Number(wins)* 3 + Number(draws) * 1 + Number(losses)*0
    setResult(results)
  }




  return(
    <div>
      <h1>Football Points</h1>
      <div>
      <h2>Wins</h2>
      <input type="text" value={wins} onChange={(e)=>setWins(e.target.value)}/>
      </div>
      <div>
      <h2>Draws</h2>
      <input type="text" value={draws} onChange={(e)=>setDrows(e.target.value)}/>
      </div>
      <div>
      <h2>Loses</h2>
      <input type="text" value={losses} onChange={(e)=>setLoses(e.target.value)}/>
      </div>
      <button onClick={handeClick}  >Calculate</button>
      <h1>The Final Output is :{result}</h1>

    </div>
  )
}

export default App