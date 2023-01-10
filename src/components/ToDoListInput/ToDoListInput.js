const ToDoListInput = ({
  handleChange,
  addTask,
  inputValue,
  setInputValue,
  status,
  handleInputSelectedOptions,
}) => {
  return (
    <>
      <div className="todo-list-input-section">
        <header className="todo-header">To Do List</header>
        <div className="input-and-select">
          <input
            type="text"
            placeholder="Create To Do"
            className="todo-input"
            value={inputValue}
            onChange={(e) => handleChange(e, setInputValue)}
          />
          <select
            className="todo-select"
            onChange={(e) => handleInputSelectedOptions(e)}
          >
            {/* <option value="Todo">Todo</option>
            <option value="Complete">Complete</option>
            <option value="Drop">Drop</option> */}
            {Object.keys(status).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
    </>
  );
};

export default ToDoListInput;
