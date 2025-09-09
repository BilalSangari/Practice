import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { AnimatePresence, motion } from "framer-motion";

export const Todo = () => {
  const [task, setTask] = useState([]);
  const [theme, setTheme] = useState("light"); // ✅ theme state

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.some((t) => t.text === inputValue)) return;

    setTask((prev) => [...prev, { text: inputValue, completed: false }]);
  };

  const handleDeleteTodo = (value) => {
    setTask((prev) => prev.filter((curTask) => curTask.text !== value));
  };

  const handleToggleComplete = (value) => {
    setTask((prev) =>
      prev.map((curTask) =>
        curTask.text === value
          ? { ...curTask, completed: !curTask.completed }
          : curTask
      )
    );
  };

  const handleClearButton = () => {
    setTask([]);
  };

  // ✅ Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <section className={`todo-container ${theme}`}>
      <header>
        <h1>To Do List</h1>
        <TodoDate />
        <p className="author">By Masihullah Sangari</p>

        {/* ✅ Theme Toggle Button */}
        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
        </motion.button>
      </header>

      <TodoForm onFormSubmit={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          <AnimatePresence>
            {task.map((curTask, index) => (
              <motion.div
                key={curTask.text}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <TodoList
                  index={index}
                  data={curTask}
                  onHandleDeleteTodo={handleDeleteTodo}
                  onHandleToggleComplete={handleToggleComplete}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </ul>
      </section>

      {task.length > 0 && (
        <motion.button
          className="clear-btn"
          onClick={handleClearButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Clear All
        </motion.button>
      )}
    </section>
  );
};
