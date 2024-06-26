import React from "react";
import { MdDelete } from "react-icons/md";

function RecentTransactions() {
  return (
    <>
      <div role="tablist" className="tabs tabs-bordered  ">
        <a
          role="tab"
          className="tab text-orange-500 tab-active text-xs md:text-base"
        >
          Chase Bank
        </a>
        <a role="tab" className="tab text-white text-xs md:text-base">
          Bank of America
        </a>
        <a role="tab" className="tab text-white text-xs md:text-base">
          Platybus Bank
        </a>
      </div>
      {/* transactions */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <div className="text-red-500 text-2xl cursor-pointer">
                  <MdDelete />
                </div>
              </th>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox checkbox-error " />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-red-500">-$15.00</span>
              </td>
              <td>Wed 1:00pm</td>
              <th>
                <button className="btn btn-warning btn-xs">pending</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox checkbox-error" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-green-500">+$25.00</span>
              </td>
              <td>Wed 4:00am</td>
              <th>
                <button className="btn btn-success btn-xs">Success</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox checkbox-error" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-red-500">-$35.00</span>
              </td>
              <td>Tue 1:14am</td>
              <th>
                <button className="btn btn-error btn-xs">Failed</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox checkbox-error" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-green-500">+$42.00</span>
              </td>
              <td>Tue 12:10am</td>
              <th>
                <button className="btn btn-success btn-xs">Success</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RecentTransactions;
