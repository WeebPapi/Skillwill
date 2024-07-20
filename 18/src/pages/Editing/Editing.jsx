import React from "react";
import "./Editing.css";
import { useState } from "react";
import { axiosInstance } from "../../App";
import { useParams, Link } from "react-router-dom";

const Editing = () => {
  const [task, setTask] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const { taskId } = useParams();
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
          <label htmlFor="task">Task Name</label>
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
          <label htmlFor="firstName">First Name</label>
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
          <label htmlFor="lastName">Last Name</label>
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
          <label htmlFor="deadline">Deadline</label>
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
          Save Edit
        </Link>
      </div>
      ;
    </div>
  );
};

export default Editing;
