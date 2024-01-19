"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const subscribeData = [
  {
    id: 1,
    title: "Send and Receive in Resilient and Stable Currencies",
    content:
      "Transfer funds using the stable currency of your preference and convert it to your local currency whenever needed.",
    image: "/feature/mob-1.png",
  },
  {
    id: 2,
    title: "Mastering a World of Multiple Currencies: Transfer With Ease",
    content:
      "Exchange back and forth between a variety of currencies including BTC, ETH, EURO, and USD",
    image: "/feature/mob-2.png",
  },
  {
    id: 3,
    title: "Paper Trail Freedom: Effortless Cash Withdrawals",
    content: "Withdraw cash through BTC ATMs and more options coming soon.",

    image: "/feature/mob-3.png",
  },
  {
    id: 4,
    title: "Retail Ready: Seamless In-Store Payments",
    content: "Retail Ready: Seamless In-Store Payments",

    image: "/feature/mob-4.png",
  },
  {
    id: 5,
    title: "Easy Transfer To and From Your Bank Account",
    content:
      "Initiate quick withdrawals and deposits from your bank account, ensuring fast and secure transactions.",
    image: "/feature/mob-5.png",
  },
  {
    id: 6,
    title: "An Account That’s Truly Yours",
    content:
      "Always have access to your funds. The Connecter offers direct peer-to-peer transactions, cutting out the middleman. Funds are always under the control of the sender or recipient.",

    image: "/feature/mob-6.png",
  },
];

