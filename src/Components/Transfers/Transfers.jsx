import React, { useState } from "react";

function Transfers() {
  const [bankChoice, setBankChoice] = useState("Bank 1");
  const [transferNote, setTransferNote] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientBankNumber, setRecipientBankNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", {
      bankChoice,
      transferNote,
      recipientEmail,
      recipientBankNumber,
      amount,
    });
    setBankChoice("Bank 1");
    setTransferNote("");
    setRecipientEmail("");
    setRecipientBankNumber("");
    setAmount("");
  };

  return (
    <div className="h-auto">
      <div className="rounded-lg col-span-3 row-span-1 md:py-6 px-5 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white pb-3">
          Payment <span className="text-orange-500">Transfers</span>
        </h1>
        <p className="text text-zinc-300 text-l poppins-medium pb-10">
          Please provide any specific details or notes related to the payment
          transfer
        </p>

        <div className="container">
          <div className="lg:w-max">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <h2 className="text-3xl pb-1 text-white">
                  Bank account details
                </h2>
                <p>Enter the bank account details of the recipient </p>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    htmlFor="gridChoose"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Choose Bank
                  </label>
                  <div className="relative">
                    <select
                      id="gridChoose"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      value={bankChoice}
                      onChange={(e) => setBankChoice(e.target.value)}
                    >
                      <option value="Bank 1">Bank 1</option>
                      <option value="Bank 2">Bank 2</option>
                      <option value="Bank 3">Bank 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    htmlFor="gridNote"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Transfer Note
                  </label>
                  <textarea
                    id="gridNote"
                    type="text"
                    placeholder="Enter a Note"
                    value={transferNote}
                    onChange={(e) => setTransferNote(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="lg:w-max">
                <div className="mb-4">
                  <h2 className="text-3xl pb-1 text-white">
                    Bank account details
                  </h2>
                  <p>Enter the bank account details of the recipient </p>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      htmlFor="gridEmail"
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                      Recipient's Email Address
                    </label>
                    <input
                      id="gridEmail"
                      type="text"
                      placeholder="example@gmail.com"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      htmlFor="gridBankNumber"
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                      Recipient's Bank Account Number
                    </label>
                    <input
                      id="gridBankNumber"
                      type="text"
                      placeholder="Enter the account number"
                      value={recipientBankNumber}
                      onChange={(e) => setRecipientBankNumber(e.target.value)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      htmlFor="gridAmount"
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                      Amount
                    </label>
                    <input
                      id="gridAmount"
                      type="text"
                      placeholder="Enter the amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>
                </div>
                <input type="submit" value="Transfer" className="btn-lg btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfers;
