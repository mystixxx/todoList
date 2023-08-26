import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full mb-4">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="text-white outline-none bg-transparent border-2 px-3 py-2 border-[#8758ff81] mt-4 mb-8 w-[300px] placeholder:text-[#ffffff4d]" placeholder='Update task' />
      <button type="submit" className='bg-[#8758ff] text-white border-none p-[0.625rem] cursor-pointer'>Update Task</button>
    </form>
  )
}
