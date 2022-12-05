const ToDoListInput = ({
  handleChange,
  addTask,
  inputValue,
  setInputValue,
}) => {
  return (
    <>
      <div className="todo-list-input-section">
        <input
          type="text"
          placeholder="Create To Do"
          className="todo-input"
          value={inputValue}
          onChange={(e) => handleChange(e, setInputValue)}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
    </>
  );
};

export default ToDoListInput;
