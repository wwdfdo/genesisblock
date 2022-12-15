import React from "react";

function LoginNavBar({ loginavMenu }) {
  return (
    <ul className="flex items-center gap-6">
      {loginavMenu.map((loginavItem) => (
        <li
          className={`${loginavItem.hovertextstyles} cursor-pointer h-full items-center flex`}
        >
          <span
            className={`${loginavItem.styles} ${loginavItem.textstyles} ${loginavItem.hoverstyles} relative`}
          >
            {loginavItem.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default LoginNavBar;
