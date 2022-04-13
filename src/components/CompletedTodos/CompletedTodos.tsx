import S from './CompletedTodos.module.css'
import CheckImg from '../../assets/check.png'
import {useTodos} from "../../hook/useTodos";

const CompletedTodos=()=> {
  const {filteredTodos}=useTodos()
 return <ul className={S.list}>
    {
      filteredTodos('COMPLETED').map((item:any) => (
        <li className={S.item} key={item.id}>
          <img className={S.img} src={CheckImg} alt={'check'}/>
          <p className={S.text}>{item.info}</p>
        </li>
      ))
    }
  </ul>
}

export default CompletedTodos
