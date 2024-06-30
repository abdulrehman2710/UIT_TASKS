import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List";
import ToogleButton from "./Components/ToogleButton";

function App() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [text, setText] = useState("");
  
  const [field, setField] = useState("value from state");
  
  const onPress = (event) =>{
  //  let h1 = document.querySelector(h1);
  
    setField(event.target.value)
  }
 

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const onAdd = () => {
    setData([...data, text]);
    setText('');
  };

  const onDelete = (indexToDelete) => {
    const copy = [...data];
    copy.splice(indexToDelete, 1);
    setData(copy);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{text}</h2>
        <input value={text} onChange={onChangeHandler} />
        <button onClick={onAdd}>Add 1</button>
        <main>
          <div>
            <List data={data} onDelete={onDelete} />
            </div>
          
          <div>
          <h1> {field ? field:  "enter here"} </h1>
          <input type="text" placeholder="enter here" onChange={onPress}/>

          </div>
          
        <ToogleButton/>
        </main>
      </header>
    </div>
  );
}

export default App;
