import React, { useCallback } from "react";
import "./Task.css";

const Task = ({
  title,
  completeList,
  setCompleteList,
  incompleteList,
  setIncompleteList,
  complete,
}) => {
  const handleComplete = useCallback(() => {
    let index = incompleteList.indexOf(title);
    setCompleteList((prev) => [...prev, incompleteList[index]]);
    setIncompleteList((prev) => prev.filter((_, ind) => ind !== index));
  }, [title]);
  const handleIncomplete = useCallback(() => {
    let index = completeList.indexOf(title);
    setIncompleteList((prev) => [...prev, completeList[index]]);
    setCompleteList((prev) => prev.filter((_, ind) => ind !== index));
  }, [title]);
  const handleDelete = useCallback(() => {
    let index = completeList.indexOf(title);
    setCompleteList((prev) => prev.filter((_, ind) => ind !== index));
  }, [title]);

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

export default React.memo(Task);
