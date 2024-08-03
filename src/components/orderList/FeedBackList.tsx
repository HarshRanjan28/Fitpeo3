import CustomerFeedBackList from "./CustomerFeedBackList";
import { customerFeedback } from "../../utils/customer-feedback";

const FeedBackList = () => {
  return (
    <div className="w-full lg:w-[30%]  h-[467px] overflow-y-auto bg-[#202028] rounded-lg">
      <h1 className="text-white text-3xl p-3">Customer's FeedBack </h1>
      <div>
        {customerFeedback.map((feedback) => {
          return <CustomerFeedBackList feedback={feedback} />;
        })}
      </div>
    </div>
  );
};

export default FeedBackList;
