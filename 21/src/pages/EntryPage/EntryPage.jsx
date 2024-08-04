import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const EntryPage = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: { name: value, isComplete: false, id: nanoid(10) },
    });
    setValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <input
            autoFocus
            ref={inputRef}
            placeholder="Enter Task"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button>Add Task</button>
        </form>
      </div>
      <Link to={"/list"}>To List</Link>
    </div>
  );
};

export default EntryPage;
