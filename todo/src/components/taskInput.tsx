'use client'
import { Check } from "lucide-react";
import { FormEventHandler } from "react";





export const TaskInput = ({submitForm}: {submitForm: FormEventHandler<HTMLFormElement>}) => {

  return (
    <div className='collapse bg-gray-900 mt-6 w-[60%] mx-auto'>
      <input type='checkbox' />
      <div className='collapse-title text-lg font-bold p-0 flex items-center justify-center'>
        Click to add a task to your todo
      </div>
      <div className='collapse-content'>
        <form onSubmit={submitForm} className=' flex gap-x-2 items-center'>
          <input
            type='text'
            name='task'
            id='task'
            className=' bg-gray-950 text-white w-[80%] p-3 rounded-lg outline-none'
            placeholder='Type your task here...'
          />
          <button
            type='submit'
            className=' w-12 h-12 rounded-full flex justify-center items-center p-4 bg-gray-950'
          >
            <Check size={68} />
          </button>
        </form>
      </div>
    </div>
  );
};