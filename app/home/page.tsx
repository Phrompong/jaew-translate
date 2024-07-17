"use client";

import Header from "../components/header";
import Box from "../components/box";
import History from "../components/history";
import Button from "../components/button";
import Book from "../../public/book.png";
import Image from "next/image";
import IconTranslate from "../../public/icon-translate.png";
import { useEffect, useState } from "react";
import ContactModal from "../components/modals/contact";

export default function Home() {
  const [translated, setTranslated] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(true);

  useEffect(() => {
    localStorage.setItem("name", "phrompong khagtes");
  }, []);

  const handleSolutionClicked = () => {
    alert("Contact Us");
  };

  const handleOnValueChanged = (event: any) => {
    const value = event.target.value;
    const words = value.split("");
    console.log("words", words);
    let text = "";
    for (const word of words) {
      text += calTranslated(word);
    }

    setTranslated(text);
  };

  const calTranslated = (value: string): string => {
    const setting: any = {
      "1": "ๅ",
      "!": "+",
      "2": "/",
      "@": "๑",
      "3": "-",
      "#": "๒",
      "4": "ภ",
      $: "๓",
      "5": "ถ",
      "%": "๔",
      "6": "ุ",
      "^": "ู",
      "7": "ึ",
      "&": "฿",
      "8": "ค",
      "*": "๕",
      "9": "ต",
      "(": "๖",
      "0": "จ",
      ")": "๗",
      "-": "ข",
      _: "๘",
      "=": "ช",
      "+": "๙",
      q: "ๆ",
      Q: "๐",
      w: "ไ",
      W: '"',
      e: "ำ",
      E: "ฎ",
      r: "พ",
      R: "ฑ",
      t: "ะ",
      T: "ธ",
      y: "ั",
      Y: "ํ",
      u: "ี",
      U: "๊",
      i: "ร",
      I: "ณ",
      o: "น",
      O: "ฯ",
      p: "ย",
      P: "ญ",
      "[": "บ",
      "{": "ฐ",
      "]": "ล",
      "}": ",",
      a: "ฟ",
      A: "ฤ",
      s: "ห",
      S: "ฆ",
      d: "ก",
      D: "ฏ",
      f: "ด",
      F: "โ",
      g: "เ",
      G: "ฌ",
      h: "้",
      H: "็",
      j: "่",
      J: "๋",
      k: "า",
      K: "ษ",
      l: "ส",
      L: "ศ",
      ";": "ว",
      ":": "ซ",
      "'": "ง",
      '"': ".",
      z: "ผ",
      Z: "(",
      x: "ป",
      X: ")",
      c: "แ",
      C: "ฉ",
      v: "อ",
      V: "ฮ",
      b: "ิ",
      B: "ฺ",
      n: "ื",
      N: "์",
      m: "ท",
      M: "?",
      ",": "ม",
      "<": "ฒ",
      ".": "ใ",
      ">": "ฬ",
      "/": "ฝ",
      "?": "ฦ",
    };

    return setting[value] || value;
  };

  return (
    <div className="flex flex-col justify-between bg-header h-screen">
      <div className="flex flex-col gap-10 ml-10 p-5">
        {/* Header  */}
        <Header></Header>

        {/* Translate and history */}
        <div className="flex flex-col font-bold text-white gap-10">
          <span className="flex justify-center">
            แก้ไขภาษาอังกฤษเป็นไทย หรือ จากไทยเป็นอังกฤษ เวลาลืมเปลี่ยนภาษา
          </span>
          <div className="flex flex-wrap justify-center">
            <Box
              onChange={handleOnValueChanged}
              placeholder="คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษาลงในนี้"
              bgColor="bg-header"
            ></Box>
            <div className="flex flex-col justify-center">
              <Image
                src={IconTranslate}
                alt="arrow"
                className="flex flex-col justify-center w-20 h-20"
              ></Image>
            </div>
            <Box
              placeholder="คำแปล"
              value={translated}
              readonly={true}
              bgColor="bg-translated"
            ></Box>
          </div>

          <div className="flex flex-wrap justify-center">
            <span className="w-[540px]">{/* <History></History> */}</span>
            <div className="flex flex-col justify-center w-20"></div>
            <span className="w-[540px]"></span>
          </div>
        </div>
      </div>

      {/* Solution */}
      <div className="flex flex-row justify-center p-10">
        <Button
          logo={Book}
          text="วิธีใช้งาน"
          onClick={handleSolutionClicked}
        ></Button>
      </div>

      <ContactModal></ContactModal>
    </div>
  );
}
