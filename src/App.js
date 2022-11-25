import React from 'react';
import './App.css';
import { useState} from 'react';


function App() {
// const [numbers, setNumbers] = useState("");
const [displayNumbers, setDisplayNumbers] = useState('')
 
// const handleClick = () => {

// }

function add () {
  setDisplayNumbers(eval(displayNumbers))
}

function addToDisplay(value) {
  var newValue = displayNumbers + '' + value
  setDisplayNumbers(newValue)
}

function clear () {
  setDisplayNumbers("");
}

function delet () {
  let arr = displayNumbers.split('').filter((num,i)=> i !== displayNumbers.length -1 )
  let str = arr.join('');
return setDisplayNumbers(str)
 
}

  return (
    <div className="App">

    <div>
      <h1>Calculator</h1>
    </div>


  <div id="calculator">
    <div>
     <h2>  {displayNumbers} </h2>
    </div>

    <div>
      <button id="clear" onClick={() => clear()}>AC</button>
      <button id="symbols" onClick={() => addToDisplay("(")}>(</button>
      <button id="symbols" onClick={() => addToDisplay(")")}>)</button>
      <button id="symbols" onClick={() => addToDisplay("/")}>/</button>
    </div>

    <div>
     <button id="numbers" onClick={() => addToDisplay(7)}>7</button>
     <button id="numbers" onClick={() => addToDisplay(8)}>8</button>
     <button id="numbers" onClick={() => addToDisplay(9)}>9</button>
     <button id="symbols" onClick={() => addToDisplay('+')}>+</button>
    </div>

    <div>
     <button id="numbers" onClick={() => addToDisplay(4)}>4</button>
     <button id="numbers" onClick={() => addToDisplay(5)}>5</button>
     <button id="numbers" onClick={() => addToDisplay(6)}>6</button>
     <button id="symbols" onClick={() => addToDisplay("-")}>-</button>
    </div>

    <div>
     <button id="numbers" onClick={() => addToDisplay(1)}>1</button>
     <button id="numbers" onClick={() => addToDisplay(2)}>2</button>
     <button id="numbers" onClick={() => addToDisplay(3)}>3</button>
     <button id="symbols" onClick={() => addToDisplay('*')}>*</button>
    </div>
  
    <div>
     <button id="backSpace" onClick={() => delet()}>C</button>
     <button id="numbers" onClick={() => addToDisplay(0)}>0</button>
     <button id="numbers" onClick={() => addToDisplay(".")}>.</button>
     <button id="equals" onClick={() => add()}>=</button>
    </div>
   </div>
    </div>
  );
}

export default App;
