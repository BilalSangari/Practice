import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { AnimatePresence, motion } from "framer-motion";

export const Todo = () => {
  const [task, setTask] = useState([]);

  // ✅ handle form submit here
  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.some((t) => t.text === inputValue)) return;

    setTask((prev) => [...prev, { text: inputValue, completed: false }]);
  };

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.text !== value);
    setTask(updatedTask);
  };

  const handleToggleComplete = (value) => {
    const updatedTask = task.map((curTask) =>
      curTask.text === value
        ? { ...curTask, completed: !curTask.completed }
        : curTask
    );
    setTask(updatedTask);
  };

  const handleClearButton = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>To Do List</h1>
        <TodoDate />
        <p className="author">By Masihullah Sangari</p>
      </header>

      {/* ✅ Input form */}
      <TodoForm onFormSubmit={handleFormSubmit} />

      {/* ✅ Todo List with animations */}
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

      {/* ✅ Clear button */}
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
