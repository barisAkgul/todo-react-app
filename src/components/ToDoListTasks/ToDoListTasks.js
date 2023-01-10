import React, { useState, useRef, useEffect } from "react";

import Task from "../Task/Task.js";
import "./ToDoListTasks.css";
import Collabsible from "../Collabsible/Collabsible.js";

const TodoListTasks = ({ tasks, setTasks, status }) => {
  const handleChangeEditValue = (e, selectedIndex, setStateFunction) => {
    setStateFunction(
      tasks.map((task) =>
        task.id === selectedIndex
          ? { ...task, task: e.target.value }
          : { ...task, task: task.task }
      )
    );
  };

  const deleteTask = (selectedIndex, setStateFunction) => {
    setStateFunction((prev) =>
      prev.filter((task) => selectedIndex !== task.id)
    );
  };

  const editTask = (selectedIndex, setStateFunction) => {
    setStateFunction(
      tasks.map((task) => {
        const isFound = task.id === selectedIndex;
        return { ...task, editable: isFound && !task.editable };
      })
    );
  };

  const doneTask = (selectedIndex, statusKey, setStateFunction) => {
    const status = { ...tasks.status };

    setStateFunction((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.map((task) => {
        if (task.id === selectedIndex) {
          for (let key in task.status) {
            if (key === statusKey) task.status[key] = true;
            else task.status[key] = false;
          }
        }
      });

      return newTasks;
    });
  };

  const taskList = (key) => {
    let hasFoundEmpty = false;

    return tasks.map((task, index) => {
      if (!hasFoundEmpty && !task.status[key]) {
        hasFoundEmpty = true;
        return "Empty";
      }

      return (
        <Task
          key={index}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          setTasks={setTasks}
          doneTask={doneTask}
          handleChangeEditValue={handleChangeEditValue}
        />
      );
    });
  };

  return (
    <div className="task-container">
      {Object.keys(status).map((key) => (
        <Collabsible label={key} status={status} key={key}>
          {tasks.map((task, index) => {
            return (
              task.status[key] && (
                <Task
                  key={index}
                  task={task}
                  deleteTask={deleteTask}
                  editTask={editTask}
                  setTasks={setTasks}
                  doneTask={doneTask}
                  handleChangeEditValue={handleChangeEditValue}
                />
              )
            );
          })}
        </Collabsible>
      ))}
    </div>
  );
};

export default TodoListTasks;
