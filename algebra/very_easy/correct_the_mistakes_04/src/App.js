import React, { useState } from 'react';

function Squared() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleButtonClick = () => {
    setResult(inputValue ** 2);
  }

  return (
    <div>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Calculate squared value</button>
      <p>{result}</p>
    </div>
  );
}

export default Squared;
