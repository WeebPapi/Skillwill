import React, { useEffect, useState, useRef, useReducer } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "./App";
import "./Task.css";

const Task = ({
  title,
  keyId,
  deadline,
  firstName,
  lastName,
  completion,
  completeList,
  incompleteList,
  setCompleteList,
  setIncompleteList,
  associatedArr,
}) => {
  const [isComplete, setIsComplete] = useState(completion);
  const formatDate = (currentDate) => {
    const date = new Date(currentDate);
    const day = date.getDate();
    const month = date.getMonth();
    const hour = date.getHours();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${day} ${months[month]} at ${hour}`;
  };
  const handleCompletion = () => {
    setIsComplete((prev) => {
      const newIsComplete = !prev;
      let url = "/tasks";
      let payload = [
        {
          _uuid: keyId,
          isComplete: newIsComplete,
        },
      ];
      axiosInstance.put(url, payload).catch((err) => console.log(err));
      return newIsComplete;
    });
  };

  const handleDeletion = () => {
    if (keyId) {
      const url = `/tasks/${keyId}`;
      axiosInstance.delete(url).catch((err) => console.log(err));
    }
    associatedArr((prev) => prev.filter((item) => item.id !== keyId));
  };

  useEffect(() => {
    if (isComplete && incompleteList) {
      setCompleteList((prev) => [
        ...incompleteList.filter((item) => item.id === keyId),
        ...prev,
      ]);
      setIncompleteList((prev) => prev.filter((item) => item.id !== keyId));
    } else if (!isComplete && completeList) {
      setIncompleteList((prev) => [
        ...completeList.filter((item) => item.id === keyId),
        ...prev,
      ]);
      setCompleteList((prev) => prev.filter((item) => item.id !== keyId));
    }
  }, [isComplete]);

  return (
    <div
      className="task"
      style={
        isComplete
          ? { border: "1px solid navy", borderLeft: "5px solid navy" }
          : null
      }
    >
      <div className="task-header">
        <h3>{title}</h3>
        <p>{formatDate(deadline)}</p>
        <p>{keyId}</p>
      </div>
      <div className="task-bottom">
        <p>{`${firstName} ${lastName}`}</p>
        <div className="task-bottom-buttons">
          <button type="button" onClick={handleCompletion}>
            {isComplete ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <Link to={`/Edit/${keyId}`}>
            <button type="button">Edit</button>
          </Link>
          <button type="button" onClick={handleDeletion}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
