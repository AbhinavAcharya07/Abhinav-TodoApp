import React, { useState } from "react";
import "./ToDoBar.css";
const TodoBar = (props) => {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setTodoDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    props.onNewItem(todoName, todoDueDate);
    setTodoName("");
    setTodoDueDate("");
  };

  return (
    <div className="bar">
      <div className="input">
        <div className="full1">
          <input
            className="full"
            type="text"
            placeholder="Enter Todo"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="full1">
          <input
            className="full"
            id="dateCursor"
            type="date"
            value={todoDueDate}
            onChange={handleDueDateChange}
          />
        </div>

        <div className="full1">
          <button
            className="full"
            id="butt"
            onClick={handleAddButtonClick}
            disabled={todoName.trim() === "" || todoDueDate.trim() === ""}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoBar;
