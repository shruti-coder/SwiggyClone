import { useState } from "react";
import { CON_URL } from "../utils/contants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const[btnNameReact,setBtnNameReact]=useState("login");
  const onlineStatus=useOnlineStatus();
  console.log("Hello Header");
    return (
      <div className="flex flex-wrap justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img
            src={CON_URL}
            className="w-36"
            alt=""
          />
        </div>
        <div className="flex items-center p-4">
          <ul className=" flex p-4 m-4">
            <li className="px-4">OnlineStatus : {onlineStatus ? "🟢": "🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4">Cart</li>
            <button className="login" onClick={()=>{
              btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login");;
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;