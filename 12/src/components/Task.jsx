import React from "react";
import "./Task.css";

const Task = ({
  title,
  completeList,
  setCompleteList,
  incompleteList,
  setIncompleteList,
  complete,
}) => {
  const handleComplete = () => {
    let index = incompleteList.indexOf(title);
    setCompleteList([...completeList, incompleteList[index]]);
    setIncompleteList(incompleteList.filter((_, ind) => ind !== index));
  };
  const handleIncomplete = () => {
    let index = completeList.indexOf(title);
    setIncompleteList([...incompleteList, completeList[index]]);
    setCompleteList(completeList.filter((_, ind) => ind !== index));
  };
  const handleDelete = () => {
    let index = completeList.indexOf(title);
    setCompleteList(completeList.filter((_, ind) => ind !== index));
  };

  return (
    <div className="task">
      <h2>{title}</h2>
      <button
        type="button"
        onClick={complete ? handleIncomplete : handleComplete}
      >
        Mark as {complete ? "in" : null}complete
      </button>
      {complete ? (
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      ) : null}
    </div>
  );
};

export default Task;
