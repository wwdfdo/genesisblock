import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ navbarMenuItems }) {
  return (
    <div className="flex gap-6 items-center h-full">
      {navbarMenuItems.map((navmenuItem) => (
        <NavLink
          to={navmenuItem.url}
          className={`${
            navmenuItem.hovertextstyles
          } cursor-pointer flex items-center ${
            navmenuItem.id === 1
              ? ""
              : "h-full ocus:before:opacity-100 focus:text-[#008fb4]"
          }  ${navmenuItem.styles} ${navmenuItem.textstyles} ${
            navmenuItem.hoverstyles
          } relative f`}
        >
          <span>{navmenuItem.title}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default NavBar;
