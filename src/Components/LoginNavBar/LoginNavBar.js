import React from "react";

function LoginNavBar({ loginavMenu }) {
  return (
    <div className="flex items-center gap-6">
      {loginavMenu.map((loginavItem) => (
        <div
          className={`${loginavItem.hovertextstyles} cursor-pointer h-full items-center flex`}
        >
          <span
            className={`${loginavItem.styles} ${loginavItem.textstyles} ${loginavItem.hoverstyles} relative`}
          >
            {loginavItem.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default LoginNavBar;
