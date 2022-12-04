import { useEffect, useState, useRef } from "react";

import ToDoListInput from "./TodoListInput";
import TodoListTasks from "./ToDoListTasks";

// id: 0, task: "", editable: false
const INITIAL_STATE = [];

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(INITIAL_STATE);
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
    if (inputValue) {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), task: inputValue, editable: false },
      ]);
    }
    // clearTodoInput();
    setInputValue("");
  };

  const deleteTask = (selectedIndex) => {
    setTasks((prev) => prev.filter((task) => selectedIndex !== task.id));
  };

  const editTask = (selectedIndex) => {
    setTasks(
      tasks.map((task) =>
        task.id === selectedIndex
          ? { ...task, editable: !task.editable }
          : { ...task, editable: false }
      )
    );

    const spanElement = document.getElementsByClassName("task-value");
    console.log(spanElement[0].innerHTML);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      <div className="todo-container">
        <header className="todo-header">To Do List</header>
        <ToDoListInput
          inputValue={inputValue}
          handleChange={handleChange}
          addTask={addTask}
          setInputValue={setInputValue}
        />
        <TodoListTasks
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </>
  );
};

export default ToDoList;
