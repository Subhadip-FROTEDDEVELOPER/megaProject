import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const handleInputValue = (value) => {
    const numericValue = Number(value);
    if (numericValue >= 0 || value === "") {
      setInputValue(numericValue);
    }
  };

  const handleIncrement = () => {
    setCounter(counter + inputValue);
  };
  const handleDecrement = () => {
    if (counter > 0) return setCounter(counter - inputValue);
  };
  const handleReset = () => {
    setCounter(0);
    setInputValue(0);
  };
  return (
    <div className="flex justify-center items-center mt-40 flex-col gap-10">
      <h1 className="text-4xl">counter : {counter}</h1>
      <input
        type="number"
        placeholder="Enter Value"
        className="border-2 focus:invisible text-center text-2xl"
        value={inputValue}
        onChange={(e) => handleInputValue(e.target.value)}
      />
      <div className=" flex gap-10">
        <button
          className="text-2xl border-2 px-4 py-2"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="text-2xl border-2 px-4 py-2"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button className="text-2xl border-2 px-4 py-2" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
