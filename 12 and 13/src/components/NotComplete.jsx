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
      <h1>Incomplete</h1>
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
