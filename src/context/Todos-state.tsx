import {useState, FC} from 'react'

import TodosContext from './context'


export type TTodos={
  id:number
  status:'REMOVED'|'IN_PROGRESS'
}

const TodosState: FC = ({children}) => {

const [todos, setTodos]=useState<any>([
  {
    id:1,
    status:'REMOVED',
    todo:'aaa'
  },
  {
    id:2,
    status:'COMPLETED',
    todo:'aa'
  },
  {
    id:3,
    status: 'IN_PROGRESS',
    todo: 'a'
  }

])

  return (
    <TodosContext.Provider value={{todos,setTodos}}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosState