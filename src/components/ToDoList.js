import { useEffect, useState, useRef } from "react";

import ToDoListInput from "./TodoListInput";
import TodoListTasks from "./ToDoListTasks";

// id: 0, task: "", editable: false
const INITIAL_STATE = [];

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(INITIAL_STATE);

  const handleChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  const handleChangeEditValue = (e, selectedIndex, setStateFunction) => {
    setStateFunction(
      tasks.map((task) =>
        task.id === selectedIndex
          ? { ...task, task: e.target.value }
          : { ...task, task: task.task }
      )
    );
  };

  const addTask = (e) => {
    if (inputValue) {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), task: inputValue, editable: false, complete: false },
      ]);
    }
    setInputValue("");
  };

  const deleteTask = (selectedIndex) => {
    setTasks((prev) => prev.filter((task) => selectedIndex !== task.id));
  };

  const editTask = (selectedIndex, setStateFunction) => {
    setStateFunction(
      tasks.map((task) =>
        task.id === selectedIndex
          ? { ...task, editable: !task.editable }
          : { ...task, editable: false }
      )
    );
  };

  const doneTask = (selectedIndex, setStateFunction) => {
    setStateFunction(
      tasks.map((task) =>
        task.id === selectedIndex
          ? { ...task, complete: !task.complete }
          : { ...task, complete: task.complete }
      )
    );
  };

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
          setTasks={setTasks}
          doneTask={doneTask}
          handleChangeEditValue={handleChangeEditValue}
        />
      </div>
    </>
  );
};

export default ToDoList;
