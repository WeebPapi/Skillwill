import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Task.css";
import { LangContext } from ".";
import { useDispatch } from "react-redux";
import { toggleCompletion, removeTodo } from "./store/todos.thunks";

const Task = ({ title, keyId, deadline, firstName, lastName, completion }) => {
  const dispatch = useDispatch();
  const context = useContext(LangContext);
  const [isComplete, setIsComplete] = useState(completion);
  const formatDate = (currentDate) => {
    const date = new Date(currentDate);
    const day = date.getDate();
    const month = date.getMonth();
    const hour = date.getHours();
    const months =
      context.lang === "en"
        ? [
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
          ]
        : [
            "იან",
            "თებ",
            "მარ",
            "აპრ",
            "მაი",
            "ივნ",
            "ივლ",
            "აგვ",
            "სექ",
            "ოქტ",
            "ნოვ",
            "დეკ",
          ];
    return `${day} ${months[month]} ${
      context.lang === "en" ? "at" : ""
    } ${hour} ${context.lang === "en" ? "o'Clock" : "საათზე"}`;
  };
  const text = {
    complete: context.lang === "en" ? "Mark Complete" : "მონიშნე დასრულებულად",
    incomplete:
      context.lang === "en" ? "Mark Incomplete" : "მონიშნე დაუსრულებლად",
    edit: context.lang === "en" ? "Edit" : "რედაქტირება",
    delete: context.lang === "en" ? "Delete" : "წაშლა",
  };
  const handleCompletion = () => {
    dispatch(toggleCompletion({ id: keyId, isComplete }));
  };

  const handleDeletion = () => {
    dispatch(removeTodo(keyId));
  };

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
            {isComplete ? text.incomplete : text.complete}
          </button>
          <Link to={`/Edit/${keyId}`}>
            <button type="button">{text.edit}</button>
          </Link>
          <button type="button" onClick={handleDeletion}>
            {text.delete}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
