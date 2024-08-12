import React from "react";
import axios from "axios";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { LangContext } from ".";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodos } from "./store/todos.thunks";

const axiosInstance = axios.create({
  baseURL: "https://crudapi.co.uk/api/v1",
  headers: {
    Authorization: "Bearer V5PdPg2A7MnRci5qthqodk2UqM89h2ORSvnnq34pN5lIZcD83Q",
    "Content-Type": "application/json",
  },
});

function App() {
  const context = useContext(LangContext);
  const [task, setTask] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const { theme } = useSelector((state) => state.theme);
  const text = {
    todo: context.lang === "en" ? "To-Do" : "დავალებები",
    taskName: context.lang === "en" ? "Task Name" : "დავალების სახელი",
    firstName: context.lang === "en" ? "First Name" : "სახელი",
    lastName: context.lang === "en" ? "Last Name" : "გვარი",
    submit: context.lang === "en" ? "Submit" : "დამატება",
    deadline: context.lang === "en" ? "Deadline" : "ბოლო ვადა",
    incomplete: context.lang === "en" ? "Incomplete" : "დაუსრულებელი",
    complete: context.lang === "en" ? "Complete" : "დასრულებული",
  };
  const publishTask = () => {
    const payload = [
      {
        taskName: task ? task : "",
        firstName: firstName ? firstName : "",
        lastName: lastName ? lastName : "",
        deadline: deadline ? deadline : "",
        isComplete: false,
      },
    ];

    dispatch(addTodo(payload));
  };
  const getTasks = () => {
    dispatch(getTodos());
  };

  useEffect(getTasks, []);
  return (
    <div
      className="App"
      style={
        theme === "dark"
          ? { backgroundColor: "#242424", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <h1>{text.todo}</h1>
      <div className="input-field">
        <div className="inputLabel">
          <label htmlFor="task">{text.taskName}</label>
          <input
            name="task"
            value={task}
            type="text"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <div className="inputLabel">
          <label htmlFor="firstName">{text.firstName}</label>
          <input
            name="firstName"
            value={firstName}
            type="text"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="inputLabel">
          <label htmlFor="lastName">{text.lastName}</label>
          <input
            name="lastName"
            value={lastName}
            type="text"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="inputLabel">
          <label htmlFor="deadline">{text.deadline}</label>
          <input
            name="deadline"
            value={deadline}
            type="datetime-local"
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          />
        </div>
        <button type="button" onClick={publishTask}>
          {text.submit}
        </button>
      </div>
      <div className="lists">
        <div className="list">
          <h2>{text.incomplete}</h2>
          {todos.incompleteTodos.map((task) => (
            <Task
              title={task.taskName}
              firstName={task.firstName}
              lastName={task.lastName}
              deadline={task.deadline}
              keyId={task.id}
              completion={false}
              key={task.id}
            />
          ))}
        </div>
        <div className="list">
          <h2>{text.complete}</h2>
          {todos.completeTodos.map((task) => (
            <Task
              title={task.taskName}
              firstName={task.firstName}
              lastName={task.lastName}
              deadline={task.deadline}
              keyId={task.id}
              completion={true}
              key={task.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export { axiosInstance };
export default App;
