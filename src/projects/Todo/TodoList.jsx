import { MdCheckCircle, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ tasks, onHandleDeleteTodo, onToggleComplete }) => {
  return (
    <ul>
      {tasks.map((data, index) => (
        <li key={index} className={`todo-item ${data.completed ? "completed" : ""}`}>
          <span>{data.text}</span>

          <button
            className={`icon-btn check-btn ${data.completed ? "active" : ""}`}
            onClick={() => onToggleComplete(data.text)}
            aria-label={data.completed ? "Mark as not completed" : "Mark as completed"}
            title={data.completed ? "Mark as not completed" : "Mark as completed"}
          >
            <h6><MdCheckCircle /></h6>
          </button>

          <button
            className="icon-btn delete-btn"
            onClick={() => onHandleDeleteTodo(data.text)}
            aria-label="Delete task"
            title="Delete task"
          >
            <h6><MdDeleteForever /></h6>
          </button>
        </li>
      ))}
    </ul>
  );
};
