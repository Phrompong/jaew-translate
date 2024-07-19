"use client";

import Box from "../box";
import Image from "next/image";
import IconTranslate from "../../../public/icon-translate.png";
import Close from "../../../public/close.png";

interface ModalProps {
  onClick?: any;
}

const SolutionModal: React.FC<ModalProps> = ({ onClick }) => {
  return (
    <div className="fixed z-10 pt-24 w-full h-full overflow-auto bg-black bg-opacity-40 text-white">
      <div className="relative top-[20%]">
        <div className="flex justify-center">
          <div className="flex flex-col border w-[60%] p-10 rounded-lg bg-modal gap-10">
            <div className="ml-[45%]">
              <div className="flex flex-row justify-between">
                <span className="text-lg">วิธีใช้งาน</span>
                <span>
                  <Image
                    className="cursor-pointer"
                    src={Close}
                    alt="close"
                    onClick={onClick}
                  ></Image>
                </span>
              </div>
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
                ></Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionModal;
