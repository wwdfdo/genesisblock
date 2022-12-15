import React from "react";
import { Link } from "react-router-dom";

function NavBar({ navbarMenuItems }) {
  return (
    <ul className="flex gap-6 items-center h-full">
      {navbarMenuItems.map((navmenuItem) => (
        <Link to={navmenuItem.url} className="h-full">
          {" "}
          <li
            className={`${navmenuItem.hovertextstyles} cursor-pointer flex items-center h-full`}
          >
            <span
              className={`${navmenuItem.styles} ${navmenuItem.textstyles} ${navmenuItem.hoverstyles} relative`}
            >
              {navmenuItem.title}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default NavBar;
