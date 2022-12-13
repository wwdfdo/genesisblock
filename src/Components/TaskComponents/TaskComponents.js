import React from "react";
import TaskCard from "../TaskCard/TaskCard";

function TaskComponents() {
  return (
    <div>
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

      <button>See how it works</button>
    </div>
  );
}

export default TaskComponents;
