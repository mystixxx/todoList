import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  useEffect(() => {
    AOS.init(); 
  })
  
  return (
    <div className="flex justify-between items-center bg-[#8758ff] text-white px-3 py-4 rounded-md mb-4 cursor-pointer" data-aos="zoom-in">
        <p className={`${task.completed ? 'text-[#c5aeff] line-through' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className="ml-3"/>
        </div>
    </div>
  )
}
