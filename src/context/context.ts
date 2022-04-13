import {createContext} from 'react'
import {TTodo} from "../types";

type TCreateContext={
  todos: TTodo[]
  filteredTodos: (status: 'REMOVED'|'IN_PROGRESS'|'COMPLETED') => any
  createTodo: (newTodo:string) => void,
  todoId?: number,
  handleAction:(taskId:number, type:'REMOVED'|'IN_PROGRESS'|'COMPLETED')=>void
}

const TodosContext = createContext({} as TCreateContext)

export default TodosContext
