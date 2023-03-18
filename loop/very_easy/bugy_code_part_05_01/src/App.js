// import React, { useState } from "react";




// // main function 


// function myBugguCode(arr){

//   let newArr = []
//   for(let i=1; i<=arr; i++){
//     newArr.push(i)
//   }
//    return newArr
// }


// const App=()=>{

//   const [inputVale,setInputValue] = useState("")
//   const [output,setOutput] = useState([])




//   const handleClick=()=>{
    
//     setOutput(myBugguCode(Number(inputVale)))
//   }





//   return(
//     <div>
//            <h1>Buggy Code Part 05</h1>
//            <input type="text" value={inputVale} onChange={(e)=>setInputValue(e.target.value)}/>
//            <button onClick={handleClick}>Click</button>
//            <h2>The output is{JSON.stringify(output)}</h2>
//     </div>
//   )
// }

// export default App 



import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    const inputNumber = parseInt(inputValue);

    if (!isNaN(inputNumber)) {
      const newNumbers = [];

      for (let i = 1; i <= inputNumber; i++) {
        newNumbers.push(i);
      }

      setNumbers(newNumbers);
      setInputValue("");
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Print Array</button>
      <br />
      {numbers.length > 0 ? numbers.map((number) => <div key={number}>{number}</div>) : null}
    </div>
  );
}

export default App;
