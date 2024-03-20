import React, { useState } from "react";
import './TodoForm.css'

export default function TodoForm({addTodo}) { 
    const [value, setValue] = useState("")
    
    const handleSubmit = e => { 
        e.preventDefault();

        if( value !== "") { 
            addTodo(value);
        }
        setValue("");
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} className="input" placeholder='Input task' onChange={(e) => setValue(e.target.value)}/>
            <button className="button-sub" type="submit">Add task</button>
        </form>
    );
}