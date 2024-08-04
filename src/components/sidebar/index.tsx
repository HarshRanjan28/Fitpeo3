import { IoMdLogOut } from "react-icons/io";
import { Dispatch, SetStateAction, useState } from "react";
import { sideBarMenu } from "../../utils/sideBarMenu";
import { MdDashboard } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import useMeasurement from "../../hooks/use-measurement";

interface Prop {
  setSideBarState: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ setSideBarState }: Prop) => {
  const [activeMenu, setActiveMenu] = useState("HOME");
  const { isDesktop } = useMeasurement();
  const handleActiveMenu = (menu: string) => {
    setActiveMenu(menu);
  };
  return (
    <div className="h-screen sticky top-0">
      {!isDesktop && (
        <div>
          <RxCross2
            className="text-white text-3xl border-solid border-2 border-white mx-5"
            onClick={() => setSideBarState(false)}
          />
        </div>
      )}

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

Sidebar.defaultProps = {
  setSideBarState: false,
};

export default Sidebar;
