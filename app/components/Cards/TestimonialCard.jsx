import Typography from "@/app/shared/Typography";
import React from "react";
import { FaStar } from "react-icons/fa";
const TestimonialCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-[15px] lg:w-1/2 ">
      <div className="flex gap-[2px]">
        {new Array(item.reviews).fill(0).map((item, i) => (
          <FaStar className="text-[#CBB876]" key={i} />
        ))}
      </div>
      <Typography.PSmall styles="text-[#BEBEBE] leading-[22.6px] text-start">
        &ldquo;{item.content}&rdquo;
      </Typography.PSmall>
      <div className="flex flex-col">
        <span className="text-[11.2px]  font-medium leading-[16.8px]">
          {item.author}
        </span>
        <span className="text-[11.2px]">{item.rank}</span>
        <span className="text-[11.2px]">{item.company}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
