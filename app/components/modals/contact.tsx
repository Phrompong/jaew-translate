"use client";

import Image from "next/image";
import Close from "../../../public/close.svg";
import PhoneModal from "../../../public/phone-modal.svg";
import Line from "../../../public/line.svg";
import Email from "../../../public/email.svg";
import World from "../../../public/world.svg";
import Link from "next/link";

interface ModalProps {
  onClick?: any;
}

const ContactModal: React.FC<ModalProps> = ({ onClick }) => {
  return (
    <div className="fixed z-10 pt-24 w-full h-full overflow-auto bg-black bg-opacity-40 text-white">
      <div className="flex flex-col justify-center">
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
              <span className="text-lg text-center">Contact Us</span>{" "}
            </div>
            {/* Content */}
            <div className="grid grid-cols-2 justify-items-center gap-2 text-wrap w-[100%]">
              {[
                {
                  image: PhoneModal,
                  title: "Phone Number",
                  content: "091-234-5678",
                  href: "tel:0952535792",
                },
                {
                  image: Line,
                  title: "Line",
                  content: "ChopperLine",
                  href: "https://line.me/ti/p/R12teBUknT",
                },
                {
                  image: Email,
                  title: "Email",
                  content: "phrompong.kht@gmail.com",
                  href: "mailto:phrompong.kht@gmail.com",
                },
                {
                  image: World,
                  title: "Website",
                  content: "https://phrompong.com",
                  href: "https://phrompong.com",
                },
              ].map((item, index) => {
                const obj = item as any;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex flex-col items-center border-2 p-5 rounded-lg gap-3 bg-translated w-[100%] hover:bg-gray-500"
                  >
                    <Image
                      className="cursor-pointer w-8 h-8"
                      src={obj.image}
                      alt="phone"
                    ></Image>
                    <span className="mobile:text-xs tablet:text-sm font-normal text-wrap text-base text-center">
                      {obj.title}
                    </span>
                    <span className="mobile:text-xs text-sm text-wrap break-all">
                      {obj.content}
                    </span>
                  </Link>
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
