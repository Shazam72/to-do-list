import useSWR, { Fetcher } from 'swr';
import { TaskInterface } from './components/task';


const fetcher: Fetcher<TaskInterface[], string> = (...args) => fetch(...args).then((res) => res.json());

function Profile() {
  

  
}
