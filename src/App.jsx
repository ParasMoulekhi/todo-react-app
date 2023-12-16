import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Learn React",
      dueDate: "Right Now",
    },
  ];

  let [todoItems, setTodoItems] = useState([]);
  // let [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // Update state from previous state
    // Spread Operator
    /*
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ]; */

    // Functional update
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
