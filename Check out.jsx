import React, { useState } from "react";
import ConfirmationPopup from "./Confirm";
function Checkout() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCheckout = () => {
    setIsPopupOpen(true);
  };

  const handleConfirm = () => {
    // هنا يمكنك إضافة المنطق الخاص بتأكيد عملية الشراء
    console.log("Checkout confirmed");
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white p-4 md:p-8 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-xl mb-6 flex items-center">Shopping Continue</h2>
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gray-800 rounded-lg p-4 mb-4 flex flex-col sm:flex-row items-center"
          >
            <img
              src="placeholder.jpg"
              alt="Event"
              className="w-16 h-16 rounded mr-4 mb-4 sm:mb-0"
            />
            <div className="flex-grow mb-4 sm:mb-0 text-center sm:text-left">
              <h3 className="font-bold">RIYADH MASTERS X ESPORTS WORLD CUP</h3>
            </div>
            <div className="flex items-center">
              <span className="mx-2">1</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <span className="ml-4">$681</span>
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Let's Make Payment</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Cardholder's Name</label>
            <input
              type="text"
              placeholder="User Name"
              className="w-full bg-gray-700 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Card Number</label>
            <div className="relative">
              <input
                type="text"
                placeholder="User Name"
                className="w-full bg-gray-700 rounded p-2 pl-10"
              />
              <div className="absolute left-2 top-2">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div className="absolute left-0 top-2">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="w-full sm:w-1/2 sm:mr-2 mb-4 sm:mb-0">
              <label className="block text-sm mb-2">Expiry</label>
              <input
                type="text"
                placeholder="User Name"
                className="w-full bg-gray-700 rounded p-2"
              />
            </div>
            <div className="w-full sm:w-1/2 sm:ml-2">
              <label className="block text-sm mb-2">CVC</label>
              <input
                type="text"
                placeholder="User Name"
                className="w-full bg-gray-700 rounded p-2"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2">Discount Code</label>
            <div className="flex">
              <input
                type="text"
                placeholder="User Name"
                className="flex-grow bg-gray-700 rounded-l p-2"
              />
              <button className="bg-purple-600 text-white px-4 rounded-r">
                Apply
              </button>
            </div>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Subtotal</span>
            <span>$ 400.00</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Discount & Offers</span>
            <span>50%</span>
          </div>
          <div className="mb-6 flex justify-between text-xl font-bold">
            <span className="text-red-500">Total</span>
            <span>$ 200.00</span>
          </div>
          <button
            className="w-full bg-pink-600 text-white py-3 rounded-lg"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </form>
      </div>

      <ConfirmationPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default Checkout;
