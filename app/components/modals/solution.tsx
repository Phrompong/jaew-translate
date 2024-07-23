"use client";

import Box from "../box";
import Image from "next/image";
import IconTranslate from "../../../public/icon-translate.png";
import Close from "../../../public/close.png";
import IconTranslateTablet from "../../../public/icon-translate-tablet.png";

interface ModalProps {
  onClick?: any;
}

const SolutionModal: React.FC<ModalProps> = ({ onClick }) => {
  return (
    <>
      {/* Desktop Tablet */}
      <div className="fixed z-10 pt-24 w-full h-full overflow-auto bg-black bg-opacity-40 text-white desktop:flex tablet:hidden mobile:hidden">
        <div className="relative top-[10%]">
          <div className="flex justify-center">
            <div className="flex flex-col border lg:w-[60%] md:w-[90%] p-10 rounded-lg bg-modal gap-10 md:hidden lg:flex">
              <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-end">
                  <Image
                    className="cursor-pointer w-4 h-4"
                    src={Close}
                    alt="close"
                    onClick={onClick}
                  ></Image>
                </div>
                <span className="text-lg text-center">วิธีใช้งาน</span>
              </div>

              <div className="flex flex-row border p-10 gap-10 rounded-lg bg-translated">
                <div className="grid grid-cols-[1fr,7%,1fr] gap-2">
                  <span className="text-sm">
                    1. คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษา
                    ทั้งภาษาไทย หรือภาษาอังกฤษลงในช่อง
                  </span>
                  <span></span>
                  <span className="text-sm">
                    2. แจ๋วจะทำการแปลเป็นคำที่ถูกต้องให้ และสามารถนำไปใช้ได้เลย
                  </span>
                  <Box
                    value="l;ylfuCyo=njvc0J;"
                    bgColor="bg-translated"
                    readonly={true}
                  ></Box>

                  <div className="flex flex-col justify-center">
                    <Image
                      src={IconTranslate}
                      alt="arrow"
                      className="flex flex-col justify-center w-15 h-10"
                    ></Image>
                  </div>
                  <Box
                    value="สวัสดีฉันชื่อแจ๋ว"
                    bgColor="bg-translated"
                    readonly={true}
                    height="150px"
                  ></Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="fixed z-10 pt-24 w-[full] h-full overflow-auto bg-black bg-opacity-40 text-white md:flex lg:hidden">
        <div className="relative top-[10%]">
          <div className="flex justify-center">
            <div className="flex flex-col border w-[100%] p-5 rounded-lg bg-modal gap-10 m-1">
              <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-end">
                  <Image
                    className="cursor-pointer w-4 h-4"
                    src={Close}
                    alt="close"
                    onClick={onClick}
                  ></Image>
                </div>
                <span className="text-lg text-center">วิธีใช้งาน</span>{" "}
              </div>

              <div className="grid grid-cols-2 gap-1 bg-translated p-3 rounded-lg">
                <span className="h-[150px]">
                  1. คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษา
                  ทั้งภาษาไทย หรือภาษาอังกฤษลงในช่อง
                </span>
                <Box
                  value="l;ylfuCyo=njvc0J;"
                  bgColor="bg-translated"
                  readonly={true}
                  border="2"
                ></Box>

                <span className=""></span>
                <span className="flex justify-center">
                  <Image
                    src={IconTranslateTablet}
                    alt="arrow"
                    className="flex flex-col justify-center w-10 h-10"
                  ></Image>
                </span>

                <span className="h-[150px]">
                  2. แจ๋วจะทำการแปลเป็นคำที่ถูกต้องให้ และสามารถนำไปใช้ได้เลย
                </span>
                <Box
                  value="l;ylfuCyo=njvc0J;"
                  bgColor="bg-translated"
                  readonly={true}
                ></Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionModal;
