import Typography from "@/app/shared/Typography";
import Wrapper from "@/app/shared/Wrapper";
import React from "react";
import TestimonialCard from "../Cards/TestimonialCard";

const reviews = [
  {
    id: 1,
    content:
      "For as long as I can remember, the web 3 community has been trying to move towards 'mass adoption', but the platforms we use remain clunky and difficult to use for the average person. In order to onboard the masses something needs to change. Web 3 dApps should be as easy and simple as the app we are used to using in web 2. The Connecter understands this completely and has created something incredibly straightforward. They are driving true innovation and adoption by making blockchain/DeFi elements 'invisible'.",
    reviews: 5,
    author: "James Tarling",
    rank: "CEO & Founder",
    company: "Venture Ready",
  },
  {
    id: 2,
    content:
      "This partnership is a game-changer for African startups. The Connecter’s innovative technology will help entrepreneurs overcome the obstacles they face, and the non-custodial wallet, will provide a secure and reliable way to manage their investments. We are proud to endorse and use The Connecter and are excited to see the impact it will have on the African startup ecosystem.",
    reviews: 5,
    author: "Remy Chukwunyere",
    rank: "Executive Director",
    company: "Ugwamba Leadership Center",
  },
];
const Testimonial = () => {
  return (
    <section className="custom-md:mt-[80px] custom-md:mb-[40px] my-[40px]">
      <Wrapper>
        <div className="lg:px-16">
          <Typography.H2>HEAR FROM OUR PARTNERS</Typography.H2>
          <div className="flex flex-col lg:flex-row gap-x-[100px] gap-y-[30px] my-[40px] ">
            {reviews.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonial;
