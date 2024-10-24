'use client';

import { Tasks } from '@/components/task';
import { TaskInput } from '@/components/taskInput';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [filtering, setFiltering] = useState('');

  return (
    <div className=' w-full h-screen overflow-scroll'>
      <div className=' mx-auto w-[90%] p-3'>
        <h1 className=' text-center font-bold mt-6 text-3xl'>
          Welcome to the Todo List App
        </h1>
        <p className=' text-center font-bold mt-3'>
          You can add all your tasks here to manage them. Let&apos;s see how you
          can grow your productivity
        </p>
        <div className='rounded-lg w-[60%] mx-auto mt-6 p-3 flex gap-x-2 bg-zinc-900 items-center'>
          <Search color='#f1f1f1' />
          <input
            type='search'
            name='finder'
            id='finder'
            onKeyUp={(e) => setFiltering(e.currentTarget.value)}
            className=' outline-none bg-transparent w-full h-full'
            placeholder='Search something...'
          />
        </div>
        <TaskInput />
        <Tasks filtering={filtering.length > 1 ? filtering : undefined} />
      </div>
    </div>
  );
}
