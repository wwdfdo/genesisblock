import React from "react";
import TaskComponents from "../TaskComponents/TaskComponents";

import Viewport from "../Viewport/Viewport";

function HomeSectionOne() {
  return (
    <div className="pb-10">
      <Viewport />
      <TaskComponents />
    </div>
  );
}

export default HomeSectionOne;
