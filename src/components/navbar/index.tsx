import { CiSearch } from "react-icons/ci";
import { navBarMenu } from "../../utils/navbarMenu";
import useMeasurement from "../../hooks/use-measurement";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Sidebar from "../sidebar";

const Navbar = () => {
  const [sideBarState, setSideBarState] = useState(false);
  const toggleSideBar = () => {
    setSideBarState(!sideBarState);
  };
  const { isDesktop } = useMeasurement();

  if (isDesktop) {
    return (
      <div className="bg-[#202028] h-20 items-center justify-between hidden lg:flex md:flex">
        <div className="search relative flex items-center focus-within:text-white ml-6">
          <CiSearch className="absolute h-5 w-5 ml-3 " />
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg border-solid border-2 border-slate-700 p-1 shadow-md bg-slate-700 pr-3 pl-10 w-full"
          />
        </div>
        <div className="flex p-6">
          {navBarMenu.map((menu) => {
            return (
              <button className="mx-4 h-10 w-10  rounded-full flex justify-center items-center bg-gray-500 hover:bg-slate-600">
                <menu.logo className="text-2xl text-white" />
              </button>
            );
          })}
          <div className="w-10 mx-4 rounded-full">
            <img src="/mydp.jpeg" alt="dp" className="rounded-full" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative">
      <div className={sideBarState ? "overlay-content" : "overlay"}>
        {sideBarState && <Sidebar setSideBarState={setSideBarState} />}
      </div>
      <div className="w-full flex justify-end items-center p-3">
        <GiHamburgerMenu
          className="text-3xl text-white"
          onClick={toggleSideBar}
        />
      </div>
    </div>
  );
};

export default Navbar;
