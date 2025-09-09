import { MdCheckCircle, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, onHandleDeleteTodo, onHandleToggleComplete }) => {
  return (
    <li className={`todo-item ${data.completed ? "completed" : ""}`}>
      <span>{data.text}</span>

      <button
        className="icon-btn check-btn"
        onClick={() => onHandleToggleComplete(data.text)}
      >
        <MdCheckCircle />
      </button>

      <button
        className="icon-btn delete-btn"
        onClick={() => onHandleDeleteTodo(data.text)}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};
