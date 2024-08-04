import React from "react";
import { useSelector } from "react-redux";
import { Task } from "../../components";
import { Link } from "react-router-dom";
import "./ListPage.css";

const ListPage = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div className="lists-wrapper">
      <div className="lists">
        <div className="incomplete-list">
          <h1>Incomplete Tasks</h1>
          {todos
            .filter((item) => !item.isComplete)
            .map((task) => (
              <Task
                key={task.id}
                name={task.name}
                id={task.id}
                isComplete={task.isComplete}
              />
            ))}
        </div>
        <div className="complete-list">
          <h1>Complete Tasks</h1>{" "}
          {todos
            .filter((item) => item.isComplete)
            .map((task) => (
              <Task
                key={task.id}
                name={task.name}
                id={task.id}
                isComplete={task.isComplete}
              />
            ))}
        </div>
      </div>
      <Link to={"/"}>To Entry</Link>
    </div>
  );
};

export default ListPage;
