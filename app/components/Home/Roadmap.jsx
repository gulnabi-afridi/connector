import Typography from "@/app/shared/Typography";
import Wrapper from "@/app/shared/Wrapper";
import React from "react";
import Timeline from "../Timeline/Timeline";

const Roadmap = () => {
  return (
    <section className="custom-md:mt-[80px] custom-md:mb-0 my-[40px]">
      <Wrapper>
        <Typography.H2>ROADMAP</Typography.H2>
        <Timeline />
      </Wrapper>
    </section>
  );
};

export default Roadmap;
