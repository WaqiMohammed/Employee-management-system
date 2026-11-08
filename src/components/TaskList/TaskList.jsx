import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='overflow-x-auto h-[55%] flex items-center justify-start gap-5 flex-nowrap mt-10 py-5 w-full'>
      <div className='shrink-0 h-full w-75 bg-red-400 rounded-xl'>
        <div>
          <h3 className='bg-red-600 '>High</h3>
        </div>
      </div>
      
    </div>
  )
}

export default TaskList