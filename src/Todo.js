import React from "react";
import './Todo.css'
import deleteIcon from './delete-icon.png'

export default function Todo({ task, toggleComplete, deleteTodo }) {
    return (
        <div className="todo-container">
            <p onClick={() => toggleComplete(task.id)} className={`todo ${task.completed ? 'completed' : 'not-completed'}`}>
                {task.task}
            </p>
            <img src={deleteIcon} alt="Delete" className="delete-icon" onClick={() => deleteTodo(task.id)} />
        </div>
    );
}