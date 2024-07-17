"use client";

import Logo from "../../public/logo.png";
import Phone from "../../public/phone.png";
import Heart from "../../public/heart.png";
import Button from "./button";
import Image from "next/image";

interface ModalProps {
  onClick?: any;
}
const Header: React.FC<ModalProps> = ({ onClick }) => {
  const handleSupportClicked = () => {
    alert("Support Us");
  };

  return (
    <>
      <div className="flex flex-column flex-wrap justify-between">
        {/* Logo Image */}
        <Image src={Logo} className="h-10" alt="Logo" />

        {/* Contact Us / Support Us */}
        <div className="flex flex-column gap-5">
          <Button logo={Phone} text="Contact Us" onClick={onClick}></Button>
          <Button
            logo={Heart}
            text="Support Us"
            onClick={handleSupportClicked}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default Header;
