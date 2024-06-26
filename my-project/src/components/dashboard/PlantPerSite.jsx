//import React from "react";
//import {LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
const PlantPerSite = () => {
  const chartSetting = {
    yAxis: [
      {
        label: "Plant",
      },
    ],
    width: 700,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-10px, 0)",
      },
    },
  };
  const dataset = [
    {
      breakdown: 10,
      running: 80,
      standby: 40,
      site: "UNIT A",
    },
    {
      breakdown: 50,
      running: 78,
      standby: 24,
      site: "DANGAMVURA",
    },
    {
      breakdown: 5,
      running: 106,
      standby: 25,
      site: "MOBE",
    },
    {
      breakdown: 2,
      running: 92,
      standby: 22,
      site: "GWERU",
    },
    {
      breakdown: 5,
      running: 65,
      standby: 50,
      site: "MSASA",
    },
    {
      breakdown: 2,
      running: 45,
      standby: 21,
      site: "CHIVHU",
    },
    {
      breakdown: 5,
      running: 51,
      standby: 15,
      site: "CHIBI",
    },
    
  ];

  const valueFormatter = (value) => `${value}`;

  return (
    <div className="overflow-hidden border ml-12 border-gray-200 lg:col-span-4 sm:col-span-6 bg-gray-50 rounded-xl">
      <div className="px-4 py-5 sm:p-6">
        {/* <p className="text-base font-bold text-gray-900">Plant Performance per Site</p> */}
        <p className="text-base font-bold text-gray-900">Property Management Overview</p>
        {/* <p className="mt-1 text-sm font-medium text-gray-500">
          Summary of site progress
        </p> */}
        <p className="mt-1 text-sm font-medium text-gray-500">
        Overview of Property Listings and Requests
        </p>

        <div className="mt-6 space-y-3">
          <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: "band", dataKey: "site" }]}
            series={[
              {
                dataKey: "breakdown",
                // label: "Breakdown",
                label: "Urgent Service Requests",
                valueFormatter,
                color: "red",
              },
              {
                dataKey: "running",
                // label: "Running",
                label: "Active Listings",
                valueFormatter,
                color: "green",
              },
              {
                dataKey: "standby",
                // label: "Standby",
                label: "Pending Applications",
                valueFormatter,
                color: "orange",
              },
            ]}
            {...chartSetting}
          />
        </div>
      </div>
    </div>
  );
};

export default PlantPerSite;