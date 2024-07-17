"use client";

import Box from "../box";
import Image from "next/image";
import IconTranslate from "../../../public/icon-translate.png";
import Close from "../../../public/close.png";
import PhoneModal from "../../../public/phone-modal.png";
import Line from "../../../public/line.png";
import Email from "../../../public/email.png";
import World from "../../../public/world.png";

interface ModalProps {
  onClick?: any;
}

const ContactModal: React.FC<ModalProps> = ({ onClick }) => {
  return (
    <div className="fixed z-10 pt-24 w-full h-full overflow-auto bg-black bg-opacity-40 text-white">
      <div className="relative top-[20%]">
        <div className="flex justify-center">
          <div className="flex flex-col border w-[40%] p-10 rounded-lg bg-modal gap-10">
            <div className="ml-[45%]">
              <div className="flex flex-row justify-between">
                <span>Contact Us</span>
                <span>
                  <Image
                    className="cursor-pointer"
                    src={Close}
                    alt="close"
                    onClick={onClick}
                  ></Image>
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-2 justify-items-center gap-2">
              {[
                {
                  image: PhoneModal,
                  title: "Phone Number",
                  content: "091-234-5678",
                },
                {
                  image: Line,
                  title: "Line",
                  content: "ChopperLine",
                },
                {
                  image: Email,
                  title: "Email",
                  content: "phrompong.kht@gmail.com",
                },
                {
                  image: World,
                  title: "Website",
                  content: "https://phrompong.com",
                },
              ].map((item, index) => {
                const obj = item as any;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center border-2 p-5 rounded-lg gap-3 bg-translated w-[100%]"
                  >
                    <Image
                      className="cursor-pointer"
                      src={obj.image}
                      alt="phone"
                      width={30}
                    ></Image>
                    <div>{obj.title}</div>
                    <div>{obj.content}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
