//import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbSitemap } from "react-icons/tb";
const MajorSites = () => {
  //majorSitess array
  const majorSitesData = [
    {
      code: "1",
      siteName: "Abitech",
      projectManager: "Mavhima",
      assets: "80",

    },
    {
      code: "2",
      siteName: "Chaka Crusher",
      projectManager: "Chikomo",
      assets: "50",

    },
    {
      code: "3",
      siteName: "Chibi Crusher",
      projectManager: "Chapanduka",
      assets: "70",

    },
    {
      code: "10",
      siteName: "Chivhu Asphalt",
      projectManager: "Mangorima",
      assets: "90",

    },
 
  ];
  return (
    <div>
      <div className="sm:flex sm:items-start sm:justify-between">
        <div>
          {/* <p className="flex text-base font-bold text-gray-900">
            <TbSitemap style={{ marginRight: "8px", fontSize: "20px" }} />
            MAJOR SITES
          </p> */}
          <p className="flex text-base font-bold text-gray-900">
            <TbSitemap style={{ marginRight: "8px", fontSize: "20px" }} />
            Critical Maintanence Issues
          </p>
          <p className="mt-1 text-sm font-medium text-gray-500">
           Major sites across the nation
          </p>
        </div>

        <div className="mt-4 sm:mt-0">
          <Link
            to="/sites"
            title=""
            className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900"
          >
            See all sites
            <svg
              className="w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      {/* table of major sites */}
      <div className="flex flex-col mt-4 lg:mt-8 bg-gray-50">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full  align-middle md:px-6 lg:px-8">
            {/* table */}
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              {/* table titles */}
              <thead className="bg-gray-200 text-gray-600 text-md leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">
                    <div className="flex items-center">Code</div>
                  </th>

                  <th className="py-3 px-6 text-left">
                    <div className="flex items-center">Site Name</div>
                  </th>


                  <th className="py-3 px-6 text-left">
                    <div className="flex items-center">Project Manager</div>
                  </th>

                  <th className="py-3 text-left">
                    <div className="flex items-center">Assets</div>
                  </th>
                </tr>
              </thead>

              {/* table body */}
              <tbody className="text-gray-600 text-sm font-light uppercase">
                {majorSitesData.map((rowData, index) => (
                  <tr key={index} className="border-b border-gray-200 ">
                    <td className="py-4 px-6 text-left whitespace-nowrap">
                      {rowData.code}
                    </td>
                    <td className="py-4 px-6 text-left whitespace-nowrap">
                      {rowData.siteName}
                    </td>

                    <td className="py-4 px-6 text-left whitespace-nowrap">
                      {rowData.projectManager}
                    </td>
                    <td>
                      <div className="inline-flex items-center">  
                        {rowData.assets}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorSites;