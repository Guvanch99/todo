import S from './Todos.module.css'
import RemoveImg from '../../assets/remove.png'
import AddImg from '../../assets/plus.png'
import {useState} from "react";
import Modal from "../Modal/Modal";
import {useTodos} from "../../hook/useTodos";

const Todos=()=>{
  const [isModal, setModal]=useState<boolean>(false)
  const {handleAction,filteredTodos}=useTodos()
  return(
  <>
  <ul className={S.list}>
    {
      filteredTodos('IN_PROGRESS').map((item:any)=>(
       <li className={S.item} key={item.id}>
         <div className={S.emptyCircle} onClick={()=>handleAction(item.id,'COMPLETED')}/>
         <p className={S.text}>{item.info}</p>
           <img onClick={()=>handleAction(item.id,'REMOVED')} className={S.removeImg} src={RemoveImg} alt='remove img'/>
       </li>
      ))
    }
  </ul>
  <div className={S.container} onClick={()=>setModal(true)}>
    <img className={S.imgAdd} src={AddImg} alt='add img'/>
    <p className={S.addText}>Create New Item</p>
  </div>
    {isModal && <Modal setModal={setModal}/>}
  </>
)
}
export default Todos
