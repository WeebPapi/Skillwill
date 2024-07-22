import React from "react";
import "./Editing.css";
import { useState, useContext } from "react";
import { axiosInstance } from "../../App";
import { useParams, Link } from "react-router-dom";
import { LangContext } from "../..";

const Editing = () => {
  const context = useContext(LangContext);
  const [task, setTask] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [deadline, setDeadline] = useState(new Date());
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
      };
      axiosInstance
        .put(`/tasks/${taskId}`, payload)
        .catch((err) => console.log(err));
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
