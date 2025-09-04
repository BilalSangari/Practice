import { useEffect, useState } from "react";
import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

    // ✅ handle form submit here
    const handleFormSubmit = (inputValue) => {
        if (!inputValue) return;

        if (task.includes(inputValue)) {
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    }
    
    const handleClearButton = () => {
        setTask([]);
    }

    return (
        <section className="todo-container">
            <header>
                <h1>To Do List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>

            {/* ✅ Pass the submit function down */}
            <TodoForm onFormSubmit={handleFormSubmit} />

            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask,index) => {
                        return(
                            <TodoList key={index} index={index} data={curTask} onHandleDeleteTodo={handleDeleteTodo} />
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
