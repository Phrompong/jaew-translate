import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ButtonProps {
  logo: StaticImport;
  text: string;
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ logo, text, onClick }) => {
  return (
    <button
      type="button"
      className="flex flex-column text-white border-2 p-3 rounded-full gap-2 text-center items-center"
      onClick={onClick}
    >
      <Image src={logo} alt="Logo" />
      <span className="text-base">{text}</span>
    </button>
  );
};

export default Button;
