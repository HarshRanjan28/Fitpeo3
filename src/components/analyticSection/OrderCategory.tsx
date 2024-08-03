import { orderCategory } from "../../utils/res-info-stats";
import { MdKeyboardArrowRight } from "react-icons/md";

const OrderCategory = () => {
  return (
    <div className="w-full  lg:w-[30%] bg-[#202028] rounded-lg flex-col justify-between p-4">
      {orderCategory.map((category) => {
        return (
          <div className="flex p-5 w-full  justify-between items-center">
            <div className="flex items-center">
              <div
                className="w-16 h-16 rounded-full justify-center items-center mr-5 hover:bg-red-300 flex"
                style={{ backgroundColor: category.bgColor }}
              >
                <category.logo className="text-white text-xl" />
              </div>
              <span className="text-white">{category.title}</span>
            </div>
            <button className="w-5 h-5 rounded-full bg-slate-500 flex justify-center items-center">
              <MdKeyboardArrowRight className="text-white" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default OrderCategory;
