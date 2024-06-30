import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List";
import ToogleButton from "./Components/ToogleButton";
import Input from "./Components/Input";

function App() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [text, setText] = useState("");
  

 

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
          
        
          <Input/>
          
        <ToogleButton/>
        </main>
      </header>
    </div>
  );
}

export default App;
