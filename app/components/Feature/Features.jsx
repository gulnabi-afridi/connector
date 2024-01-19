import Feature from "@/app/feature/page";
import Wrapper from "@/app/shared/Wrapper";
import React from "react";
import FeatureCard from "../Cards/FeatureCard";
const features = [
  {
    id: 1,
    title: "HERE’S HOW WE STAND OUT",
    content:
      "Gain unrestricted access to essential financial tools without any account fees. At The Connecter, we believe in democratizing finance for everyone, everywhere.",
    icon: "/feature/home-icon.png",
  },
  {
    id: 2,
    title: "INSTANT TRANSFERS",
    content:
      "We know how tired you are of waiting days for transactions to be approved. With The Connecter, your transactions will happen not in days, or even hours, but at the speed of a few seconds.",
    icon: "/feature/paper.png",
  },
  {
    id: 3,
    title: "EASY TO USE",
    content:
      "The Connecter combines the power of blockchain technology with a simple user interface that requires no advanced learning. No more long seed phrases or the fear of losing access – just a user-friendly experience of the financial tools you need.",
    icon: "/feature/easy.png",
  },
  {
    id: 4,
    title: "REQUEST & RECEIVE",
    content:
      "Facilitating payment requests through QR codes, The Connecter is made for anyone. Freelancers and businesses can also enjoy an easy-to-use platform that overcomes geographical boundaries.",
    icon: "/feature/req.png",
  },
  {
    id: 5,
    title: "SKIP THE MIDDLEMAN",
    content:
      "Skip the unnecessary middlemen and extra fees—The Connecter operates on a decentralized blockchain, enabling truly peer-to-peer money transfers. Much like buying potatoes with cash directly from the farmer, rather than the supermarket which is more expensive.",
    icon: "/feature/hand.png",
  },
  {
    id: 6,
    title: "BULLETPROFF SECURITY",
    content:
      "Safeguard your account with a PIN, email login, and facial biometrics powered by Multi-Party Computation [MPC] technology. At The Connecter, we prioritize security without compromising the simplicity.",

    icon: "/feature/secure.png",
  },
];

export const Features = () => {
  return (
    <section className="my-[30px] sm:my-[50px]">
      <Wrapper>
        <div className="grid grid-cols-1 custom-md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
          {features.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
