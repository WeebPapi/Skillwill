import Complete from "./components/Complete";
import NotComplete from "./components/NotComplete";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [completeList, setCompleteList] = useState([]);
  const [incompleteList, setIncompleteList] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  useEffect(() => {
    const handleClick = () => {
      setIncompleteList([...incompleteList, value]);
    };
    if (buttonClicked) handleClick();

    setButtonClicked(false);
  }, [buttonClicked]);
  return (
    <div className="App">
      <h1>ToDo</h1>
      <div className="wrapper">
        <div className="input-field">
          <input
            value={value}
            type="text"
            name="inputfield"
            placeholder="Write task"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></input>
          <button
            type="button"
            onClick={() => {
              setButtonClicked(true);
            }}
          >
            Add Task
          </button>
        </div>
        <div className="lists">
          <NotComplete
            incompleteList={incompleteList}
            completeList={completeList}
            setIncompleteList={setIncompleteList}
            setCompleteList={setCompleteList}
          />
          <Complete
            incompleteList={incompleteList}
            completeList={completeList}
            setIncompleteList={setIncompleteList}
            setCompleteList={setCompleteList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
