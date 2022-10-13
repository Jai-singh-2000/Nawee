import "./Button.css";
import { FaUser } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { VscNotebook } from 'react-icons/vsc';

const BigButton = ({name,active,icon,border}) => {

    return (
      <>
      <button className={`bigButton ${active ? "orangeBackground" : ""} ${border&&"border"}`}>
    
          {icon==="single"&&<FaUser/>}
          {icon==="group"&&<HiUserGroup/>}
          {icon==="booth"&&<VscNotebook/>}
        <p>{name}</p>
      </button>
      </>
  )

}

export default BigButton