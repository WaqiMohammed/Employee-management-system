import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='overflow-x-auto h-[55%] flex items-center justify-start gap-5 flex-nowrap mt-10 py-5 w-full'>
      <div className='shrink-0 h-full w-75 p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3  text-sm py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Create a Function in a Project</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed ea voluptates dolores dolor aut blanditiis dolore illo.
        </p>
      </div>
    </div>
  )
}

export default TaskList