import { type } from "@testing-library/user-event/dist/type";

// Icons
import { MdEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { MdDone } from "react-icons/md";

const TodoListTasks = ({
  tasks,
  deleteTask,
  editTask,
  setTasks,
  handleChangeEditValue,
  doneTask,
}) => {
  return (
    <>
      {tasks
        .slice(0)
        .reverse()
        .map((task, index) => (
          <div className="todo-list-tasks" key={index}>
            <div className="todo-list-task-element">
              <div className="task">
                <input
                  type="text"
                  value={task.task}
                  className="task-value"
                  onChange={(e) => handleChangeEditValue(e, task.id, setTasks)}
                  disabled={!task.editable}
                  style={{
                    textDecoration:
                      !task.editable && task.complete ? "line-through" : "none",
                  }}
                />
              </div>
              <div className="icon-section">
                <div
                  className="delete-button"
                  onClick={() => deleteTask(task.id)}
                >
                  <TiDeleteOutline />
                </div>
                <div
                  className="edit-button"
                  onClick={() => editTask(task.id, setTasks)}
                >
                  <MdEdit />
                </div>
                <div
                  className="done-button"
                  onClick={() => doneTask(task.id, setTasks)}
                >
                  <MdDone />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default TodoListTasks;
