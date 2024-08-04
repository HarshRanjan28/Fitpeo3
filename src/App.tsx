import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import AnalyticsContainer from "./components/analyticSection";
import OrderListContainer from "./components/orderList";

function App() {
  return (
    <div className="w-full flex">
      <div className="lg:w-[5%] bg-[#202028] lg:block hidden">
        <Sidebar />
      </div>
      <div className="w-[95%]">
        <Navbar />
        <div className="p-5">
          <Header />
          <AnalyticsContainer />
          <OrderListContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
