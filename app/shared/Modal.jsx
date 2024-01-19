import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
const Modal = ({
  isOpen,
  setIsOpen,
  children,
  styles = "w-[350px] max-w-[500px] sm:w-[650px] sm:max-w-[700px] custom-md:w-full md:max-w-[900px] h-[400px] sm:h-[600px] custom-md:h-[90vh] custom-xl:h-[80vh] mx-auto custom-md:my-auto  ",
}) => {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = () => {
    if (isOpen) {
      toggleModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-active");
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.classList.remove("modal-active");
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-10 ">
          <div
            className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 border"
            onClick={handleOverlayClick}
          ></div>

          <div className={`${styles}  `}>
            {/*   CLOSE ICON */}
            <div className="flex justify-end pr-[10px] py-[5px] ">
              <IoClose
                className="text-[#ffffff] opacity-50 hover:opacity-100 text-right text-[20px] z-10 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="bg-[#000000]  z-10">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
