import { MdEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

const TodoListTasks = ({ tasks, deleteTask, editTask, taskIsUpdate }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <div className="todo-list-tasks" key={index}>
          <div className="todo-list-task-element">
            <div className="task">
              <span
                className="task-value"
                contentEditable={taskIsUpdate}
                suppressContentEditableWarning={taskIsUpdate}
              >
                {task}
              </span>
            </div>
            <div className="icon-section">
              <div className="delete-button" onClick={() => deleteTask(index)}>
                <TiDeleteOutline />
              </div>
              <div className="edit-button" onClick={() => editTask(index)}>
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

{
  <div className="todo-list-task-element">
    <div className="task">asdasdasfdsfdsf</div>
    <div className="icon-section">
      <div className="delete-button">
        <TiDeleteOutline />
      </div>
      <div className="edit-button">
        <MdEdit />
      </div>
    </div>
  </div>;
}
