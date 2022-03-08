import S from './Todos.module.css'
import {FAKETODOS} from "./FakeData";
import RemoveImg from '../../assets/remove.png'
import AddImg from '../../assets/plus.png'
import {useState} from "react";
import Modal from "../Modal/Modal";

const Todos=()=>{
  const [isModal, setModal]=useState<boolean>(false)
return(
  <>
  <ul className={S.list}>
    {
      FAKETODOS.map(({id,status,todo})=>(
       <li className={S.item} key={id}>
         <div className={S.emptyCircle}/>
         <p className={S.text}>{todo}</p>
           <img className={S.removeImg} src={RemoveImg} alt='remove img'/>
       </li>
      ))
    }
  </ul>
  <div className={S.container} onClick={()=>setModal(true)}>
    <img className={S.imgAdd} src={AddImg} alt='add img'/>
    <p className={S.addText}>Create New Item</p>
  </div>
    {
      isModal && <Modal/>
    }

  </>
)
}
export default Todos