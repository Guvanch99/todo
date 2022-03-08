import S from './CompletedTodos.module.css'
import {FAKETODOS} from "../Todos/FakeData";
import CheckImg from '../../assets/check.png'

const CompletedTodos=()=>(
  <ul className={S.list}>
    {
      FAKETODOS.map(({id,status,todo})=>(
        <li className={S.item} key={id}>
          <img className={S.img} src={CheckImg}/>
          <del className={S.text}>{todo}</del>
        </li>
      ))
    }
  </ul>
)

export default CompletedTodos