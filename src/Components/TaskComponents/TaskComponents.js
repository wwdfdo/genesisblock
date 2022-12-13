import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import { FaPlay } from "react-icons/fa";

function TaskComponents() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-center py-10 text-2xl font-bold">
        Post your first task in seconds
      </h2>
      <ul className="flex gap-32 justify-center">
        <li className="flex items-center justify-center">
          <span className="rounded-[50%] bg-gray-300 w-[32px] h-[32px] flex items-center justify-center mr-2">
            1
          </span>
          <p className="font-bold">Describe what you need done</p>
        </li>
        <li className="flex items-center justify-center">
          <span className="rounded-[50%] bg-gray-300 w-[32px] h-[32px] flex items-center justify-center mr-2">
            2
          </span>
          <p className="font-bold">Set your budget</p>
        </li>
        <li className="flex items-center justify-center">
          <span className="rounded-[50%] bg-gray-300 w-[32px] h-[32px] flex items-center justify-center mr-2">
            3
          </span>
          <p className="font-bold">Receieved quoted & pick the best person</p>
        </li>
      </ul>

      <div>
        <TaskCard />
      </div>

      <button className="mt-10 flex justify-center items-center gap-4 text-[#008fb4] font-semibold text-md hover:bg-[#f6f8fd] hover:transition hover:ease-in hover:rounded-xl w-[200px] mx-auto py-3 px-3 cursor-pointer">
        <span>
          <FaPlay />
        </span>
        See how it works
      </button>
    </div>
  );
}

export default TaskComponents;
