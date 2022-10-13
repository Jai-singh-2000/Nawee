import "./List.css";    
import BigButton from '../Tools/BigButton';

const List = () => {

  return (
    <div className='List'>
        <div className="inside-list">
            <BigButton name="Guest" icon="single"/>
            <BigButton name="Customer"  icon="single" active="true"/>
            <BigButton name="Agent" icon="group"/>
            <BigButton name="Booth" icon="booth"/>
        </div>
    </div>
  )
}

export default List;