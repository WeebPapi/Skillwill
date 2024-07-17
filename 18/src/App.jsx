import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const axiosInstance = axios.create({
    baseURL: "https://crudapi.co.uk/api/v1",
    headers: {
      Authorization:
        "Bearer V5PdPg2A7MnRci5qthqodk2UqM89h2ORSvnnq34pN5lIZcD83Q",
      "Content-Type": "application/json",
    },
  });

  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const publishTask = () => {
    const payload = JSON.stringify([
      {
        taskName: value ? value : "",
        isComplete: false,
      },
    ]);

    axiosInstance
      .post("/task", payload)
      .then((res) => {
        setTasks((prev) => [
          {
            taskName: res.data.items[0].taskName,
            id: res.data.items[0]._uuid,
          },
          ...prev,
        ]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const retrieveTasks = () => {
    axiosInstance.get("/task").then((res) => {
      setTasks(
        res.data.items.map((item) => {
          return {
            taskName: item.taskName,
            id: item._uuid,
          };
        })
      );
    });
  };
  useEffect(retrieveTasks, []);
  return (
    <div className="App">
      <h1>To-Do</h1>
      <div className="input-field">
        <input
          name="task"
          value={value}
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="button" onClick={publishTask}>
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            setTasks([]);
          }}
        >
          Clear
        </button>
      </div>
      <div className="list">
        {tasks.map((task) => (
          <div key={task.id}>{task.taskName}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
