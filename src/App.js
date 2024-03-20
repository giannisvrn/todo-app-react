import React, { useState } from 'react';
import './App.css';
import Todo from './Todo.js'
import TodoForm from './TodoForm.js'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export default function App()  { 
  const [todos, setTodods] = useState([])

  const addTodo = todo => { 
    setTodods([...todos, {id: uuidv4(), task: todo, completed:false }])
    console.log(todos)
  }

  const toggleComplete = id => { 
    setTodods(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  
  const deleteTodo = id => { 
    setTodods(todos.filter(todo => todo.id !== id))
  }

  return ( 
    <div className='main-app'>
      Todos
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo,index) => (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      ))}
    </div>
  );
}