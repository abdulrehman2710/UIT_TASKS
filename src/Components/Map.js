import { useState } from "react";

function Map() {
    const [value, setValue] = useState([1, 2, 3, 4,5]);
    const [text, setText] = useState("");
 
    const onChangeHandler = (event) =>{
        setText(event.target.value);
    };
    const onAdd = () =>{
        setValue([...value, text]);
        setText('');
    };

    const onDelete = (index) =>{
        
        let copy = [...value];
       copy.splice(index, 1);
       setValue(copy);

    };

    return (
        <div>
             
         <input onChange={onChangeHandler}/> 

         <button onClick={onAdd}> Add </button>
            <ul>
                {value.map((item, index) => (
                
                   
                   <li key={index}>
                        {index + " - " + item}
                        <button onClick={onDelete}> Delete </button>
                    </li>
                ))} 
            </ul>
        </div>
    );
}

export default Map;
