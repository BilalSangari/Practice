import { useState } from "react";

export const TodoForm = ({ onFormSubmit }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(inputValue); // ✅ Call parent function
        setInputValue(""); // Clear input after submit
    };

    return(
        <section className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        className="todo-input" 
                        autoComplete="off" 
                        value={inputValue} 
                        onChange={(event) => handleInputChange(event.target.value)} 
                    />
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
        </section>
        
    )
}
