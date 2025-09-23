import React from "react";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoname={item.name}
          tododuedate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
