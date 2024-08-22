import React, { useState,useEffect } from 'react'
import sticky from '../assets/sticky-note.png'
import './Todo.css'

const Todo = () => {

  const [todoList, setTodoList] = useState(() => {
    const savedTasks = localStorage.getItem('todoList');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);


  const add = () => {
    const valueInside = document.querySelector('.input-task').value;
    if(valueInside !== '') { 
      setTodoList([...todoList, valueInside]);
      document.querySelector('.input-task').value = '';
    }
    console.log(todoList);
  }

  const handleKeydown = (event) => {
    if (event.key === 'Enter') {
      add();
    }
  }

  const handleCheckboxChange = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };
  


  return (
    <div className='all-content'>
      <div className='logo'>
        <div className='come'>
          <img className='todo-logo' src={sticky}></img>
          <p className='Todo-go'>TODO LIST</p>
        </div>    
        <div className='mention-todo'>
          <input placeholder='Add task' type='text' className='input-task' onKeyDown={handleKeydown}></input>
          <button className='add-task' onClick={add}>Add</button>
        </div>
        <div className='task-here'>
          {todoList.map((task, index) => (
          <div className='task-1' key={index}>
            <p className='inside'>{task}</p>
            <input type='checkbox' className='checkbox' onChange={() => handleCheckboxChange(index)}
            ></input>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Todo