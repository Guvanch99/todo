import S from './RemovedTodos.module.css'
import {useTodos} from "../../hook/useTodos";

const RemovedTodos=()=>{
  const {filteredTodos}=useTodos()
  return(
<ul className={S.list}>
    {
      filteredTodos('REMOVED').map((item:any) => (
        <li className={S.item} key={item.id}>
          <p className={S.text}>{item.info}</p>
        </li>
      ))
    }
  </ul>
  )
}

export default RemovedTodos
