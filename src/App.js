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
      <button onClick={() => clear()}>AC</button>
      <button onClick={() => addToDisplay("(")}>(</button>
      <button onClick={() => addToDisplay(")")}>)</button>
      <button onClick={() => addToDisplay("/")}>/</button>
    </div>

    <div>
     <button onClick={() => addToDisplay(7)}>7</button>
     <button onClick={() => addToDisplay(8)}>8</button>
     <button onClick={() => addToDisplay(9)}>9</button>
     <button onClick={() => addToDisplay('+')}>+</button>
    </div>

    <div>
     <button onClick={() => addToDisplay(4)}>4</button>
     <button onClick={() => addToDisplay(5)}>5</button>
     <button onClick={() => addToDisplay(6)}>6</button>
     <button onClick={() => addToDisplay("-")}>-</button>
    </div>

    <div>
     <button onClick={() => addToDisplay(1)}>1</button>
     <button onClick={() => addToDisplay(2)}>2</button>
     <button onClick={() => addToDisplay(3)}>3</button>
     <button onClick={() => addToDisplay('*')}>*</button>
    </div>
  
    <div>
     <button onClick={() => delet()}>x</button>
     <button onClick={() => addToDisplay(0)}>0</button>
     <button onClick={() => addToDisplay(".")}>.</button>
     <button onClick={() => add()}>=</button>
    </div>
   </div>
    </div>
  );
}

export default App;
