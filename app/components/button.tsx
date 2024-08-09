import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { EnumStyle } from "./util/constant";

interface ButtonProps {
  logo: StaticImport;
  text: string;
  onClick: any;
  imageHeight?: number;
  imageWidth?: number;
}

const Button: React.FC<ButtonProps> = ({ logo, text, onClick }) => {
  return (
    <>
      {/* Desktop */}
      <button
        type="button"
        className={`flex flex-column text-white border-2 p-3 rounded-full gap-2 text-center items-center ${EnumStyle.Desktop}`}
        onClick={onClick}
      >
        <Image src={logo} alt="Logo" />
        <span className="text-base">{text}</span>
      </button>

      {/* Tablet */}
      <button
        type="button"
        className={`flex flex-column text-white border-2 p-3 rounded-full gap-2 text-center items-center ${EnumStyle.Tablet}`}
        onClick={onClick}
      >
        <Image src={logo} alt="Logo" />
        <span className="text-base">{text}</span>
      </button>

      {text === "วิธีใช้งาน" ? (
        <button
          type="button"
          className={`flex flex-column text-white border-2 p-3 rounded-full gap-2 text-center items-center ${EnumStyle.Mobile}`}
          onClick={onClick}
        >
          <Image src={logo} alt="Logo" />
          <span className="text-base">{text}</span>
        </button>
      ) : (
        <button
          type="button"
          className={`flex flex-col text-white border-2 p-1 rounded-lg gap-3 text-center items-center ${EnumStyle.Hidden}`}
          onClick={onClick}
        >
          <div className="h-5 p-1 mt-1">
            <Image
              src={logo}
              alt="Logo"
              height={text === "Contact Us" ? 19 : 16}
            />
          </div>

          <span className="text-xs flex mb-1">{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
