import { useState } from "react";

function Increment(){

    const [text, setText] = useState("1")
    const onChangeHandler = (event) => {

        // console.log(event.target.value)
        setText(event.target.value)

    }

    return(
        <div>
            <h1>{text}</h1>
            
            
            <input 
            value={text}
            onChange={onChangeHandler}
            />

        </div>

    );

}

export default Increment;