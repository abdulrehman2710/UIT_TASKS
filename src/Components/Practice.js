import { useState } from "react";


function Practice(){

  const [actualValue, newValue] = useState(0);

  const increment = () => {
    newValue(actualValue => actualValue + 1)
  }  
  const decrement = () => {
    newValue(actualValue => actualValue - 1)
  }  

  
    return(
        <div>
            <h1>{actualValue}</h1>
            <button onClick={increment}> increment </button>
            <button onClick={decrement}> decrement </button>
        </div>

    );

}

export default Practice;