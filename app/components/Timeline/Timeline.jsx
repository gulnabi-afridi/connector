import React from "react";

const Timeline = () => {
  return (
    <>
      <div className="hidden  custom-md:block  w-full mt-[40px] h-[98vh] custom-lg:h-[94vh]  min-h-[88vh]  my-auto  custom-lg:mt-[20px] overflow-x-hidden">
        {/* <!-- Vertical Timeline #1 --> */}

        <div className="relative pl-8  py-6 group ">
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[95%]  before:mt-[6px] before:mb-0  before:px-[.5px] before:bg-[#1c1c1c] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 ">
            <span className="circle-number w-[50px] h-[50px] text-[16px] custom-xl:w-[60px] custom-xl:h-[60px] custom-xl:text-[22px] absolute left-2 sm:left-0  sm:ml-[6.5rem] -translate-x-1/2 ">
              01
            </span>
          </div>
          {/*   FOR CONTENT */}
          <div className="translate-x-[120px]">
            <div className="flex gap-[5px] pt-[15px] items-center">
              <h4 className="text-[20px] md:text-[22.4px] timeline-heading">
                PHASE 1:
              </h4>
              <span className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
                (Q3 2023)
              </span>
            </div>
            <h5 className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
              • Conception & Ideation
            </h5>
          </div>
          <div className="h-[88px]"></div>
        </div>

        {/* <!-- Item #2 --> */}
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[92%]  before:mt-[6px] before:mb-0  before:px-[.5px] before:bg-[#1c1c1c] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-[12px] after:h-[12px]  after:border-[1px] after:box-content after:border-[#1c1c1c] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <div className="absolute flex w-[50%] -top-[10px] custom-lg:top-[4px] custom-xl:top-[4px] left-[110px]">
              <div className="flex items-center w-1/2">
                <span className="h-[1px] w-full max-w-full border-[1px] border-solid border-[#1c1c1c] "></span>
                <span className="circle-number w-[50px] h-[45px] text-[16px] custom-xl:w-[65px] custom-xl:h-[60px] custom-xl:text-[22px] p-[10px]">
                  02
                </span>
              </div>
              {/*   FOR CONTENT */}
              <div className=" ml-[30px] flex-1 flex-nowrap ">
                <div className="flex gap-[5px] pt-[15px] items-center">
                  <h4 className="text-[20px] md:text-[22.4px] timeline-heading">
                    PHASE 2:
                  </h4>
                  <span className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
                    (Q4 2023-Q3 2024)
                  </span>
                </div>
                <h5 className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
                  •The Connecter App MVP
                </h5>
              </div>
            </div>
          </div>
          {/*   FOR CONTENT */}
          <div className="h-[90px]"></div>
        </div>

        {/* <!-- Item #3 --> */}
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[92%]  before:mt-[6px] before:mb-0  before:px-[.5px] before:bg-[#1c1c1c] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-[12px] after:h-[12px]  after:border-[1px] after:box-content after:border-[#1c1c1c] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <div className="absolute flex w-[75%] -top-[5px]  left-[110px]">
              <div className="flex items-center w-2/3">
                <span className="h-[1px] w-full border-[1px] border-solid border-[#1c1c1c] "></span>
                <span className="circle-number w-[50px] h-[45px] text-[16px] custom-xl:w-[65px] custom-xl:h-[60px] custom-xl:text-[22px]">
                  03
                </span>
              </div>
              {/*   FOR CONTENT */}
              <div className=" ml-[30px] ">
                <div className="flex gap-[5px] pt-[15px] items-center">
                  <h4 className="text-[20px] md:text-[22.4px] timeline-heading">
                    PHASE 3:
                  </h4>
                  <span className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
                    (Q4 2024-Q1 2025)
                  </span>
                </div>
                <h5 className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
                  • The Connecter Beta Launch for IOS/Android
                </h5>
              </div>
            </div>
          </div>
          {/*   FOR CONTENT */}
          <div className="h-[90px]"></div>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[92%]  before:mt-[6px] before:mb-0  before:px-[.5px] before:bg-[#1c1c1c] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-[12px] after:h-[12px]  after:border-[1px] after:box-content after:border-[#1c1c1c] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <div className="absolute flex w-full max-w-full custom-md:-top-[20px]  custom-lg:-top-[14px] custom-xl:top-[3px] left-[110px]">
              <div className="flex items-center w-2/3">
                <span className="h-[1px] w-full border-[1px] border-solid border-[#1c1c1c] "></span>
                <span className="circle-number w-[50px] h-[45px] text-[16px] custom-xl:w-[65px] custom-xl:h-[60px] custom-xl:text-[22px]">
                  04
                </span>
              </div>
              {/*   FOR CONTENT */}
              <div className="ml-[10px] custom-lg:ml-[30px] w-1/3 max-w-1/3">
                <div className="flex gap-[5px] pt-[15px] items-start custom-xl:items-center flex-col  custom-xl:flex-row">
                  <h4 className="text-[20px] md:text-[22.4px] timeline-heading">
                    PHASE 4:
                  </h4>
                  <span className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
                    (Q2 2025 & Beyond)
                  </span>
                </div>
                <h5 className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px] max-w-[70%] custom-lg:w-full">
                  •The Connecter Ecosystem Growth
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*   FOR MOBILE AND TAB SCREEN  ================>*/}
      <div className="block custom-md:hidden  w-full my-[10px]  ">
        {/* <!-- Vertical Timeline #1 --> */}
        {/*  PHASE 1 */}
        <div className="relative pl-8  py-6 group ">
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 custom-md:before:left-0 before:h-[92%]  before:mt-[6px] before:mb-0  before:px-[.5px] before:bg-[#1c1c1c] custom-md:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 ">
            <span className="circle-number w-[50px] h-[50px] text-[16px] custom-xl:w-[65px] custom-xl:h-[60px] custom-xl:text-[22px] absolute left-2 custom-md:left-0  custom-md:ml-[6.5rem] -translate-x-1/2 ">
              01
            </span>
          </div>
          {/*   FOR CONTENT */}
          <div className="translate-x-[15px] custom-md:translate-x-[120px] max-w-full">
            <div className="flex gap-[5px] pt-[15px] items-center">
              <h4 className="text-[20px] md:text-[22.4px] timeline-heading">
                PHASE 1:
              </h4>
              <span className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
                (Q3 2023)
              </span>
            </div>
            <h5 className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
              • Conception & Ideation
            </h5>
          </div>
        </div>
        {/*  PHASE 2 */}
        <div className="relative pl-8  py-6 group ">
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 custom-md:before:left-0 before:h-[92%]  before:mt-[6px] before:mb-0  before:px-[.5px] before:bg-[#1c1c1c] custom-md:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 ">
            <span className="circle-number w-[50px] h-[50px] text-[16px] custom-xl:w-[65px] custom-xl:h-[60px] custom-xl:text-[22px] absolute left-2 custom-md:left-0  custom-md:ml-[6.5rem] -translate-x-1/2 ">
              02
            </span>
          </div>
          {/*   FOR CONTENT */}
          <div className="translate-x-[15px] custom-md:translate-x-[120px] max-w-full">
            <div className="flex gap-[5px] pt-[15px] items-center">
              <h4 className="text-[20px] md:text-[22.4px] timeline-heading">
                PHASE 2:
              </h4>
              <span className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
                (Q4 2023-Q3 2024)
              </span>
            </div>
            <h5 className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
              • The Connecter App MVP
            </h5>
          </div>
        </div>
        {/*  PHASE 3 */}
        <div className="relative pl-8  py-6 group ">
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 custom-md:before:left-0 before:h-[92%]  before:mt-[6px] before:mb-0  before:px-[.5px] before:bg-[#1c1c1c] custom-md:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 ">
            <span className="circle-number w-[50px] h-[50px] text-[16px] custom-xl:w-[65px] custom-xl:h-[60px] custom-xl:text-[22px] absolute left-2 custom-md:left-0  custom-md:ml-[6.5rem] -translate-x-1/2 ">
              03
            </span>
          </div>
          {/*   FOR CONTENT */}
          <div className="translate-x-[15px] custom-md:translate-x-[120px] max-w-full">
            <div className="flex gap-[5px] pt-[15px] items-center">
              <h4 className="text-[20px] md:text-[22.4px] timeline-heading">
                PHASE 3:
              </h4>
              <span className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
                (Q4 2024-Q1 2025)
              </span>
            </div>
            <h5 className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
              • The Connecter Beta Launch for IOS/Android
            </h5>
          </div>
        </div>
        {/*  PHASE 4 */}
        <div className="relative pl-8  py-6 group ">
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 custom-md:before:left-0 before:h-[92%]  before:mt-[6px] before:mb-0  before:px-[.5px] before:bg-[#1c1c1c] custom-md:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 ">
            <span className="circle-number w-[50px] h-[50px] text-[16px] custom-xl:w-[65px] custom-xl:h-[60px] custom-xl:text-[22px] absolute left-2 custom-md:left-0  custom-md:ml-[6.5rem] -translate-x-1/2 ">
              04
            </span>
          </div>
          {/*   FOR CONTENT */}
          <div className="translate-x-[15px] custom-md:translate-x-[120px] max-w-full">
            <div className="flex gap-[5px] pt-[15px] items-center">
              <h4 className="text-[20px] md:text-[22.4px] timeline-heading">
                PHASE 4:
              </h4>
              <span className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
                (Q2 2025 & Beyond)
              </span>
            </div>
            <h5 className="text-[#7A7A7A] text-[13px] custom-xl:text-[14px] leading-[15.6px] font-medium pt-[10px]">
              • The Connecter Ecosystem Growth
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
