//import React from "react";
import { PieChart,pieArcLabelClasses } from '@mui/x-charts/PieChart';
const PlantPerfomance = () => {
    const data = [
        // { value: 60, label: 'Running',color:'green' },
        // { value: 20, label: 'Breakdowns',color:'red' },
        // { value: 20, label: 'Standby',color:'orange' },
        { value: 60, label: 'Active Listings',color:'green' },
        { value: 20, label: 'Urgent Service Requests',color:'red' },
        { value: 20, label: 'Pending Applications',color:'orange' },
      
      ];
      const size = {
        width: 600,
        height: 250,
      };      
  return (
    <div className="overflow-hidden bg-gray-50 border border-gray-200 lg:col-span-4 rounded-xl">
      <div className="px-10 py-4 sm:p-6">
        {/* <p className="text-base font-bold text-gray-900">Plant Performance</p> */}
        <p className="text-base font-bold text-gray-900">Real Estate Operations Overview</p>
        {/* <p className="mt-1 text-sm font-medium text-gray-500">
          Last 30 days: $84,840 Profits
        </p> */}
        <p className="mt-1 text-sm font-medium text-gray-500">
        Monthly Gross Rental Income: $84,840
        </p>

        <div id="chart1" className="mt-0">
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.value}%`,
                arcLabelMinAngle: 45,
                data,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontWeight: "",
              },
            }}
            {...size}
          />
        </div>
      </div>
    </div>
  );
};

export default PlantPerfomance;