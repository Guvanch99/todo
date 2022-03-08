import S from "./Navigation.module.css";
import {TripleDotsIcon} from "../icons/TripleDotsIcon";
import {useState} from "react";
import {NavLink} from "react-router-dom";

const Navigation=()=> {
  const [isActive, setActive]=useState<boolean>(false)

return(
  <div className={S.container}>
  <div className={isActive?S.iconWrapperActive:S.iconWrapper}>
    <TripleDotsIcon style={{color: `${isActive ? '#000' : '#C4C4C4'}`}} onClick={()=>setActive(!isActive)}/>
    {
      isActive&&(
        <div className={S.statusContainer}>
          <NavLink to='/completed' className={S.text}>Completed</NavLink>
          <NavLink to='/' className={S.text}>In Progress</NavLink>
          <NavLink to='/removed' className={S.text}>Removed</NavLink>
        </div>
      )
    }
  </div>
  </div>
)}

export default Navigation