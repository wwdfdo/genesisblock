import React from "react";
import "./AustoSlidingComponent.css";
import { autoslidingcards } from "../../arrays/AutoSlidingCards";
import { AiTwotoneStar } from "react-icons/ai";

function AutoSlidingComponent() {
  return (
    <div class="slider">
      <div class="slide-track flex gap-8 ">
        {autoslidingcards.map((autoslidingcard) => (
          <a href="#">
            {" "}
            <div class="slide bg-yellow-200 flex flex-col justify-between p-6">
              <p>{autoslidingcard.title}</p>
              <div className="flex justify-between ">
                <div className="flex gap-2">
                  <img
                    src={autoslidingcard.image}
                    className="w-[32px] h-[32px] rounded-full"
                    alt=""
                  />
                  <p>{autoslidingcard.task}</p>
                </div>
                <div>{autoslidingcard.price}</div>
              </div>
              <div className=" ">
                <p>
                  {" "}
                  <AiTwotoneStar color="green" />
                  <span>5 Stars</span>
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AutoSlidingComponent;
