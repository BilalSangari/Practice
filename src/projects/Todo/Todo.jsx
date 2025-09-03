import { useEffect, useState } from "react";
import "./Todo.css"
import { MdCheckCircle ,MdDeleteForever } from "react-icons/md";
import { TodoForm } from "./TodoForm";

export const Todo = () => {
   
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

  

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;

        if (task.includes(inputValue)) {
            setInputValue("")
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("")
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000)
        
        return () => clearInterval(interval);
    },[]);

    const handleDeleteTodo = (value) => {
        console.log(task);
        console.log(value)
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    }
    
        //Todo Clear Button
    const handleClearButton = () => {
        setTask([])
    }

    return (
        <section className="todo-container">
            <header>
                <h1>To Do List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>
            <TodoForm />

            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask,index) => {
                        return(
                            <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn"><h6><MdCheckCircle /></h6></button>
                                <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}><h6><MdDeleteForever /></h6></button>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
            </section>
        </section>
    )
}