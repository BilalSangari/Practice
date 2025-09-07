import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTask([...task, { text: inputValue.trim(), completed: false }]);
    setInputValue("");
  };

  const handleDeleteTodo = (text) => {
    setTask(task.filter((t) => t.text !== text));
  };

  const handleToggleComplete = (text) => {
    setTask(
      task.map((t) =>
        t.text === text ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleClearAll = () => {
    setTask([]);
  };

  const activeTasksCount = task.filter((t) => !t.completed).length;

  const filteredTasks = task.filter((t) => {
    if (filter === "all") return true;
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <header>
        <h1>To Do List</h1>
         <h3 className="author">by Masihullah Sangari</h3>
        <div style={{ display: "flex", gap: ".5rem", alignItems: "center", justifySelf: "end" }}>
          <TodoDate />
          <button
            className="chip"
            onClick={() => document.body.classList.toggle("theme-dark")}
          >
            Theme
          </button>
        </div>
      </header>

      {/* toolbar */}
      <div className="toolbar">
        <div className="chips">
          <button
            className={`chip ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`chip ${filter === "active" ? "active" : ""}`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={`chip ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <div className="count">
          <span>{activeTasksCount} active</span>
          <div
            className="progress"
            style={{
              "--value": `${
                task.length
                  ? (task.filter((t) => t.completed).length / task.length) * 100
                  : 0
              }%`,
            }}
          >
            <span />
          </div>
        </div>
      </div>

      <div className="form">
        <TodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleFormSubmit={handleFormSubmit}
        />
      </div>

      <div className="myUnOrdList">
        <TodoList
          tasks={filteredTasks}
          onHandleDeleteTodo={handleDeleteTodo}
          onToggleComplete={handleToggleComplete}
        />
      </div>

      {task.length > 0 && (
        <button className="clear-btn" onClick={handleClearAll}>
          Clear All
        </button>
      )}
    </div>
  );
};
