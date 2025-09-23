import React, { useState } from "react";
import TodoBar from "./TodoBar/TodoBar";
import TodoItems from "./TodoItems/TodoItems";
import WelcomeMsg from "./WelcomeMsg/WelcomeMsg";
const App = () => {
  const [todoItems, settodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item : ${itemName} date:${itemDueDate}`);
    const newtoDoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    settodoItems(newtoDoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newtoDoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newtoDoItems);
  };
  return (
    <div className="appBlack">
      <div className="submitBlack">
        <center>
          <h1>TO DO APP</h1>
          <TodoBar onNewItem={handleNewItem}></TodoBar>
          {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
          <TodoItems
            todoItems={todoItems}
            onDeleteClick={handleDeleteItem}
          ></TodoItems>
        </center>
      </div>
    </div>
  );
};

export default App;
