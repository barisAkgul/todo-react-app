import { useEffect, useState, useRef } from "react";

import ToDoListInput from "./TodoListInput";
import TodoListTasks from "./ToDoListTasks";

const INITIAL_STATE = { task: "", editable: false };

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskIsUpdate, setTaskIsUpdate] = useState(false);
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearTodoInput = () => {
    const inputElement = document.querySelectorAll("input");
    inputElement[0].value = "";

    setInputValue("");
  };

  const addTask = (e) => {
    // e.preventDefault();
    if (inputValue) {
      setTasks((prev) => [...prev, inputValue]);
    }
    clearTodoInput();
  };

  const deleteTask = (selectedIndex) => {
    setTasks((prev) => prev.filter((task, index) => selectedIndex !== index));
  };

  const editTask = (selectedIndex) => {
    setTaskIsUpdate(!taskIsUpdate);
    console.log(selectedIndex);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      <div className="todo-container">
        <header className="todo-header">To Do List</header>
        <ToDoListInput handleChange={handleChange} addTask={addTask} />
        <TodoListTasks
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          taskIsUpdate={taskIsUpdate}
        />
      </div>
    </>
  );
};

export default ToDoList;
