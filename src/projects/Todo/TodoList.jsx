import { MdCheckCircle, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, onHandleDeleteTodo, onToggleComplete }) => {
  return (
    <li className={`todo-item ${data.completed ? "completed" : ""}`}>
      <span>{data.text}</span>

      {/* ✅ Toggle complete */}
      <button
        className="check-btn"
        onClick={() => onToggleComplete(data.text)}
      >
        <h6>
          <MdCheckCircle
            color={data.completed ? "green" : "gray"} // ✅ color changes when done
          />
        </h6>
      </button>

      {/* ✅ Delete task */}
      <button
        className="delete-btn"
        onClick={() => onHandleDeleteTodo(data.text)}
      >
        <h6>
          <MdDeleteForever />
        </h6>
      </button>
    </li>
  );
};
