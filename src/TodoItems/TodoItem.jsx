import React from "react";
import "./TodoItem.css";
const TodoItem = ({ todoname, tododuedate, onDeleteClick }) => {
  return (
    <>
      <div className="fullbar">
        <div className="inputBar">
          <div className="name">{todoname}</div>
          <div className="dueDate">{tododuedate}</div>
          <div className="delete1">
            <button
              className="delete"
              id="but"
              onClick={() => onDeleteClick(todoname)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
