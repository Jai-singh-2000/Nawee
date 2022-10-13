import "./Body.css";
import PersonCard from "../icons/PersonCard.svg";
import Whatsapp from "../icons/Whatsapp.svg";
import Mail from "../icons/Mail.svg";
import Card from "./Card";
import BigButton from "../Tools/BigButton";

const Body = () => {
  return (
    <>
    <div className='body'>
        
        <div className="left">
            <div className="form-div">
                
                <h1>Lodge a Complaint</h1>
                <p>Customer can lodge a complain by selecting the possible issues below.</p>
                <input type="text" placeholder='Charges'/>
                <input type="text" placeholder='Deduction'/>
                <input type="text" placeholder='Parcel Damaged'/>
                <input type="text" placeholder='Others'/>
            </div>
        </div>


        <div className="right">
            <div className="form-div">
                    
                <h4>Required Information</h4>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email/Mobile Number'/>
                <h4>Additional Message</h4>
                <textarea placeholder='You can type upto 100 words'/>

            </div>
        </div>
    </div>

    <div className="contact-div">       

        <Card img={PersonCard} title="Call Us" desc="Call us 8 a.m. - 7 p.m." phone="+234 76875897"/>
        <Card img={Whatsapp} title="Chat with us" desc="Anytime, We will respond 
        during business hours" phone="+234 76875897" color="#2B8C79"/>
        <Card img={Mail} title="Mail us" desc="Anytime, We will respond during business hours" phone="nawee@gmail.com"/>
                
    </div>   


    <div className="submit-div">
        <div className="submit-inside">
            <BigButton name="Submit" active={true} style={{paddingRight:"0 2rem"}}/>
            <BigButton name="Back" />
        </div>
    </div>

    </>
  )
}

export default Body;