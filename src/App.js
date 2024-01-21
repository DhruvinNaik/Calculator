// import React, { useState } from 'react';
// import './App.css';
// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState(0);
// //give input
//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//   };
// //calculation
//   const handleCalculate = () => {
//     try {
//       setResult(eval(input));
//     } catch (error) {
//       setResult('Error');
//     }
//   };
// //clear the box
//   const handleClear = () => {
//     setInput('');
//     setResult(0);
//   };

//   return (
//     <div>
//       <h1>Calculator</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={handleInputChange}
//         placeholder="Enter expression"
//       />
//       <br />
//       <button onClick={handleCalculate}>Calculate</button>
//       <button onClick={handleClear}>Clear</button>
//       <br />
//       <div>Result: {result}</div>
//     </div>
//   );
// };

// export default Calculator;

// Calculator.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <>
    <h1>Calculator</h1>
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className='op' onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className='op' onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className='op' onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button className='op' onClick={() => handleButtonClick('.')}>.</button>
        <button className='op' onClick={handleCalculate}>=</button>
        <button className='op' onClick={() => handleButtonClick('/')}>/</button>
        <button className='clr' onClick={handleClear}>Clear</button>
       
      </div>
    </div>
    <div className='iframe-container'>
    <iframe className='insta' src='https://widgets.sociablekit.com/instagram-hashtag-feed/iframe/25351184' frameborder='0' width='50%' height='1000' ></iframe>
    <iframe src='https://widgets.sociablekit.com/instagram-feed-private/iframe/25351200' frameborder='0' width='100%' height='1000'></iframe>
    </div>
    </>
  );
};

export default App;
