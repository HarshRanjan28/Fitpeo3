import FeedBackList from "./FeedBackList";
import RecentOrderList from "./RecentOrderList";

const OrderListContainer = () => {
  return (
    <div className="w-full my-8 flex flex-col lg:flex-row justify-between gap-8">
      <RecentOrderList />
      <FeedBackList />
    </div>
  );
};

export default OrderListContainer;
