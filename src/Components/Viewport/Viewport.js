import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { TiTick } from "react-icons/ti";

function Viewport() {
  const slideItemInfo = [
    {
      title: (
        <span>
          Get <span className="text-[#008fb4] font-extrabold">moving in</span>{" "}
          done.
        </span>
      ),
      tasks: ["Removals", "End of lease cleaning", "Wifi set up"],
      imgUrl:
        "https://eu7cmie.cloudimg.io/v7/www.airtasker.com/static/assets/989ad81b13d6ea81.png?width=438&height=393",
    },
    {
      title: (
        <span>
          Get <span className="text-[#008fb4] font-extrabold">pet care</span>{" "}
          done.
        </span>
      ),
      tasks: ["Puppy training", "Carpet cleaning", "Photography"],
      imgUrl:
        "https://eu7cmie.cloudimg.io/v7/www.airtasker.com/static/assets/4a8888135ef14b2b.png?width=438&height=393",
    },
    {
      title: (
        <span>
          Get{" "}
          <span className="text-[#008fb4] font-extrabold">
            home maintenance
          </span>{" "}
          <br /> done.
        </span>
      ),
      tasks: ["Hedge trimming", "Handyperson jobs", "Painting"],
      imgUrl:
        "https://eu7cmie.cloudimg.io/v7/www.airtasker.com/static/assets/1296fd1d2ad0c413.png?width=438&height=393",
    },
    {
      title: (
        <span>
          Get{" "}
          <span className="text-[#008fb4] font-extrabold">kids parties</span>{" "}
          done.
        </span>
      ),
      tasks: ["Catering", "Face painting", "Post-party cleaning"],
      imgUrl:
        "https://eu7cmie.cloudimg.io/v7/www.airtasker.com/static/assets/99a7e70fe7fa8146.png?width=438&height=393",
    },
    {
      title: (
        <span>
          Get{" "}
          <span className="text-[#008fb4] font-extrabold">
            starting a business
          </span>{" "}
          <br /> done.
        </span>
      ),
      tasks: ["Logo design", "Build a website", "Accounting"],
      imgUrl:
        "https://eu7cmie.cloudimg.io/v7/www.airtasker.com/static/assets/045932d8b718dd29.png?width=438&height=393",
    },
    {
      title: (
        <span>
          Get <span className="text-[#008fb4] font-extrabold">more</span> done.
        </span>
      ),
      tasks: ["Post any task", "Pick the best person", "Get it done"],
      imgUrl:
        "https://eu7cmie.cloudimg.io/v7/www.airtasker.com/static/assets/4be6949d77814c49.png?width=438&height=393",
    },
  ];

  const carouselItems = slideItemInfo.map((item) => (
    <div className="flex justify-between px-[10%]">
      <div className="flex flex-col gap-5">
        <h2 className="text-black text-5xl ">{item.title}</h2>
        <ul className="flex flex-col font-semibold text-lg gap-2">
          {item.tasks.map((task, index) => (
            <li key={index} className="flex items-center gap-2">
              {" "}
              <TiTick color="#008fb4" size={24} />
              {task}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img src={item.imgUrl} className="rounded-lg" alt="" />
      </div>
    </div>
  ));

  return (
    <div className="pt-16 pb-32 relative">
      <svg
        className="w-[45%] h-auto absolute right-[4%] -top-24"
        width="616"
        height="592"
        viewBox="0 0 616 592"
        fill="none"
      >
        <path
          d="M40 527C17.9086 527 2.13558e-07 509.091 4.76995e-07 487L2.55192e-06 313C2.81536e-06 290.909 17.9086 273 40 273L167 273C189.091 273 207 290.909 207 313L207 487C207 509.091 189.091 527 167 527L40 527Z"
          fill="#E7EBFB"
        ></path>
        <path
          d="M260 50C260 22.3858 282.386 0 310 0H550C555.523 0 560 4.47715 560 10V150C560 177.614 537.614 200 510 200H270C264.477 200 260 195.523 260 190V50Z"
          fill="#E7EBFB"
        ></path>
        <path
          d="M357.115 460.692C354.373 455.463 356.735 449.01 362.203 446.786L639.12 334.141C645.38 331.594 652.312 335.862 652.856 342.598L672.127 581.195C672.597 587.016 668 592 662.16 592H432.004C428.286 592 424.874 589.937 423.148 586.643L357.115 460.692Z"
          fill="#E6F4F7"
        ></path>
      </svg>

      <AliceCarousel
        onSldeChanged={() => {
          console.log("changed");
        }}
        autoPlay
        disableDotsControls
        disableButtonsControls
        infinite
        animationDuration={500}
        autoPlayInterval={1000}
        animationType="fadeout"
        mouseTracking
        items={carouselItems}
      />
      <div className="flex gap-5 absolute justify-center left-[10%] bottom-[20%] text-lg font-semibold items-center flex-col">
        <div className="flex gap-8">
          <button className="bg-[#008fb4] px-4 py-2 rounded-3xl text-white">
            Post your task for free
          </button>
          <button className="border-2 border-[#008fb4] px-4 py-2 font-bold rounded-3xl text-[#008fb4]">
            Earn money as a tasker
          </button>
        </div>
        <div className="flex gap-8 text-sm">
          <span> +1M customers</span>
          <span> +2.5M tasks done</span>
          <span> +4M user reviews</span>
        </div>
      </div>
    </div>
  );
}

export default Viewport;
