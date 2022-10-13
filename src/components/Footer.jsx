import React from 'react'
import "./Footer.css";
import footNawee from "../icons/footNawee.svg";
import youtube from "../icons/youtube.svg";
import instagram from "../icons/instagram.svg";
import twitter from "../icons/twitter.svg";
import facebook from "../icons/facebook.svg";

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="one">
            <div className="center">
                <img src={footNawee} alt="" />
                <h3>NaWee Logistics</h3>
            </div>
        </div>

        <div className="two">
            <div className="heading-div">
                <div className="center">
                    <p>Contact info</p>
                    <p>Value Links</p>
                    <p>Our Services</p>
                </div>
            </div>
            <div className="link-div">
                <div className="center">
                    <p>Lagos State & Edo State,Nigeria | contact@naweeng.com | +2347025544587</p>
                    <p>Terms & Conditions | Privacy Policy | FAQ | FeedBack</p>
                    <p>Send Parcel | Customers | Agents | Booths</p>
                    
                </div>
            </div>    
        </div>



        <div className="three">
            <div className="center-div">
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>

    </div>
    <div className="copyright">

            <p>Copyright &copy; 2022 Nawee Services - All rights reserved</p>
    </div>
    </>
  )
}

export default Footer