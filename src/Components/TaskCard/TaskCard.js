import React from "react";
import { taskcards } from "../../arrays/Taskcards";
function TaskCard() {
  return (
    <div className=" grid grid-cols-5 grid-rows-2 gap-5 justify-center item-center w-5/6 mx-auto mt-16">
      {taskcards.map((taskcard) => (
        <div className="flex items-center gap-3 rounded-xl px-3 py-2 shadow shadow-gray-300 hover:bg-gray-100 cursor-pointer ">
          <img src={taskcard.icon} className="w-[40px]" alt="" />
          <div>{taskcard.title}</div>
        </div>
      ))}
    </div>
  );
}

export default TaskCard;
