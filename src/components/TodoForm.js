import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full mb-4">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="text-white outline-none bg-transparent border-2 px-3 py-2 border-[#8758ff81] mt-4 mb-8 w-[300px] placeholder:text-[#ffffff4d]" placeholder='What is the task today?' />
      <button type="submit" className='bg-[#8758ff] text-white border-none p-[0.625rem] cursor-pointer '>Add Task</button>
    </form>
  )
}
 