import GraphAnalytics from "./GraphAnalytics";
import OrderCategory from "./OrderCategory";

const AnalyticsContainer = () => {
  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8">
        <GraphAnalytics />
        <OrderCategory />
      </div>
    </div>
  );
};

export default AnalyticsContainer;
