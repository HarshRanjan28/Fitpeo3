import { IoMdLogOut } from "react-icons/io";
import { useState } from "react";
import { sideBarMenu } from "../../utils/sideBarMenu";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("HOME");

  const handleActiveMenu = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <div className="h-screen sticky top-0">
      <div className=" h-1/2 flex flex-col items-center">
        <li
          className="py-5 text-4xl list-none"
          onClick={() => handleActiveMenu("HOME")}
        >
          <MdDashboard style={{ color: "#7095ff" }} />
        </li>

        <div className="text-4xl flex flex-col items-center w-full">
          {sideBarMenu.map((menu) => {
            return (
              <li
                className={`${
                  activeMenu === `${menu.title}` ? "active" : ""
                } list-none my-5 w-full flex justify-center cursor-pointer`}
                onClick={() => handleActiveMenu(menu.title)}
              >
                <menu.logo />
              </li>
            );
          })}
        </div>
      </div>
      <li className="flex flex-col items-center justify-end list-none h-1/2 py-6">
        <button>
          <IoMdLogOut className="text-4xl" />
        </button>
      </li>
    </div>
  );
};

export default Sidebar;
