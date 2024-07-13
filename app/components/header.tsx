"use client";

import Logo from "../../public/logo.png";
import Phone from "../../public/phone.png";
import Heart from "../../public/heart.png";
import Button from "./button";
import Image from "next/image";

export default function Header() {
  const handleContactClicked = () => {
    alert("Contact Us");
  };

  const handleSupportClicked = () => {
    alert("Support Us");
  };

  return (
    <>
      <div className="flex flex-column flex-wrap justify-around p-5 bg-header">
        {/* Logo Image */}
        <Image src={Logo} alt="Logo" />

        {/* Contact Us / Support Us */}
        <div className="flex flex-column gap-5">
          <Button
            logo={Phone}
            text="Contact Us"
            onClick={handleContactClicked}
          ></Button>
          <Button
            logo={Heart}
            text="Support Us"
            onClick={handleSupportClicked}
          ></Button>
        </div>
      </div>
    </>
  );
}
