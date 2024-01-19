"use client";

import React, { useState } from "react";
import Typography from "@/app/shared/Typography";
import Wrapper from "@/app/shared/Wrapper";
import Image from "next/image";
import { FaCcDiscover } from "react-icons/fa";

const SignUpSteps = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  return (
    <section className=" relative py-[40px]  image-glow">
      <Wrapper styles="w-full">
        <div className="w-[120px] h-[117px] md:w-[200px] md:h-[196px] custom-xl:w-[270px] custom-xl:h-[265px] signup-steps-bg ">
          <Image
            src={"/home/sign-steps.png"}
            alt="signup-steps"
            fill
            priority
            sizes="100%"
            className="w-full h-full"
          />
        </div>
        <Typography.H2>SIGN UP FOR FREE IN 3 SIMPLE STEPS</Typography.H2>
        <div className="w-full flex flex-col my-12 gap-8">
          {/* dots ----->  */}
          <div className="flex justify-center items-center gap-3">
            {tabs.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  className={` ${
                    selectedTab === index
                      ? "w-[50px] h-[7px] bg-[#D2C480] rounded-[60px]"
                      : "bg-[#696969] w-[7px] h-[7px]"
                  }   rounded-full transition-all duration-500 ease-in-out`}
                ></button>
              );
            })}
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-full lg:max-w-full max-w-[600px] relative after:absolute after:w-full after:h-full after:z-10 after:border-[1px] after:border-[#292929] after:top-[12px] md:after:top-[22px] after:rounded-xl after:-right-[12px] md:after:-right-[22px]">
              <div className="w-full  h-full relative bg-[#131314] z-30 grid gap-4 xl:gap-11 grid-cols-1 lg:grid-cols-[1fr,1.4fr] justify-center items-center rounded-xl p-4 sm:p-6 md:p-8 xl:p-12 border-[1px] border-[#292929]">
                {/* left portion ----->  */}
                <div className="w-full h-[320px] sm:h-[480px] md:h-[440px] lg:h-[380px] xl:h-[430px] relative">
                  <Image
                    src={tabs[selectedTab].img}
                    fill
                    alt=""
                    sizes="100%"
                    className={`object-fill transition-opacity duration-500 ease-in-out ${
                      imageOpacity === 0 ? "opacity-0" : "opacity-1"
                    }`}
                  />
                </div>
                {/* right portion --------->  */}
                <div className="w-full flex flex-col gap-3">
                  {tabs.map((item, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setImageOpacity(0);
                          setTimeout(() => {
                            setSelectedTab(index);
                            setImageOpacity(1);
                          }, 180);
                        }}
                        className={`w-full h-[65px] sm:h-[90px] flex justify-start items-center gap-3 sm:gap-5 px-3 sm:px-6 border-[1px] border-[#292929] rounded-xl hover:bg-[#191919] ${
                          selectedTab === index
                            ? "bg-[#191919]"
                            : "bg-[#131314]"
                        } `}
                      >
                        {/* select box ---->  */}
                        {selectedTab === index ? (
                          <div className="relative justify-center items-center">
                            <div className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] relative">
                              <Image
                                src="/home/checked.png"
                                className="object-cover cursor-pointer"
                                fill
                                alt=""
                                sizes="100%"
                              />
                            </div>
                            <div className="absolute -rotate-[80deg] -top-[7px] sm:-top-2 -left-[6px] sm:-left-2">
                              <div className="sm:min-w-[34px] rotate-90 h-[30px] min-w-[30px] sm:h-[34px] relative">
                                <Image
                                  src="/home/dots.png"
                                  className="object-fill cursor-pointer"
                                  alt=""
                                  fill
                                  sizes="100%"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="min-w-[20px] sm:min-w-[25px] h-[20px] sm:h-[25px] relative">
                            <Image
                              src="/home/check-box.png"
                              className="object-contain cursor-pointer"
                              fill
                              alt=""
                              sizes="100%"
                            />
                          </div>
                        )}
                        {/* text --->  */}
                        <p className="text-[14px] sm:text-[19px] tracking-wide font-normal text-left leading-[22px] sm:leading-[32px] text-[#CAAB3E]">
                          {item.text}
                        </p>
                      </button>
                    );
                  })}
                  {/* tabs -->  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

const tabs = [
  {
    text: "Create Your Username and Password",
    img: "/home/step1.png",
  },
  {
    text: "Add a New Account or Import an ExistingOne",
    img: "/home/step2.png",
  },
  {
    text: "Begin Transacting",
    img: "/home/step3.png",
  },
];

export default SignUpSteps;
