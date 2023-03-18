import React, { useState } from "react";

function NameString() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setResult(inputValue + "Edabit");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Concatenate</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default NameString;
