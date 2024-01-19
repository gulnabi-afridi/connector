"use client";
import Modal from "@/app/shared/Modal";
import Wrapper from "@/app/shared/Wrapper";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

const Video = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="my-[40px] ">
      <Wrapper>
        <div className="video-section  max-w-full h-[250px] sm:h-[500px] custom-md:h-[650px] mx-auto my-auto">
          <Image
            src={"/home/thumbnail.webp"}
            alt="video"
            fill
            sizes="(max-width: 768px) 695px, (max-width: 900px) 1259px"
            priority
            className="w-full h-full"
          />
          <a
            // href="https://www.youtube.com/watch?v=fJQpu0763_U"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <FaPlay className="video-button cursor-pointer text-[30px] custom-md:text-[44px]" />
          </a>
        </div>
      </Wrapper>

      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <div className="relative my-auto h-[90%]">
          {" "}
          <iframe
            src="https://www.youtube.com/embed/fJQpu0763_U"
            title="YouTube video player"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="iframe-model h-[300px] sm:h-[400px] custom-md:h-[500px]"
          ></iframe>
        </div>
      </Modal>
    </section>
  );
};

export default Video;
