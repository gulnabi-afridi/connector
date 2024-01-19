import NewsLetterForm from "@/app/shared/NewsLetterForm";
import Wrapper from "@/app/shared/Wrapper";
import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <section className="my-[40px]">
      <Wrapper>
        <div className="subscribe-container flex flex-col gap-[20px] custom-md:w-[80%] mx-auto ">
          {/*  TOP */}
          <div className="flex flex-col gap-[13px] mt-[20px]">
            <h4 className="text-[16px] font-medium text-white text-center">
              INTRODUCING
            </h4>
            <h1 className=" text-[35px] custom-md:text-[66px] font-bold  text-white flex items-center text-center justify-center">
              ZER
              <div className="relative w-[35px] h-[35px] custom-md:w-[50px] custom-md:h-[50px] mr-[20px]">
                <Image
                  src="/subscribe/zero.png"
                  alt="zero"
                  fill
                  priority
                  className="w-full h-full"
                />
              </div>
              <span> FEES</span>
            </h1>
            <h4 className="text-[16px] font-medium text-white text-center">
              WEEK WITH THE CONNECTER
            </h4>
            <p className="text-[#ADADAD] text-[12px] leading-[18px] custom-md:w-[80%] mx-auto text-center">
              As we gear up for the launch of The Connecter V1 app, we&lsquo;re
              offering an exclusive experience to the first 10,000 subscribers-
              zero transaction fees for an entire week. It&lsquo;s your chance
              to explore our cutting edge global payments app, experience the
              future of finance, and enjoy fee-free transactions for 7 days
              straight.
            </p>
          </div>
          {/*  BOTTOM  */}
          {/*   TODO MAILCHIMP  */}
          {/* <NewsletterSubscribe
            styles={
              "flex flex-col custom-md:w-[90%]  mx-auto  mb-[20px] w-full"
            }
          /> */}
          <NewsLetterForm
            styles={
              "flex flex-col custom-md:w-[90%]  mx-auto  mb-[20px] w-full"
            }
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default Introduction;
