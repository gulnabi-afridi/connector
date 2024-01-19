import NewsLetterForm from "@/app/shared/NewsLetterForm";
import Wrapper from "@/app/shared/Wrapper";
import Link from "next/link";
import React from "react";

const Subscribe = () => {
  return (
    <section className="my-[40px]  custom-md:mt-[50px] custom-md:mb-[70px]">
      <Wrapper>
        <div className="subscribe-container flex flex-col custom-md:flex-row gap-[10px] sm:gap-[30px] items-center">
          {/*  LEFT SIDE */}
          <div className="w-full custom-md:w-2/5 subscribe-bg h-[350px] sm:h-[400px]">
            <div className=" flex justify-start items-end h-[93%] pl-[20px]">
              <Link
                href={
                  "https://www.startupbootcamp.com.au/blog/discover-the-10-startups-leading-ai-driven-global-financial-transformation"
                }
              >
                <button className="read-more-button">Read More</button>
              </Link>
            </div>
          </div>
          {/*  RIGHT SIDE */}
          <div className="custom-md:w-3/5">
            <div className="flex flex-col gap-[30px] py-[10px] custom-md:py-[40px] ">
              <h2 className="text-[20px] text-white font-bold leading-[25.2px] custom-md:pt-[10px]">
                SUBSCRIBE TODAY &hyphen; STEP INTO THE FUTURE OF FINANCE
                <br />
                <br />
                It Really is That Simple
              </h2>
              <p className="text-[12px] font-normal leading-[18px]">
                Living in different countries? Earning in various currencies?
                Managing your finances shouldn&lsquo;t be a burden. The
                Connecter is your simplified financial tools solution, bringing
                seamless transactions to your fingertips. Have complete
                ownership over your account, engage in easy peer-to-peer
                transactions, and revel in the simplicity that is The Connecter
                V1.
              </p>
              {/*   FORM  */}

              <NewsLetterForm styles={"flex flex-col custom-md:mt-[10px]"} />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Subscribe;
