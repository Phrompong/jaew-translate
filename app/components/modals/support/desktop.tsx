import Image from "next/image";
import Payment from "../../../../public/payment.jpg";

const SupportDesktop: React.FC<{}> = () => {
  return (
    <div className="flex justify-center">
      <Image width={300} src={Payment} alt="payment"></Image>
    </div>
  );
};

export default SupportDesktop;
