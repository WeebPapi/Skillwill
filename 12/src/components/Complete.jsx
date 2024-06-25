import React from "react";
import "./styles.css";
import Task from "./Task";

const Complete = ({
  completeList,
  setCompleteList,
  incompleteList,
  setIncompleteList,
}) => {
  return (
    <div className="complete">
      <h1>Complete</h1>
      <div className="list">
        {completeList.map((item, index) => (
          <Task
            title={item}
            key={index}
            completeList={completeList}
            setCompleteList={setCompleteList}
            incompleteList={incompleteList}
            setIncompleteList={setIncompleteList}
            complete={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Complete;