const Accessible = () => {
  const [pic, setPic] = useState(1);

  const handlePic = (num) => {
    setPic(num);
  };

  return (
    <section className="my-[20px] custom-md:my-[40px] overflow-x-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-8">
        {/*  HEADING */}
        <h1 className="text-[30px] font-bold text-center text-white leading-[36px] ">
          YOUR MONEY.
          <br /> ANYWHERE &ndash; AS ACCESSIBLE AS THE INTERNET
        </h1>
        {/*   FOR LARGE SCREEN */}
        <div className="hidden lg:flex    custom-md:mt-[60px] custom-md:mb-[30px] ">
          {/*  LEFT SIDE */}
          <div className="flex flex-col gap-[30px] w-1/3 ">
            <div
              className={`accessible-bg  ${
                pic === 1 ? "accessible-active mr-0" : "mr-[30px]"
              }   min-h-[220px] flex flex-col gap-[20px] p-[10px] `}
              onClick={() => handlePic(1)}
            >
              <h4
                className={`text-[20px] leading-[30px] font-medium cursor-pointer ${
                  pic === 1 ? "text-[#caab3e]" : "text-white"
                }`}
              >
                Send and Receive in Resilient and Stable Currencies
              </h4>
              <p
                className={`text-[16px] leading-[24px] font-normal cursor-pointer  ${
                  pic === 1 ? "w-[75%] lg:w-[90%] mr-auto" : ""
                }`}
              >
                Transfer funds using the stable currency of your preference and
                convert it to your local currency whenever needed.
              </p>
            </div>
            {/*   2nd  */}
            <div
              className={`accessible-bg  ${
                pic === 2 ? "accessible-active mr-0" : "mr-[30px]"
              }   min-h-[220px] flex flex-col gap-[20px] p-[10px] `}
              onClick={() => handlePic(2)}
            >
              <h4
                className={`text-[20px] leading-[30px] font-medium cursor-pointer ${
                  pic === 2 ? "text-[#caab3e]" : "text-white"
                }`}
              >
                Mastering a World of Multiple Currencies: Transfer With Ease
              </h4>
              <p
                className={`text-[16px] leading-[24px] font-normal cursor-pointer  ${
                  pic === 2 ? "w-[75%] lg:w-[90%] mr-auto" : ""
                }`}
              >
                Exchange back and forth between a variety of currencies
                including BTC, ETH, EURO, and USD.
              </p>
            </div>
            {/*  3rd  */}
            <div
              className={`accessible-bg  ${
                pic === 3 ? "accessible-active mr-0" : "mr-[30px]"
              }   min-h-[220px] flex flex-col gap-[20px] p-[10px] `}
              onClick={() => handlePic(3)}
            >
              <h4
                className={`text-[20px] leading-[30px] font-medium cursor-pointer ${
                  pic === 3 ? "text-[#caab3e]" : "text-white"
                }`}
              >
                Paper Trail Freedom: Effortless Cash Withdrawals
              </h4>
              <p
                className={`text-[16px] leading-[24px] font-normal cursor-pointer  ${
                  pic === 3 ? "w-[75%] lg:w-[90%] mr-auto" : ""
                }`}
              >
                Withdraw cash through BTC ATMs and more options coming soon.
              </p>
            </div>
          </div>
          {/*  MIDDLE */}
          <div className="w-1/3 relative  lg:w-[400px] lg:max-w-[520px] custom-xl:w-[457px] custom-xl:max-w-[550px] h-[1090px] lg:h-[970px]">
            <Image
              src={`/feature/mob-${pic}.png`}
              alt="Mobile Image"
              priority
              fill
              sizes="100%"
              className="w-full h-full"
            />
          </div>
          {/*  RIGHT */}
          <div className="flex flex-col gap-[30px] w-1/3">
            <div
              className={`accessible-bg  ${
                pic === 4
                  ? "accessible-active-right ml-0 px-[30px]"
                  : "ml-[30px]"
              }   min-h-[220px] flex flex-col gap-[20px] p-[10px]`}
              onClick={() => handlePic(4)}
            >
              <h4
                className={`text-[20px] leading-[30px] font-medium cursor-pointer ${
                  pic === 4 ? "text-[#caab3e]" : "text-white"
                }`}
              >
                Retail Ready: Seamless In-Store Payments
              </h4>
              <p className="text-[16px] leading-[24px] font-normal cursor-pointer">
                Retail Ready: Seamless In-Store Payments
              </p>
            </div>
            {/*   5th  */}
            <div
              className={`accessible-bg  ${
                pic === 5
                  ? "accessible-active-right ml-0 px-[30px]"
                  : "ml-[30px]"
              }   min-h-[220px] flex flex-col gap-[20px] p-[10px] `}
              onClick={() => handlePic(5)}
            >
              <h4
                className={`text-[20px] leading-[30px] font-medium cursor-pointer ${
                  pic === 5 ? "text-[#caab3e]" : "text-white"
                }`}
              >
                Easy Transfer To and From Your Bank Account
              </h4>
              <p
                className={`text-[16px] leading-[24px] font-normal cursor-pointer  ${
                  pic === 5 ? "w-[90%] mr-auto" : ""
                }`}
              >
                Initiate quick withdrawals and deposits from your bank account,
                ensuring fast and secure transactions.
              </p>
            </div>
            {/*  6th  */}
            <div
              className={`accessible-bg  ${
                pic === 6 ? "accessible-active-right ml-0 " : "ml-[30px]"
              }   min-h-[220px] flex flex-col gap-[20px] p-[10px] `}
              onClick={() => handlePic(6)}
            >
              <h4
                className={`text-[20px] leading-[30px] font-medium cursor-pointer ${
                  pic === 6 ? "text-[#caab3e]" : "text-white"
                }`}
              >
                An Account That&lsquo;s Truly Yours
              </h4>
              <p
                className={`text-[16px] leading-[24px] font-normal cursor-pointer  ${
                  pic === 6 ? "w-[90%] mr-auto" : ""
                }`}
              >
                Always have access to your funds. The Connecter offers direct
                peer-to-peer transactions, cutting out the middleman. Funds are
                always under the control of the sender or recipient.
              </p>
            </div>
          </div>
        </div>
        {/*  FOR SMALL SCREEN */}
        <div className="flex lg:hidden flex-col my-[30px] gap-[30px]">
          {subscribeData.map((item) => (
            <div
              className="flex flex-col gap-[15px] items-center justify-center "
              key={item.id}
            >
              <h2 className="text-[35px] text-center leading-[42px] font-medium cursor-pointer text-white">
                {item.title}
              </h2>
              <p className="text-[16px] text-center leading-[24px] font-normal cursor-pointer text-white">
                {item.content}
              </p>
              <div className="relative w-[65%] h-[400px]  custom-sm:w-[60%]  custom-sm:h-[450px] sm:h-[600px] md:h-[900px] custom-md:h-[1030px]">
                <Image
                  src={item.image}
                  alt="mobile"
                  priority
                  fill
                  sizes="100%"
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessible;
