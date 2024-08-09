import Image from "next/image";
import Close from "../../../public/close.svg";

const Modal: React.FC<{
  renderDesktop: any;
  renderMobile: any;
  title: string;
  onClick: any;
}> = ({ renderDesktop, renderMobile, title, onClick }) => {
  return (
    <>
      <div className="fixed z-10 pt-24 w-full h-full overflow-auto bg-black bg-opacity-40 text-white desktop:flex tablet:hidden mobile:hidden">
        <div className="flex flex-col justify-center w-full h-full">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center border desktop:w-[40%] md:w-[90%] p-10 rounded-lg bg-modal mx-[20]">
              <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-row justify-end">
                  <Image
                    className="cursor-pointer w-4 h-4"
                    src={Close}
                    alt="close"
                    onClick={onClick}
                  ></Image>
                </div>
                <span className="text-lg text-center">{title}</span>
                {renderDesktop && renderDesktop()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed z-10 pt-24 w-full h-full overflow-auto bg-black bg-opacity-40 text-white desktop:hidden  tablet:hidden mobile:flex">
        <div className="flex flex-col justify-center w-full h-full">
          <div className="flex justify-center">
            <div className="flex flex-col border lg:w-[full] md:w-[90%] p-10 rounded-lg bg-modal gap-10 mx-[10]">
              <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-row justify-end">
                  <Image
                    className="cursor-pointer w-4 h-4"
                    src={Close}
                    alt="close"
                    onClick={onClick}
                  ></Image>
                </div>
                <span className="text-lg text-center">{title}</span>
                {renderMobile && renderMobile()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
