import React, { useState, useEffect } from "react";
import TodoBar from "./TodoBar/TodoBar";
import TodoItems from "./TodoItems/TodoItems";
import WelcomeMsg from "./WelcomeMsg/WelcomeMsg";

function App() {
  const [todoItems, setTodoItems] = useState(() => {
    // 1. Load data from Local Storage on initial render
    const storedItems = localStorage.getItem("todoItems");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      const currentDate = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD' format

      // 2. Filter out items with an outdated due date
      return parsedItems.filter((item) => {
        // Assuming your item.dueDate is in 'YYYY-MM-DD' format
        return item.dueDate >= currentDate;
      });
    }
    return [];
  });

  // 3. Save to-do items to Local Storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newtodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newtodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newDoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newDoItems);
  };

  return (
    <div className="appBlack">
      <div className="submitBlack">
        <center>
          <h1>TO DO APP</h1>
          <TodoBar onNewItem={handleNewItem} />
          {/* 4. Show Welcome Message only if there are no items */}
          {todoItems.length === 0 && <WelcomeMsg />}
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
        </center>
      </div>
    </div>
  );
}

export default App;
