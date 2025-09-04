import { MdCheckCircle, MdDeleteForever } from "react-icons/md"

export const TodoList = ({index ,data ,onHandleDeleteTodo}) => {
    return(
            <li className="todo-item">
                <span>{data}</span>
                <button className="check-btn"><h6><MdCheckCircle /></h6></button>
                <button 
                    className="delete-btn" 
                    onClick={() => onHandleDeleteTodo(data)}
                >
                    <h6><MdDeleteForever /></h6>
                </button>
            </li>
             )
}