import { useState } from "react";
import { CON_URL } from "../utils/contants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const[btnNameReact,setBtnNameReact]=useState("login");
  const onlineStatus=useOnlineStatus();
  console.log("Hello Header");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={CON_URL}
            className="logo"
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>OnlineStatus : {onlineStatus ? "🟢": "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login");;
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;