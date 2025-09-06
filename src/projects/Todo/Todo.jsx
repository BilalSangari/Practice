import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
  const [task, setTask] = useState([]);

  // ✅ handle form submit
  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;

    // prevent duplicates
    if (task.some((t) => t.text === inputValue)) {
      return;
    }

    // add as an object { text, completed }
    setTask((prevTask) => [
      ...prevTask,
      { text: inputValue, completed: false },
    ]);
  };

  // ✅ delete task
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.text !== value);
    setTask(updatedTask);
  };

  // ✅ toggle complete
  const handleToggleComplete = (value) => {
    const updatedTask = task.map((curTask) =>
      curTask.text === value
        ? { ...curTask, completed: !curTask.completed }
        : curTask
    );
    setTask(updatedTask);
  };

  // ✅ clear all
  const handleClearButton = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>To Do List</h1>
        <TodoDate />
      </header>

      {/* ✅ Pass the submit function down */}
      <TodoForm onFormSubmit={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <TodoList
                key={index}
                data={curTask}
                onHandleDeleteTodo={handleDeleteTodo}
                onToggleComplete={handleToggleComplete} // ✅ pass toggle
              />
            );
          })}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearButton}>
          Clear All
        </button>
      </section>
    </section>
  );
};
