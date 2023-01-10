import { useEffect, useState, useRef } from "react";

import ToDoListInput from "../ToDoListInput/ToDoListInput";
import ToDoListTasks from "../ToDoListTasks/ToDoListTasks";

const INITIAL_STATE = [];
const INITIAL_STATUS_STATE = {
  Todo: true,
  Complete: false,
  Drop: false,
};

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(INITIAL_STATE);
  const [status, setStatus] = useState(INITIAL_STATUS_STATE);

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

  const handleInputSelectedOptions = (e) => {
    setStatus((prev) => {
      for (let key in prev) {
        if (key === e.target.value) prev[key] = true;
        else prev[key] = false;
      }
      return { ...prev };
    });
  };

  const addTask = (e) => {
    if (inputValue) {
      setTasks((prev) => [
        {
          id: Date.now(),
          task: inputValue,
          editable: false,
          status: { ...status },
        },
        ...prev,
      ]);
    }
    setInputValue("");
  };

  useEffect(() => {
    const tasksValues = window.localStorage.getItem("tasks");

    setTasks(JSON.parse(tasksValues));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  return (
    <>
      <div className="todo-container">
        <ToDoListInput
          inputValue={inputValue}
          handleChange={handleChange}
          addTask={addTask}
          setInputValue={setInputValue}
          status={status}
          handleInputSelectedOptions={handleInputSelectedOptions}
        />
        <ToDoListTasks tasks={tasks} setTasks={setTasks} status={status} />
      </div>
    </>
  );
};

export default ToDoList;
