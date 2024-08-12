import React from "react";
import "./Editing.css";
import { useState, useContext } from "react";
import { axiosInstance } from "../../App";
import { useParams, Link } from "react-router-dom";
import { updateTodo } from "../../store/todos.thunks";
import { LangContext } from "../..";
import { useDispatch } from "react-redux";

const Editing = () => {
  const context = useContext(LangContext);
  const [task, setTask] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const dispatch = useDispatch();
  const { taskId } = useParams();
  const text = {
    taskName: context.lang === "en" ? "Task Name" : "დავალების სახელი",
    firstName: context.lang === "en" ? "First Name" : "სახელი",
    lastName: context.lang === "en" ? "Last Name" : "გვარი",
    save: context.lang === "en" ? "Save Edit" : "შენახვა",
  };
  const handleSave = () => {
    if (taskId) {
      const payload = {
        taskName: task ? task : "",
        firstName: firstName ? firstName : "",
        lastName: lastName ? lastName : "",
        deadline: deadline ? deadline : "",
        id: taskId,
      };
      dispatch(updateTodo(payload));
    }
  };
  return (
    <div className="edit-container">
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
        <Link to={"/"} type="button" onClick={handleSave}>
          {text.save}
        </Link>
      </div>
      ;
    </div>
  );
};

export default Editing;
