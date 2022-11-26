import React from "react";
import laptop from "../../../assets/Laptop.jpg";

const TopBanner = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 bg-gray-200 rounded-md shadow-md">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="lg:text-5xl text-3xl font-bold leading-none sm:text-6xl">
              Ac mattis
              <span className="text-primary">senectus</span>erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={laptop}
              alt="laptop"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopBanner;
