
import './serviceList.scss';

export default function ServiceList({id, title, active, setSelected}) {

return (
   <li className={active ? "List active" : "List"} onClick= {()=>setSelected(id)}>
       {title}
   </li>
  )
}
