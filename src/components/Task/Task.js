import { MdEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { MdDone } from "react-icons/md";
import { TbTrash } from "react-icons/tb";

import { useState } from "react";

import "./task.css";

const Task = ({
  task,
  editTask,
  setTasks,
  deleteTask,
  handleChangeEditValue,
  doneTask,
}) => {
  return (
    <div className="todo-list-tasks" key={task.id}>
      <div className="todo-list-task-element">
        <div className="task">
          <input
            type="text"
            value={task.task}
            title={task.task}
            className="task-value"
            onChange={(e) => handleChangeEditValue(e, task.id, setTasks)}
            disabled={!task.editable}
          />
        </div>

        <div className="icon-section">
          <div
            className="delete-button"
            onClick={() => deleteTask(task.id, setTasks)}
          >
            <TbTrash />
          </div>
          <div
            className="edit-button"
            onClick={() => editTask(task.id, setTasks)}
          >
            <MdEdit />
          </div>

          <div className="dropdown">
            <div className="done-button">
              {task.status.Todo ? <MdDone /> : <TiDeleteOutline />}
            </div>
            <div className="dropdown-content">
              <ul>
                {Object.keys(task.status).map((key) => {
                  if (task.status[key] == false)
                    return (
                      <li
                        key={key}
                        onClick={
                          !task.editable
                            ? () => doneTask(task.id, key, setTasks)
                            : undefined
                        }
                        style={{ cursor: task.editable && "no-drop" }}
                      >
                        {key}
                      </li>
                    );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
