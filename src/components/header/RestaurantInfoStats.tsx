import { resInfoStats } from "../../utils/res-info-stats";
import { TiArrowSortedUp } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";

const RestaurantInfoStats = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 w-full lg:w-[70%] justify-between">
      {resInfoStats.map((resInfo) => {
        return (
          <div className="flex flex-col justify-between p-5 bg-[#202028] rounded-md  ">
            <div>
              <div
                className={`h-12 w-12  flex justify-center items-center rounded-md`}
                style={{ backgroundColor: resInfo.bgColor }}
              >
                <resInfo.logo className="text-2xl" />
              </div>
              <div className="my-2 text-lg text-white">
                {resInfo.Description}
              </div>
            </div>
            <div className=" flex justify-between items-center">
              <p className="text-2xl text-white font-bold">
                {resInfo.Quantity}
              </p>
              <span
                className={`flex text-xl items-center px-1 ${
                  resInfo.increment ? "text-[#FF3333]" : "text-[#64a832]"
                }`}
              >
                {resInfo.increment ? (
                  <TiArrowSortedUp />
                ) : (
                  <IoMdArrowDropdown />
                )}
                3%
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantInfoStats;
