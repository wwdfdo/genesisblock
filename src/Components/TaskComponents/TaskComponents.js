import React from "react";
import TaskCard from "../TaskCard/TaskCard";

function TaskComponents() {
  return (
    <div>
      <h2>Task title</h2>

      <p>
        <span></span>
      </p>

      <div>
        <TaskCard />
      </div>

      <button>See how it works</button>
    </div>
  );
}

export default TaskComponents;
