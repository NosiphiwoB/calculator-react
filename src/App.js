import React from 'react';
import './App.css';
import { useState, useEffect} from 'react';


function App() {
const [numbers, setNumbers] = useState("");
const [displayNumbers, setDisplayNumbers] = useState('')
 
const handleClick = () => {

}

function add () {
  setDisplayNumbers(eval(displayNumbers))
  // let res = numbers.reduce((num1, num2) => num1 + num2)
  // return res
}

function addToDisplay(value) {
  var newValue = displayNumbers + '' + value
  setDisplayNumbers(newValue)
}

  return (
    <div className="App">

    <div>
      <h1>Calculator</h1>
    </div>

    <div style={{textAlign:'center', 'border' : 'solid 1px', width:"5rem"}} >
     <h1 style={{textAlign:'center'}}>  {displayNumbers} </h1>
      {/* <input> 6  </input> */}
    </div>

    <div>
      <button>AC</button>
      <button>(</button>
      <button>)</button>
      <button>/</button>
    </div>

    <div>
     <button onClick={() => addToDisplay(7)}>7</button>
     <button  onClick={() => addToDisplay(8)}>8</button>
     <button>9</button>
     <button onClick={() => addToDisplay('+')}>+</button>
    </div>

    <div>
     <button>4</button>
     <button>5</button>
     <button>6</button>
     <button>-</button>
    </div>

    <div>
     <button>1</button>
     <button>2</button>
     <button>3</button>
     <button onClick={() => addToDisplay('*')}>*</button>
    </div>
  
    <div>
     <button >x</button>
     <button>0</button>
     <button>.</button>
     <button onClick={() => add()}>=</button>
    </div>

    </div>
  );
}

// function App() {
//   const [currentSum,setCurrentSum]=useState(0);
//   const [clear,setClear]=useState(false);

//   useEffect(()=>{
//     document.querySelector('#result').value="";
//   },[])
  
//   useEffect(()=>{
//     if(clear)
//     document.querySelector('#result').value="";
//   })

//   const Add=(e)=>{
//     e.preventDefault();
//     if(clear) setClear(false);
//     let currentNum=document.querySelector('#num').value
//     if(currentNum=='')
//     return;
//     let sum= currentSum+parseInt(currentNum);
//     setCurrentSum(sum);
//     document.querySelector('#num').value="";
      
//   }

//   const Clear=(e)=>{
//     e.preventDefault();
//     console.log('sum:', currentSum);
//     document.querySelector('form').reset();
//     setClear(true);
//     setCurrentSum(0);
//   }

//   return (
//     <div className="App">
//       <div className="app-title">
//         <h1> Basic Form Calculator</h1>
//       </div>
//       <form>
//             <input type="text" id="result" value={currentSum}  readOnly />   
//             <input type="text" id="num" placeholder="enter a number" />
//             <button onClick={Add}>Add</button>
//             <button onClick={Clear}>Clear</button>
//       </form>
//     </div>
//   );
// }

export default App;
