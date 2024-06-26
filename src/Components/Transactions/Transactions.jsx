import React, { useState, useEffect } from "react";
import RecentTransactions from "../RecentTransctions/RecentTransactions";

function Transactions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10); // Number of transactions per page
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Payment from John Doe", amount: 500.0 },
    { id: 2, description: "Grocery Shopping", amount: -100.0 },
    { id: 3, description: "Utility Bill Payment", amount: -150.0 },
    // Add more transactions as needed
  ]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  useEffect(() => {
    // Fetch transactions from API or database
  }, []);

  return (
    <div className="h-auto w-full">
      <div className="md:py-6 px-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Transaction <span className="text-orange-500">History</span>
        </h1>
      </div>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-5 gap-5">
        <div className="bg-orange-500 rounded-md p-5 self-center flex flex-col col-span-full md:flex-row justify-between row-span-2">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Bank of America
            </h1>
            <p className="font-semibold py-2">Chase Growth Savings Account</p>
            <p className="font-bold text-lg">**** **** **** 9999</p>
          </div>
          <div className="text-center border-2 border-orange-200 p-4 rounded-lg bg-orange-300/10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-2">
              Current Balance
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              $1250.00
            </p>
          </div>
        </div>

        <div className="row-span-3 col-span-full md:col-span-3 pt-5">
          {/* Render recent transactions */}
          <RecentTransactions transactions={currentTransactions} />

          {/* Pagination buttons */}
          <div className="flex justify-center mt-5">
            <button
              className="join-item btn mx-2"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[
              ...Array(
                Math.ceil(transactions.length / transactionsPerPage)
              ).keys(),
            ].map((number) => (
              <button
                key={number + 1}
                className={`join-item btn ${
                  currentPage ? "bg-orange-500 font-bold" : "bg-transparent"
                }`}
                onClick={() => setCurrentPage(number + 1)}
              >
                {currentPage}
              </button>
            ))}
            <button className="join-item btn mx-2" onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
