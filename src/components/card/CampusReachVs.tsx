import React from "react";
import Logo from "../../assets/campusreachlogo.svg";
import { campusReachTableData } from "./CampusReachData";

interface TableData {
  pros: string;
  cr: string;
  traditional: string;
}

const CampusReachVs: React.FC = () => {
  return (
    <div className="w-[85%] mx-auto">
      <div className="w-full text-center">
        <small className="text-gray-300">CampusReach Vs Others</small>
        <h3 className="text-2xl font-bold lg:text-5xl">
          Purpose built for Startups
        </h3>
      </div>
      <br />
      <section className="container p-6 mx-auto mt-6 font-mono lg:mt-8">
        <div className="w-full mb-8 overflow-hidden rounded-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="font-semibold tracking-wide text-center text-gray-900 border-b border-gray-600 text-md">
                  <th className="px-4 py-3">Benefits</th>
                  <th className="flex items-center justify-center gap-3 px-4 py-3 border bg-[#F1F9F5]">
                    <img src={Logo} alt="Logo" />
                    <h1 className="text-xs font-bold lg:text-sm text-forest-green-900">
                      CampusReach
                    </h1>
                  </th>
                  <th className="px-4 py-3">Traditional Agencies</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {campusReachTableData.map((list: TableData, index: number) => (
                  <tr key={index} className="text-center text-gray-700">
                    <td className="h-24 px-4 py-3 text-base font-medium border">
                      {list.pros}
                    </td>
                    <td className="h-24 px-4 py-3 font-normal border text-base bg-[#F1F9F5]">
                      {list.cr}
                    </td>
                    <td className="h-24 px-4 py-3 text-base font-normal border">
                      {list.traditional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusReachVs;
