const ToDoListInput = ({ handleChange, addTask }) => {
  return (
    <>
      <div className="todo-list-input-section">
        <input
          type="text"
          placeholder="Create To Do"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
    </>
  );
};

export default ToDoListInput;
