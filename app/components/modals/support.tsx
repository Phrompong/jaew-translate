"use client";

import Image from "next/image";
import Close from "../../../public/close.png";
import Payment from "../../../public/payment.png";

interface ModalProps {
  onClick?: any;
}

const SupportModal: React.FC<ModalProps> = ({ onClick }) => {
  return (
    <div className="fixed z-10 pt-24 w-full h-full overflow-auto bg-black bg-opacity-40 text-white">
      <div className="relative top-[20%]">
        <div className="flex justify-center">
          <div className="flex flex-col border w-[40%] p-10 rounded-lg bg-modal gap-10">
            <div className="flex flex-row justify-between ml-[40%]">
              <span className="text-lg">Support Us</span>
              <Image
                className="cursor-pointer w-4 h-4"
                src={Close}
                alt="close"
                onClick={onClick}
              ></Image>
            </div>

            {/* Content */}
            <div className="flex justify-center">
              <Image src={Payment} alt="payment"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
