import RestaurantInfoStats from "./RestaurantInfoStats";
import RestaurantProfit from "./RestaurantProfit";

const Header = () => {
  return (
    <>
      <h1 className="text-white text-3xl font-medium">DashBoard</h1>
      <div className="flex flex-col w-full lg:flex-row justify-between gap-8 items-center lg:items-start my-8 md:flex-row md:w-full md:justify-between">
        <RestaurantInfoStats />
        <RestaurantProfit />
      </div>
    </>
  );
};

export default Header;
