"use client";

import Header from "../components/header";
import Box from "../components/box";
import History from "../components/history";
import Button from "../components/button";
import Book from "../../public/book.png";
import Image from "next/image";
import IconTranslate from "../../public/icon-translate.png";

export default function Home() {
  const handleSolutionClicked = () => {
    alert("Contact Us");
  };

  return (
    <div className="flex flex-col justify-between bg-header h-screen">
      <div className="flex flex-col gap-10 ml-10 p-5">
        <Header></Header>
        <div className="flex flex-col text-center font-bold text-white gap-10">
          <span className="">
            แก้ไขภาษาอังกฤษเป็นไทย หรือ จากไทยเป็นอังกฤษ เวลาลืมเปลี่ยนภาษา
          </span>
          <div className="flex flex-wrap justify-center">
            <Box placeholder="คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษาลงในนี้"></Box>
            <div className="flex flex-col justify-center">
              <Image
                src={IconTranslate}
                alt="arrow"
                className="flex flex-col justify-center w-20 h-20"
              ></Image>
            </div>
            <Box placeholder="คำแปล"></Box>
          </div>
        </div>
        <History></History>
      </div>
      <div className="flex flex-row justify-center p-10">
        <Button
          logo={Book}
          text="วิธีใช้งาน"
          onClick={handleSolutionClicked}
        ></Button>
      </div>
    </div>
  );
}
