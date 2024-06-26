import React from "react";
import RecentTransactions from "../RecentTransctions/RecentTransactions";
import RightNav from "../RightNav/RightNav";
import { DonutChart } from "./DonutChart";

export default function DashBoard() {
  return (
    <div className="h-full w-full p-5 lg:py-0">
      <div className="grid grid-cols-3 grid-rows-9 lg:grid-rows-6 ">
        <div className=" col-span-3 lg:col-span-2 row-span-2 lg:row-span-2  px-3 text-white  ">
          <h1 className="text-white text-5xl poppins-semibold  py-2 ">
            Hello, <span className="text-orange-500">Smantha</span>
          </h1>
          <p className="text text-zinc-300 text-l poppins-medium pb-10">
            Access & manage your account and transactions efficiently.
          </p>

          <div className="flex w-full items-center gap-4 sm:gap-6 sm:p-6;">
            <p className="text text-orange-400 text-l poppins-medium self-">
              Total account balance: <span className="text-white">6350</span>
            </p>
            <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px] ;">
              <DonutChart />
            </div>
          </div>
        </div>

        <div className="col-span-3 row-span-3 lg:row-span-6 lg:col-span-1">
          <div className="grid gap-2 grid-cols-full grid-rows-full h-full ">
            <RightNav />
          </div>
        </div>

        <div className="rounded-lg min-h-28 col-span-full lg:col-span-2 row-span-4 p-5 ">
          <div className="py-6 border-t-2 border-dashed border-amber-400 border-opacity-20">
            <h1 className="text-2xl poppins-semibold text-white">
              Recent <span className="text-orange-500">Transactions</span>
            </h1>
          </div>
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
}
