import React from "react";
import BarChart from "./charts/BarChart";
import DonutChart from "./charts/DonutChart";

const ChartSection = () => {
  return (
    <>
      <div className="col-span-2 mt-8 bg-[#1F2027] rounded-md px-6 py-4">
        <div className="flex flex-col justify-between items-center">
          <div className="flex justify-between items-center w-full mb-4">
            <div className="">
              <h3 className="text-gray-900 text-left text-xl font-semibold">
                Overview
              </h3>
              <p className="text-gray-400 text-xs">Monthly Earning</p>
            </div>
            <div>
              <select
                id="months"
                defaultValue="3"
                className="bg-[#4A4C50] dark:text-white text-sm rounded-lg outline-none block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="text-left" value="3" selected>
                  Quarterly
                </option>
                <option className="text-left" value="6">
                  Half yearly
                </option>
                <option className="text-left" value="12">
                  Annually
                </option>
              </select>
            </div>
          </div>
          <BarChart />
        </div>
      </div>

      <div className="mt-8 grid-cols-3 bg-[#1F2027] rounded-md px-6 py-4">
        <div className="flex flex-col justify-between items-center">
          <div className="w-full mb-4">
            <h3 className="text-white text-left text-xl font-semibold">
              Customers
            </h3>
            <p className="text-white text-xs text-left">
              Customers thay buy products
            </p>
          </div>
          <DonutChart />
        </div>
      </div>
    </>
  );
};

export default ChartSection;
