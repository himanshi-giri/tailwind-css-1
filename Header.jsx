import React from 'react';
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
       <img src="./assets/Logo.svg" alt="logo"/>
       <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hoster is hiring</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Fins Domain</a></li>
        <li><a href="#">Why Hoster</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a href="a">Sign In </a>
        <button>Join Waitlist</button>
      </div>
      <div className="lg:hidden">
      <FaBars />
      </div>
    </div>
  )
}
export default Header;