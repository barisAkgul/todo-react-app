import { MdEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

const TodoListTasks = ({
  tasks,
  deleteTask,
  editTask,
  setTasks,
  handleChange,
  setEditValue,
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
                <span
                  className="task-value"
                  // onChange={(e) => handleChange(e, setEditValue)}
                  contentEditable={task.editable}
                  suppressContentEditableWarning={task.editable}
                >
                  {task.task}
                </span>
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
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default TodoListTasks;

// {
//   <div className="todo-list-task-element">
//     <div className="task">asdasdasfdsfdsf</div>
//     <div className="icon-section">
//       <div className="delete-button">
//         <TiDeleteOutline />
//       </div>
//       <div className="edit-button">
//         <MdEdit />
//       </div>
//     </div>
//   </div>;
// }
