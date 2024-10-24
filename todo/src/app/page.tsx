'use client';

import { Tasks } from '@/components/task';
import { TaskInput } from '@/components/taskInput';
import axios from 'axios';
import { Search } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

export default function Home() {
  const [filtering, setFiltering] = useState('');

  const submitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jsonBody = JSON.stringify({ title: formData.get('task') });
    console.log(jsonBody);

    try {
      const response = await axios.post('http://localhost:3050/tasks', {
        title: formData.get('task'),
      });

      console.log('Requête réussie:', response.status);
      if (response.status === 201 || response.status === 200) {
        window.location.reload();
      } else {
        alert('Une erreur est survenue lors de la création de la tâche.');
      }
    } catch (error) {
      console.error('Erreur de la requête:', error);
      alert(error);
    }
  };


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
        <div className='rounded-lg w-[60%] mx-auto mt-6 p-3 flex gap-x-2 bg-gray-900 items-center'>
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
        <TaskInput submitForm={submitForm} />
        <Tasks filtering={filtering.length > 1 ? filtering : undefined} />
      </div>
    </div>
  );
}
