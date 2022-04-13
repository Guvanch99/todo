import {apiClient} from "../core/apiClient";
import {useMutation, useQuery, useQueryClient} from 'react-query'
import {TTodo} from "../types";

enum QuerriesKey{
  getTodo='getTodo',
  changeStatus='changeStatus'
}


async function changeStatus(
  {todoId, status}:{todoId:number, status:'REMOVED'|'IN_PROGRESS'|'COMPLETED'}
){
  try {
    console.log('t', todoId)
  await apiClient.post('/SetTaskType', {
    taskId:todoId,
    TaskType:status
    })
  }
  catch (e){
    throw new Error('Something went wrong')
  }
}


async function getTodos(id?:number):Promise<TTodo[]>{
try {
  const response=await apiClient.post(`/GetTasksForSession/${id}`)
  return response.data
}catch (e:any){
  throw new Error(e)
}
}

async function addTodos(todo:string,id?:number):Promise<void>{
  try {
  await apiClient.post('/AddTask', {
      Info:todo,
      SessionId:id
    })
  }catch (e:any){
    throw new Error(e)
  }
}

export const useAddTodo=()=>{
  const queryClient = useQueryClient()
  return useMutation<void,Error ,{todo:string,id?:number}>(
    ({todo, id})=>addTodos(todo,id),
    {onSuccess:()=>queryClient.invalidateQueries(QuerriesKey.getTodo)}
  )
}

export const useGetTodos= (id?: number)=>{
  const key=QuerriesKey.getTodo
  return useQuery(key,()=>getTodos(id), {enabled:!!id})
}

export const useStatusMutation=()=>{
  const queryClient = useQueryClient()
  return useMutation<void, Error, {todoId:number, status:'REMOVED'|'IN_PROGRESS'|'COMPLETED'}>(
    ({todoId:number, status})=>changeStatus({todoId:number, status}),
    {onSuccess:()=>queryClient.invalidateQueries(QuerriesKey.getTodo)}
    )
}



