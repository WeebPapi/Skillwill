import React from "react";
import "./styles.css";
import Task from "./Task";

const NotComplete = ({
  completeList,
  setCompleteList,
  incompleteList,
  setIncompleteList,
}) => {
  return (
    <div className="not-complete">
      <div className="list-header" style={{ borderColor: "crimson" }}>
        <h1>Backlog</h1>
        <div className="dividing-line"></div>
        <h1>{incompleteList.length}</h1>
      </div>
      <div className="list">
        {incompleteList.map((item, index) => (
          <Task
            title={item}
            key={index}
            completeList={completeList}
            setCompleteList={setCompleteList}
            incompleteList={incompleteList}
            setIncompleteList={setIncompleteList}
            complete={false}
          />
        ))}
      </div>
    </div>
  );
};

export default NotComplete;
