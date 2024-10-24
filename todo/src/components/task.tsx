import axios from 'axios';
import { Trash2 } from 'lucide-react';
import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<TaskInterface[], string> = (...args) =>
  fetch(...args).then((res) => res.json());

export interface TaskInterface {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const Tasks = ({ filtering }: { filtering?: string }) => {
  const { data, error, isLoading } = useSWR(
    'http://localhost:3050/tasks',
    fetcher
  );

  if (error)
    return (
      <div className=' flex gap-y-3 mt-6 mx-auto w-[60%] justify-center'>
        Some error...
      </div>
    );

  if (isLoading)
    return (
      <div className=' flex  gap-y-3 mt-6 mx-auto w-[60%] justify-center'>
        <span className='loading loading-dots loading-lg'></span>
      </div>
    );

  if (data) {
    const finalTask = filtering
      ? data.filter((item) =>
          item.title.toLowerCase().includes(filtering.toLowerCase())
        )
      : data;

    return (
      <div className=' flex flex-col gap-y-3 mt-6 mx-auto w-[60%]'>
        {finalTask.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    );
  }
  return <></>;
};

const Task = ({ task }: { task: TaskInterface }) => {
  const updateTask = async (taskId: number) => {
   const res = await axios
      .put('http://localhost:3050/tasks/' + taskId)

       if (res.status === 200 || res.status === 201) window.location.reload();
       else alert('Une erreur est survenue lors de la mise à jour de la tâche.');
  };

  const deleteTask = async (taskId: number) => {
    const res = await axios.delete('http://localhost:3050/tasks/' + taskId);

    if (res.status === 200 || res.status === 204)  window.location.reload();
    else alert('Une erreur est survenue lors de la suppression de la tâche.');
  }
 
  return (
    <div className=' flex gap-x-6 indicator w-full p-2 items-center justify-between pr-20 bg-gray-950 rounded-lg border-slate-600 border'>
      <input
        type='checkbox'
        defaultChecked={task.isCompleted}
        onClick={(e) => {
          e.preventDefault();
          updateTask(task.id);
        }}
        className='checkbox border-white border-2'
      />
      <span className=' font-bold p-2'>{task.title}</span>
      <Trash2 className=' cursor-pointer' color='#f1f1f1' size={30} onClick={(e) => {e.preventDefault(); deleteTask(task.id)}} />
      <span className={`indicator-item badge text-white font-bold ${task.isCompleted ? 'bg-green-700' : 'bg-orange-600'}`}>
        {task.isCompleted ? 'done' : 'waiting'}
      </span>
    </div>
  );
};
