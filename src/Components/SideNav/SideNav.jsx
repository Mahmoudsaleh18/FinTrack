import React from "react";

export default function SideNav() {
  return (
    <div className="navbar bg-black md:hidden">
      <div className="flex-none">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="btn btn-square btn-ghost drawer-overlay text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl text-white">FinTrack</a>
      </div>
    </div>
  );
}
