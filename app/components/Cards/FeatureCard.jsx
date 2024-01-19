import Image from "next/image";
import React from "react";

const FeatureCard = ({ item }) => {
  return (
    <div className="items-center justify-center custom-md:justify-start  custom-md:w-[350px] p-[20px] bg-transparent feature-card">
      <div className="feature-card-icon">
        <div className=" relative  w-[40px] h-[40px]">
          <Image
            src={item.icon}
            alt="icon"
            fill
            priority
            sizes="100%"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[10px] items-center justify-center custom-md:justify-start">
        <h3 className="text-[20px] font-medium text-white">{item.title}</h3>
        <p className="text-[13px] font-normal text-white">{item.content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
