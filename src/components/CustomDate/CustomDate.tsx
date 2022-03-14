import S from './CustomDate.module.css'

const CustomDate=()=> {
  const date=new Date()
  const day= date.getDate()
  const month=date.getMonth()
  const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
 return(
   <div className={S.container}>
     <div>
       <p className={S.dateMonth}>{monthName[month]}</p>
       <p className={S.dateDay}>{day}</p>
     </div>
    <h3 className={S.text}>Today</h3>
  </div>
 )
}
export default CustomDate