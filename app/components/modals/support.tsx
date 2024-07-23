"use client";

import Image from "next/image";
import Close from "../../../public/close.png";
import Payment from "../../../public/payment.jpg";

interface ModalProps {
  onClick?: any;
}

const SupportModal: React.FC<ModalProps> = ({ onClick }) => {
  return (
    <div className="fixed z-10 pt-24 w-full h-full overflow-auto bg-black bg-opacity-40 text-white">
      <div className="relative top-[20%]">
        <div className="flex justify-center">
          <div className="flex flex-col border lg:w-[40%] md:w-[90%] p-10 rounded-lg bg-modal gap-10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-end">
                <Image
                  className="cursor-pointer w-4 h-4"
                  src={Close}
                  alt="close"
                  onClick={onClick}
                ></Image>
              </div>
              <span className="text-lg text-center">Support Us</span>{" "}
            </div>

            {/* Content */}
            <div className="flex justify-center">
              <Image width={300} src={Payment} alt="payment"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
