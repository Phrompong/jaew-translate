import PhoneModal from "../../../../public/phone-modal.svg";
import Line from "../../../../public/line.svg";
import Email from "../../../../public/email.svg";
import World from "../../../../public/world.svg";
import Link from "next/link";
import Image from "next/image";

const ContactDesktop: React.FC<{}> = () => {
  return (
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
  );
};

export default ContactDesktop;
