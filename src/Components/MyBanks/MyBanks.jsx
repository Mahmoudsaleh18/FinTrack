import React from "react";
import CardImage from "../../assets/Card.png"; // Assuming Card.png is your card image

function MyBanks() {
  return (
    <>
      <div className="h-full">
        <div className="rounded-lg col-span-3 row-span-1 md:py-6 px-5 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white pb-3">
            My <span className="text-orange-500">Bank</span> Accounts
          </h1>
          <p className="text text-zinc-300 text-l poppins-medium pb-10">
            Effortlessly Manage Your Banking Activities
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:gap-3">
          <div className="rounded-lg col-span-1 row-span-1 py-2 px-3 text-white flex flex-col justify-center items-center">
            <div className="h-40 w-60">
              <img src={CardImage} alt="Bank Card 1" className="h-40 w-60" />
            </div>
            <div>
              <h2 className="text-3xl poppins-semibold text-orange-400 pt-3">
                Bank <span className="text-white poppins-semibold">1</span>
              </h2>
              <div className="flex gap-x-5">
                <p>Spending this month:</p>
                <p className="text-orange-400"> $1250</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg col-span-1 row-span-1 py-2 px-3 text-white flex flex-col justify-center items-center">
            <div className="h-40 w-60">
              <img src={CardImage} alt="Bank Card 2" className="h-40 w-60" />
            </div>
            <div>
              <h2 className="text-3xl poppins-semibold text-orange-400 pt-3">
                Bank <span className="text-white poppins-semibold">2</span>
              </h2>
              <div className="flex gap-x-5">
                <p>Spending this month:</p>
                <p className="text-orange-400"> $1900</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg col-span-1 row-span-1 py-2 px-3 text-white flex flex-col justify-center items-center">
            <div className="h-40 w-60">
              <img src={CardImage} alt="Bank Card 3" className="h-40 w-60" />
            </div>
            <div>
              <h2 className="text-3xl poppins-semibold text-orange-400 pt-3">
                Bank <span className="text-white poppins-semibold">3</span>
              </h2>
              <div className="flex gap-x-5">
                <p>Spending this month:</p>
                <p className="text-orange-400"> $3200</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg col-span-1 row-span-1 py-2 px-3 text-white flex flex-col justify-center items-center">
            <div
              className="skeleton h-40 w-60 flex justify-center items-center cursor-pointer"
              onClick={() => console.log("Add new card clicked")}
            >
              <h1 className="text-2xl opacity-50">Add New Card</h1>
            </div>
            <div>
              <h2 className="text-3xl poppins-semibold text-orange-400 pt-3">
                Bank <span className="text-white poppins-semibold">4</span>
              </h2>
              <div className="flex gap-x-5">
                <p>Spending this month:</p>
                <p className="text-orange-400"> $0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBanks;
