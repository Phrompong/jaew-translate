import Header from "../components/header";
import Box from "../components/box";
import iconTranslate from "../../public/icon-translate.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-header">
      <Header></Header>
      <div className="flex flex-col text-center mt-20 font-bold text-white">
        <span className="">
          แก้ไขภาษาอังกฤษเป็นไทย หรือ จากไทยเป็นอังกฤษ เวลาลืมเปลี่ยนภาษา
        </span>
        <div className="flex flex-wrap justify-center mt-10 ml-10 mr-10 gap-10 p-1">
          <Box placeholder="คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษาลงในนี้"></Box>
          <Box placeholder="คำแปล"></Box>
        </div>
      </div>
    </div>
  );
}
