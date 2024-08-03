import { TiArrowSortedUp } from "react-icons/ti";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RestaurantProfit = () => {
  const totalRevenue = 6759.25;
  const percentage = 70;
  const number = 3;

  return (
    <div className="w-full md:w-1/2 flex justify-around items-center lg:w-[30%] bg-[#202028] p-4 flex-col-reverse lg:flex-row rounded-lg">
      <div className=" w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-xl py-5 text-white">Net Profit</h2>
        <span className="text-2xl block lg:flex justify-center font-bold text-white lg:justify-start">
          $ {totalRevenue}
        </span>
        <span className="flex items-center py-3 text-white">
          <TiArrowSortedUp className="text-2xl text-[#64a832]" />
          <span className="text-[#64a832] px-1">{number}%</span>
        </span>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="w-36 flex mt-3">
          <CircularProgressbarWithChildren
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: "butt",
              textSize: "16px",
              pathColor: "#7095fa",
              trailColor: "#293167",
              pathTransitionDuration: 1,
            })}
            className="h-[150px] lg:h-[120px]"
          >
            <strong className="text-xs text-white mt-14">Goal </strong>
            <strong className="text-xs text-white"> Completed</strong>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default RestaurantProfit;
