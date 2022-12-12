import React from "react";
import Logo from "../Logo/Logo";
import { navbarMenuItems, loginavMenu } from "../../arrays/NavBarArray";

function Header() {
  return (
    <div className="h-[60px] ">
      <div className="flex justify-between px-[15%] items-center border-b-[1px] border-b-[#008fb4] h-[100%]">
        <div className="flex  items-center h-[100%] border-r-[1px] border-r-[#008fb4]">
          <Logo />
        </div>
        <div className=" flex justify-between flex-1 px-6 font-semibold text-[0.875rem]">
          <ul className="flex gap-6 items-center">
            {navbarMenuItems.map((navmenuItem) => (
              <li className={`${navmenuItem.styles}`}>{navmenuItem.title}</li>
            ))}
          </ul>

          <ul className="flex items-center gap-6">
            {loginavMenu.map((loginavItem) => (
              <li className={`${loginavItem.styles}`}>{loginavItem.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
