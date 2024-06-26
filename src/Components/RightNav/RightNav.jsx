import React from "react";
import Profile from "../../assets/Profile.png";
import { IconContext } from "react-icons";
import { BiMessageSquare } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";

function RightNav() {
  return (
    <>
      <div className="hidden lg:grid min-h-28 justify-self-center self-start row-span-2 grid py-4">
        <div className="avatar online place-self-center ">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="py-3 text-center">
          <h2 className="text-xl text-white poppins-bold">Samantha</h2>
          <h2 className="poppins-medium">samantha@gmail.com</h2>
        </div>
        <div className="flex gap-3 ">
          <div>
            <IconContext.Provider value={{ className: "text-white " }}>
              <button className="btn btn-lg hover:bg-orange-500 self-center justify-self-center	">
                <BiMessageSquare />
              </button>
            </IconContext.Provider>
          </div>
          <div className="">
            <IconContext.Provider value={{ className: "text-white" }}>
              <button className="btn btn-lg hover:bg-orange-500 self-center justify-self-center	">
                <IoNotificationsOutline />
              </button>
            </IconContext.Provider>
          </div>
          <div>
            <IconContext.Provider value={{ className: "text-white" }}>
              <button className="btn btn-lg hover:bg-orange-500 self-center justify-self-center	">
                <LuPencilLine />
              </button>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className=" poppins-semibold rounded-lg min-h-28 row-span-4 self-center text-center p-3 ">
        <h1 className="text-orange-500 text-2xl ">Smart Invesment</h1>
        <p className="text-white poppins-medium pb-5 pt-8">
          We have developed a service for novice investors
        </p>
        <button className="btn bg-orange-400 btn-xs sm:btn-sm md:btn-md text-white">
          More Details
        </button>
      </div>
    </>
  );
}

export default RightNav;
