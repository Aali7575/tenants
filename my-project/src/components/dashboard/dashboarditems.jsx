
import PlantPerfomance from "./PlantPerformance";

import OnlinePlants from "./OnlinePlant";
import NewRecquisition from "./NewRecquisition";

import PlantPerSite from "./PlantPerSite";
import Tabs from "./Tabs";
import MajorBreakdowns from "./MajorBreakdowns";
import MajorSites from "./MajorSites";
import { useState } from "react";
const DashboardItem = () => {
  const [activeTab, setActiveTab] = useState("majorbreakdowns");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className=" ">
      <main>
        <div className="">
          <div className="px-4 mx-auto sm:px-6 md:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              
              
            </div>
          </div>

          <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
            <div className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                <PlantPerfomance />

                <div className="space-y-6 lg:col-span-2">
                  <OnlinePlants />
                  <NewRecquisition />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-4 lg:grid-cols-6">
               
                <PlantPerSite />
              </div>
              <div >
                <Tabs onTabChange={handleTabChange} />
                {activeTab === "majorbreakdowns" ? (
                  <MajorBreakdowns />
                ) : (
                  <MajorSites />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardItem;