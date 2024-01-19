import Wrapper from "@/app/shared/Wrapper";
import React from "react";

const Hero = () => {
  return (
    <section className="feature-bg h-[calc(100vh-105px)]">
      <Wrapper styles="px-4 sm:px-8 custom-md:px-14 w-full h-full">
        <div className="flex items-center justify-center h-full">
          <h1 className="text-[30px] font-bold text-center text-white leading-[36px] custom-md:w-[80%] custom-md:mt-[20px] mx-auto">
            SIMPLE <span className="text-[#caab3e]"> FINANCIAL TOOLS </span>
            DESIGNED FOR THE FUTURE EASY TO USE, SAFE & GLOBAL TRANSACTIONS
          </h1>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
