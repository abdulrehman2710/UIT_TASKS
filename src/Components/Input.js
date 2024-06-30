import { useState } from "react";

function Input(){

    const [text, setText] = useState("type here")
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

export default Input;