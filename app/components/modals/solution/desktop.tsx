"use client";

import Box from "../../box";
import Image from "next/image";
import IconTranslate from "../../../../public/icon-translate.svg";

const SolutionDesktop: React.FC<{}> = () => {
  return (
    <div className="flex flex-row border p-10 gap-10 rounded-lg bg-translated">
      <div className="grid grid-cols-[1fr,7%,1fr] gap-2">
        <span className="text-sm">
          1. คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษา ทั้งภาษาไทย
          หรือภาษาอังกฤษลงในช่อง
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
  );
};

export default SolutionDesktop;
