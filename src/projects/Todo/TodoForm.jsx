export const TodoForm = ({ inputValue, setInputValue, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What do you need to get done?"
        autoComplete="off"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
