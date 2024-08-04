import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Task.css";
import { FaCheck } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

const Task = ({ name, id, isComplete }) => {
  const dispatch = useDispatch();
  const [completion, setCompletion] = useState(isComplete);
  const toggleComplete = () => {
    if (!completion) {
      setCompletion(true);
    } else {
      setCompletion(false);
    }
    dispatch({ type: "TOGGLE_COMPLETE", payload: { id } });
  };
  const handleDelete = () => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };
  return (
    <div
      className="task-container"
      style={
        isComplete
          ? { borderTop: "3px solid #78c17d" }
          : { borderTop: "3px solid crimson" }
      }
    >
      <div className="task-head">
        <h2>{name}</h2>
      </div>
      <div className="task-buttons">
        <div
          className="button"
          style={
            !isComplete
              ? {
                  backgroundColor: "#b6f6bb",
                }
              : {
                  backgroundColor: "#fed48b",
                }
          }
          onClick={toggleComplete}
        >
          {isComplete ? <RiArrowGoBackLine /> : <FaCheck />}
        </div>
        <div
          style={{ backgroundColor: "#ff6666" }}
          className="button"
          onClick={handleDelete}
        >
          <FaTrash />
        </div>
      </div>
    </div>
  );
};

export default Task;
