import React from "react";

const BtnSpinner = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <div className="w-7 h-7 rounded-full  border-2 border-dashed border-white animate-spin "></div>
      <p className="font-bold">Processing...</p>
    </div>
  );
};

export default BtnSpinner;
