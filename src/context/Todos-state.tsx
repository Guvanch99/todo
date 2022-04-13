import {useState, FC, useEffect} from 'react'
import TodosContext from './context'
import {TTodo} from "../types";
import {useGetTodos, useStatusMutation} from "../components/querries";

const TodosState: FC = ({children}) => {
 const [todos, setTodos]=useState<TTodo[]>([])
  const [todoId, setTodoId]=useState<number>()

  useEffect(() => {
    const id = sessionStorage.getItem('id');
    if (id)
      setTodoId(Number(id))
    else
      setTodoId(  Math.floor(Math.random()*100)+1)

  }, [])

  useEffect(() => {
    if(todoId){
      sessionStorage.setItem('id', todoId.toString())
    }
  }, [todoId])

  const {data}=useGetTodos(todoId)
  const {mutate}=useStatusMutation()
  const filteredTodos=(type:'REMOVED'|'IN_PROGRESS'|'COMPLETED')=>{
   if(data){
    return  data.filter((todo:TTodo)=>todo.type===type)
   }else{
     return []
   }
  }
  
  const handleAction = (taskId:number, type:'REMOVED'|'IN_PROGRESS'|'COMPLETED') => {
    mutate({todoId:taskId,status:type})
  }

  const createTodo=(newTodo:string)=>{
  const createdTodo:TTodo={
      id:Date.now(),
      type: 'IN_PROGRESS',
      info: newTodo
  }
  setTodos([...todos,createdTodo])
  }

  return (
    <TodosContext.Provider value={{todos,filteredTodos,createTodo,todoId,handleAction }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosState
