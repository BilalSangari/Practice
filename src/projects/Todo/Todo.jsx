import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState("all"); // 🔹 track current filter

  // ✅ handle form submit here
  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;

    // Prevent duplicates
    if (task.some((t) => t.text === inputValue)) return;

    // Add as object with completed = false
    setTask((prevTask) => [...prevTask, { text: inputValue, completed: false }]);
  };

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.text !== value);
    setTask(updatedTask);
  };

  const handleClearButton = () => {
    setTask([]);
  };

  const handleToggleComplete = (value) => {
    const updatedTask = task.map((curTask) =>
      curTask.text === value ? { ...curTask, completed: !curTask.completed } : curTask
    );
    setTask(updatedTask);
  };

  // ✅ count remaining active tasks
  const activeTasksCount = task.filter((t) => !t.completed).length;

  return (
    <section className="todo-container">
      <header>
        <h1>To Do List</h1>
        <TodoDate />
      </header>

      {/* ✅ Input form */}
      <TodoForm onFormSubmit={handleFormSubmit} />

      {/* ✅ Filter bar with task count */}
      <div className="filter-bar">
        <span className="task-count">{activeTasksCount} Active tasks left</span>
        <button
          className={filter === "all" ? "active-filter" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active-filter" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active-filter" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      {/* ✅ List */}
      <section className="myUnOrdList">
        <ul>
          {task
            .filter((t) => {
              if (filter === "active") return !t.completed;
              if (filter === "completed") return t.completed;
              return true; // "all"
            })
            .slice()
            .sort((a, b) => a.completed - b.completed)
            .map((curTask, index) => (
              <TodoList
                key={index}
                data={curTask}
                onHandleDeleteTodo={handleDeleteTodo}
                onToggleComplete={handleToggleComplete}
              />
            ))}
        </ul>
      </section>

      {/* ✅ Clear button */}
      <section>
        <button className="clear-btn" onClick={handleClearButton}>
          Clear All
        </button>
      </section>
    </section>
  );
};
