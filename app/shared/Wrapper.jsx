import React, { ReactNode } from "react";

const Wrapper = ({ children, styles = "px-4 sm:px-8 custom-md:px-14" }) => {
  return (
    <div className={`w-full ${styles}`}>
      <div className="w-full h-full max-w-[1400px] m-auto md:px-8 px-4">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
