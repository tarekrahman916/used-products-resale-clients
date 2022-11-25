import React from "react";
import {
  ClockIcon,
  CreditCardIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const Info = () => {
  return (
    <section className="p-6 my-6 bg-gray-100 text-gray-100">
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
            <ShoppingCartIcon className="h-10 w-10 text-gray-900" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-xl font-semibold leading-none">
              Free Shipping & Return
            </p>
            <p className="capitalize">On all order over $120.00</p>
          </div>
        </div>

        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
            <ClockIcon className="h-10 w-10 text-gray-900" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-xl font-semibold leading-none">
              Customer Support 24/7
            </p>
            <p className="capitalize">Instant access to support</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
            <CreditCardIcon className="h-10 w-10 text-gray-900" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-xl font-semibold leading-none">
              100% Secure Payment
            </p>
            <p className="capitalize">We ensure secure payment!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
