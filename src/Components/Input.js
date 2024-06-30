import { useState } from "react";

function Input(){

    const [text, setText] = useState("type here")
    const onChangeHandler = (event) => {

        setText(event.target.value)

    }

    return(
        <div>
            <h1>{text ? text:"Enter Here..!"}</h1>
            
            
            <input 
             placeholder="Enter here" onChange={onChangeHandler}
            />

        </div>

    );

}

export default Input;