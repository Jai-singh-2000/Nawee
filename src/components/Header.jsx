import "./Header.css";
import nawee from "../icons/nawee.svg";
import Button from "../Tools/Button";
import ArrowButton from "../Tools/ArrowButton";
import BigButton from "../Tools/BigButton";

const Header = () => {
  return (
    <div className="header">
        
        <div className="logo">
            <img src={nawee} alt="" />
            <h4>NaWee</h4>
        </div>

        <div className="nav">
            <div className="inside-nav">
            <Button name="Home" border="none"/>
            <ArrowButton name="Help" color="black" border="none"/>
            <Button name="Contact Us" color="black" border="none"/>
            <BigButton name="DOWNLOAD" border={true}/>
            </div>
        </div>
    </div>
  )
}

export default Header;