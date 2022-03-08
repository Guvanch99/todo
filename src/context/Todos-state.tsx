import {useState, FC} from 'react'

import TodosContext from './context'


const TodosState: FC = ({children}) => {

const [todos, setTodos]=useState<any>()

  return (
    <TodosContext.Provider value={{todos,setTodos}}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosState