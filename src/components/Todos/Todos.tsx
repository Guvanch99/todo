import S from './Todos.module.css'
import RemoveImg from '../../assets/remove.png'
import AddImg from '../../assets/plus.png'
import {useState} from "react";
import Modal from "../Modal/Modal";
import {useTodos} from "../../hook/useTodos";

const Todos=()=>{
  const [isModal, setModal]=useState<boolean>(false)
  const {todos,setTodos}=useTodos()
  const inProgressTodo=todos.filter((todo:any)=>todo.status==='progress')

  const handleAction=(id:number,status:'COMPLETED'|'IN_PROGRESS')=>{
  const result= todos.map((todo:any)=>{
     if(todo.id===id){
       return {...todo,status}
     }
     return todo
   })
  setTodos(result)
}

  return(
  <>
  <ul className={S.list}>
    {
      // @ts-ignore
      inProgressTodo.map(({id,todo})=>(
       <li className={S.item} key={id}>
         <div className={S.emptyCircle} onClick={()=>handleAction(id,'COMPLETED')}/>
         <p className={S.text}>{todo}</p>
           <img onClick={()=>handleAction(id,'IN_PROGRESS')} className={S.removeImg} src={RemoveImg} alt='remove img'/>
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