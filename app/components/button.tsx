import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ButtonProps {
  logo: StaticImport;
  text: string;
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ logo, text, onClick }) => {
  return (
    <>
      <button
        type="button"
        className="flex flex-column text-white border-2 p-3 rounded-full gap-2 text-center items-center desktop:flex tablet:hidden mobile:hidden"
        onClick={onClick}
      >
        <Image src={logo} alt="Logo" />
        <span className="text-base">{text}</span>
      </button>

      <button
        type="button"
        className="flex flex-column text-white border-2 p-3 rounded-full gap-2 text-center items-center desktop:hidden tablet:flex mobile:hidden"
        onClick={onClick}
      >
        <Image src={logo} alt="Logo" />
        <span className="text-base">{text}</span>
      </button>

      {text === "วิธีใช้งาน" ? (
        <button
          type="button"
          className="flex flex-column text-white border-2 p-3 rounded-full gap-2 text-center items-center desktop:hidden tablet:hidden mobile:flex"
          onClick={onClick}
        >
          <Image src={logo} alt="Logo" />
          <span className="text-base">{text}</span>
        </button>
      ) : (
        <button
          type="button"
          className="flex flex-col text-white border-2 p-1 rounded-lg gap-2 text-center items-center desktop:hidden tablet:hidden mobile:flex"
          onClick={onClick}
        >
          <Image src={logo} alt="Logo" className="w-[20] h-[20]" />
          <span className="text-xs">{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
