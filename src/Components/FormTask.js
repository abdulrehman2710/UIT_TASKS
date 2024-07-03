import React, { useState } from "react";

function FormTask() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [showName, setShowName] = useState("");
    const [showEmail, setShowEmail] = useState("");
   

   
   const onAdd = () =>{
       setShowName(name);
       setShowEmail(email);
};
   const onClear = () =>{
       setShowName("");
       setShowEmail("");
};



    return (
        <div>
            Name: <input type="text" value={name} onChange={(event)=>setName(event.target.value)} />
            Email: <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
            <button onClick={onAdd}>Show</button>
            <button onClick={onClear}>Clear</button>
            
                <div style={{ border: "1px solid white", padding: "10px", marginTop: "10px"}}>
                    <p>Name: {showName}</p>
                    <p>Email: {showEmail}</p>
                </div>
            
        </div>
    );
}

export default FormTask;
