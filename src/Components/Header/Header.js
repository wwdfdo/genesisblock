import React from "react";
import Logo from "../Logo/Logo";
import { navbarMenuItems, loginavMenu } from "../../arrays/NavBarArray";
import LoginNavBar from "../LoginNavBar/LoginNavBar";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <div className="h-[50px] z-[1001]  w-full bg-white fixed ">
      <div className="flex justify-between px-[15%] items-center border-b-[0.02rem] border-b-[#008fb4] border-opacity-25 h-[100%]">
        <div className="flex  items-center h-[100%] border-r-[0.02rem] border-opacity-25 border-r-[#008fb4] ">
          <Logo />
        </div>
        <div className=" flex justify-between flex-1 px-6 font-semibold text-[0.825rem] h-full items-stretch">
          <NavBar navbarMenuItems={navbarMenuItems} />
          <LoginNavBar loginavMenu={loginavMenu} />
        </div>
      </div>
    </div>
  );
}

export default Header;
