import React from "react";
import { NavLink } from "react-router-dom";
import SideNav from "../SideNav/SideNav";

function MainNav({ children }) {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-black ">
        <SideNav />
        {/* Rendered component will appear here */}
        <div className="content">{children}</div>
      </div>
      <div className="drawer-side no-scrollbar">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-black text-base-content min-h-full w-72 p-4 ">
          {/* main title */}
          <div className="pl-2 poppins-black-italic pb-10">
            <h1 className=" text-3xl text-white pl-1 pb-10  ">
              Fin<span className="text-orange-500">Track</span>
            </h1>
          </div>
          <div className=" grid lg:hidden justify-center ">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="py-3 text-center">
              <h2 className="text-xl text-white poppins-bold">Samantha</h2>
              <h2 className="poppins-medium">samantha@gmail.com</h2>
            </div>
          </div>
          {/* links */}
          <div>
            <ul className="text-2xl">
              <li className="py-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-white"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  to="/banks"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-white"
                  }
                >
                  My Banks
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  to="/transactions"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-white"
                  }
                >
                  Transctions History
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  to="/transfers"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-white"
                  }
                >
                  Transfers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
