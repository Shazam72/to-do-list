import { useState } from 'react';
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

export const Tasks =  ({
  filtering,
}: {
  filtering?: string;
}) => {
    const { data, error, isLoading } = useSWR('http://localhost:3050/tasks', fetcher);
    const [tasks, setTasks] = useState<TaskInterface[]>([])
  const finalTask = filtering ? [] : tasks;

  if(error) return <>Some error...</>;

  if(isLoading) return <span className='loading loading-dots loading-lg'></span>;

  if(data) setTasks(data);

  return (
    <div className=' flex flex-col gap-y-3 mt-6 mx-auto w-[60%]'>
      {finalTask.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

const Task = ({ task }: { task: TaskInterface }) => (
  <div className=' flex gap-x-6 indicator w-full p-2 items-center bg-gray-950 rounded-lg border-slate-600 border'>
    <input
      type='checkbox'
      defaultChecked={task.isCompleted}
      className='checkbox border-white border-2'
    />
    <span className=' font-bold p-2'>{task.title}</span>
    <span className='indicator-item badge'>
      {task.isCompleted ? 'done' : 'waiting'}
    </span>
  </div>
);
