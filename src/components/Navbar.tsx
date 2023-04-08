import React from "react";
import { Logo, Arrow, Zap, Menu } from "../assets";
import { styles } from "../styles";

const Navbar = () => {
  return (
    <nav className={`flex items-center ${styles.padding} justify-between`}>
      <div className="flex items-center">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="h-[40px] w-[40px]" />
          <span className="font-Inter text-[22px] font-[600] text-white ml-[10px]">
            Hourglass
          </span>
        </div>
        <div className="lg:flex hidden">
          <ul className="flex items-center">
            <li className={`${styles.navitem}`}>Home</li>
            <li className={`${styles.navitem}`}>
              Products{" "}
              <img
                src={Arrow}
                alt="arrow"
                className="h-[8px] w-[8px] ml-[4px]"
              />
            </li>
            <li className={`${styles.navitem}`}>
              Services
              <img
                src={Arrow}
                alt="arrow"
                className="h-[8px] w-[8px] ml-[4px] font-[200]"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:flex hidden items-center">
        <span className={`${styles.navitem}`}>Support</span>
        <div className="flex items-center justify-center p-[8px] rounded-md bg-[#7F56D9]">
          <span className={`${styles.navitem}`}>Talk to Sales</span>
        </div>
      </div>
      <div className="lg:hidden items-center flex ">
        <img src={Menu} alt="menu" />
      </div>
    </nav>
  );
};

export default Navbar;
