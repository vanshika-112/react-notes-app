import React, { useState } from 'react'
import {X} from 'lucide-react'

const App = () => {  
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [task, setTask] = useState([])

  const submitHandling = (e) => {
    e.preventDefault();
    
    const copyTask = [...task];
    copyTask.push({title, desc});
    setTask(copyTask)

    setTitle('')
    setDesc('')
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-[#ffe4e1] text-[#623e62]'>
      <div className='p-10 lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <form onSubmit={(e) =>{submitHandling(e)}} 
        className='flex gap-4 w-full items-start flex-col mt-5'>

          <input type='text' placeholder='Title'
          className='px-5 bg-[#cfdbc5] w-full font-medium py-2 border outline-none rounded'
          value={title}
          onChange={(e) =>{
            setTitle(e.target.value)
          }}/>

          <input type='textarea' placeholder='Description'
          className='px-5 bg-[#cfdbc5] w-full font-medium h-32 py-2 flex items-start flex-row border outline-none rounded'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}/>

          <button className='font-medium bg-[#e0f7fa] w-full outline-none border'>Add Note</button>
        </form>
      </div>

      <div className='lg:w-1/2 h-1/2 lg:h-full bg-[#cfdbc5] p-10 lg:border-l-2 '>
        <h1 className='text-3xl font-bold'>Your Notes:</h1>
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full'>
          {task.map(function(elem, idx){
              return <div key={idx} className='h-52 w-40 rounded-2xl bg-[rgb(255,228,225)] p-3'>
                <button onClick={() => {deleteNote(idx)}}><X size={16} /></button>
                <h3 className='font-bold text-center'>{elem.title}</h3>
                <p className='font-mediumleading-tight text-center'>{elem.desc}</p>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App