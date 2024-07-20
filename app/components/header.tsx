"use client";

import Logo from "../../public/logo.png";
import Phone from "../../public/phone.png";
import Heart from "../../public/heart.png";
import Button from "./button";
import Image from "next/image";

interface ModalProps {
  onClick?: any;
  supportOnClick?: any;
}
const Header: React.FC<ModalProps> = ({ onClick, supportOnClick }) => {
  return (
    <>
      <div className="flex flex-column justify-between self-auto bg-header shadow-xl p-5 w-[100%] gap-2 content-center">
        {/* Logo Image */}
        <Image src={Logo} className="h-10 w-13" alt="Logo" />

        {/* Contact Us / Support Us */}
        <div className="flex flex-column gap-5">
          <Button logo={Phone} text="Contact Us" onClick={onClick}></Button>
          <Button
            logo={Heart}
            text="Support Us"
            onClick={supportOnClick}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default Header;
