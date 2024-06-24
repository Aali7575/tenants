import { useState } from "react";
import { TbSitemap } from "react-icons/tb";
import { GiAutoRepair } from "react-icons/gi";
// eslint-disable-next-line react/prop-types
const Tabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("majorbreakdowns");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div>
      <div className="pb-4 max-w-7xl ">
        <nav className="flex flex-col space-y-3 sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-center">
          <div
            className={`cursor-pointer inline-flex items-center px-6 py-4 text-sm font-medium ${
              activeTab === "majorbreakdowns"
                ? "text-white bg-[#06380b]"
                : "text-gray-500 hover:text-gray-900"
            } transition-all duration-200 rounded-lg group whitespace-nowrap`}
            onClick={() => handleTabClick("majorbreakdowns")}
          >
            <GiAutoRepair style={{ marginRight: "8px", fontSize: "20px" }} />
            Major Breakdowns
          </div>

          <div
            className={`cursor-pointer inline-flex items-center px-3 py-4 text-sm font-medium ${
              activeTab === "majorsites"
                ? "text-white bg-[#06380b]"
                : "text-gray-500 hover:text-gray-900"
            } transition-all duration-200 rounded-lg group whitespace-nowrap`}
            onClick={() => handleTabClick("majorsites")}
          >
            <TbSitemap style={{ marginRight: "8px", fontSize: "20px" }} />
            Major Sites
          </div>
        </nav>
      </div>
      {/* <div className="border border-b-2 mb-4 lg:w-[30%] border-gray-500 xl:w-[30%]"></div> */}
      {/* <hr className="mb-2 w-[30%] py-2"/>  */}
    </div>
  );
};

export default Tabs;