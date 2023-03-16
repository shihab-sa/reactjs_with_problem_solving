import React, { useState } from 'react';

const App=()=>{
  const [n, setN] = useState(0);
  const [sum, setSum] = useState(0);

  const handleInputChange = (event) => {
    setN(parseInt(event.target.value));
  };

  const handleClick = () => {
    const polygonSum = (n - 2) * 180;
    setSum(polygonSum);
  };

  return (
    <div>
      <label htmlFor="n-input">Enter the number of sides:</label>
      <input id="n-input" type="number" min="3" onChange={handleInputChange} />
      <button onClick={handleClick}>Calculate</button>
      <p>Sum of internal angles: {sum}</p>
    </div>
  );
}

export default App
