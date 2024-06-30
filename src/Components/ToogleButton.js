import { useState } from "react";

function ToogleButton(){

    let [msg, setMsg] = useState("this is toogle message");
    let [btn, setBtn] = useState("hide msg");
    
    

    const clickMe =()=>{
       if (btn == "hide msg"){
        setBtn("Show Msg");
        setMsg("");
       }
       else {
        setBtn("hide msg");
        setMsg( "this is toogle message" );
       }
    };

    return(
        <div>
            <p>{msg}</p>
            <button onClick={clickMe}> {btn} </button>

        </div>

    );
}
export default ToogleButton;