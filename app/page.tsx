"use client";
import Header from "./components/header";
import Box from "./components/box";
import Button from "./components/button";
import Book from "../public/book.png";
import Image from "next/image";
import IconTranslate from "../public/icon-translate.svg";
import IconTranslateTablet from "../public/icon-translate-tablet.svg";
import { useEffect, useState } from "react";
// import History from "../components/history";
import axios from "axios";
import Modal from "./components/modals/modal";
import SolutionMobile from "./components/modals/solution/mobile";
import SolutionDesktop from "./components/modals/solution/desktop";
import ContactDesktop from "./components/modals/contact/desktop";
import SupportDesktop from "./components/modals/support/desktop";
import { EnumStyle } from "./components/util/constant";

export default function Home() {
  const [translated, setTranslated] = useState("");
  const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  useEffect(() => {
    addView();
  }, []);

  const addView = async () => {
    await axios.patch("https://jawvis.org/views/jaew-translate");
  };

  const handleOnValueChanged = (event: any) => {
    const value = event.target.value;
    const words = value.split("");
    let text = "";
    for (const word of words) {
      text += calTranslated(word);
    }

    setTranslated(text);
  };

  const calTranslated = (value: string): string => {
    const setting: { [key: string]: string } = {
      // #region Eng to thai
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
      // #endregion

      // #region Thai to eng
      ๅ: "1",
      "'+'": "!",
      "'/'": "2",
      "๑": "@",
      "'-'": "3",
      "๒": "#",
      ภ: "4",
      "๓": "$",
      ถ: "5",
      "๔": "%",
      "ุ": "6",
      "ู": "^",
      "ึ": "7",
      "฿": "&",
      ค: "8",
      "๕": "*",
      ต: "9",
      "๖": "(",
      จ: "0",
      "๗": ")",
      ข: "-",
      "๘": "_",
      ช: "=",
      "๙": "+",
      ๆ: "q",
      "๐": "Q",
      ไ: "w",
      "'๑'": "W",
      ำ: "e",
      ฎ: "E",
      พ: "r",
      ฑ: "R",
      ะ: "t",
      ธ: "T",
      "ั": "y",
      "ํ": "Y",
      "ี": "u",
      "๊": "U",
      ร: "i",
      ณ: "I",
      น: "o",
      ฯ: "O",
      ย: "p",
      ญ: "P",
      บ: "[",
      ฐ: "{",
      ล: "]",
      "','": "}",
      ฟ: "a",
      ฤ: "A",
      ห: "s",
      ฆ: "S",
      ก: "d",
      ฏ: "D",
      ด: "f",
      โ: "F",
      เ: "g",
      ฌ: "G",
      "้": "h",
      "็": "H",
      "่": "j",
      "๋": "J",
      า: "k",
      ษ: "K",
      ส: "l",
      ศ: "L",
      ว: ";",
      ซ: ":",
      ง: "'",
      "'.'": '"',
      ผ: "z",
      "'('": "Z",
      ป: "x",
      "')'": "X",
      แ: "c",
      ฉ: "C",
      อ: "v",
      ฮ: "V",
      "ิ": "b",
      "ฺ": "B",
      "ื": "n",
      "์": "N",
      ท: "m",
      "'?'": "M",
      ม: ",",
      ฒ: "<",
      ใ: ".",
      ฬ: ">",
      ฝ: "/",
      ฦ: "?",

      // #endregion
    };

    return setting[value] || value;
  };

  const handleSolutionClicked = () => {
    setIsSolutionModalOpen(true);
  };

  const handleClickedCloseSolutionModal = () => {
    setIsSolutionModalOpen(false);
  };

  const handleContactClicked = () => {
    setIsContactModalOpen(true);
  };

  const handleClickedCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleSupportClicked = () => {
    setIsSupportModalOpen(true);
  };

  const handleClickedCloseSupportModal = () => {
    setIsSupportModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-between desktop:h-screen tablet:w-[100%]">
      <div className="flex flex-col gap-10">
        {/* Header  */}
        <Header
          onClick={handleContactClicked}
          supportOnClick={handleSupportClicked}
        ></Header>

        {/* Translate and history desktop */}
        <div
          className={`flex flex-col font-bold text-white gap-10 ${EnumStyle.Desktop}`}
        >
          <span className="flex justify-center text-xl">
            แก้ไขภาษาอังกฤษเป็นไทย หรือ จากไทยเป็นอังกฤษ เวลาลืมเปลี่ยนภาษา
          </span>
          <div className="flex flex-wrap justify-center">
            <Box
              onChange={handleOnValueChanged}
              placeholder="คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษาลงในนี้"
              bgColor="bg-header"
              width="540px"
              height="240px"
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
              width="540px"
              height="240px"
            ></Box>
          </div>

          <div className="flex flex-wrap justify-center">
            <span className="w-[540px]">{/* <History></History> */}</span>
            <div className="flex flex-col justify-center w-20"></div>
            <span className="w-[540px]"></span>
          </div>
        </div>

        {/* Translate and history tablet */}
        <div
          className={`flex flex-col font-bold text-white gap-10 ${EnumStyle.Tablet}`}
        >
          <span className="flex justify-center text-xl">
            แก้ไขภาษาอังกฤษเป็นไทย หรือ จากไทยเป็นอังกฤษ เวลาลืมเปลี่ยนภาษา
          </span>
          <div className="flex flex-col flex-wrap content-center">
            <Box
              onChange={handleOnValueChanged}
              placeholder="คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษาลงในนี้"
              bgColor="bg-header"
              width="540px"
              height="240px"
            ></Box>
            <div className="flex flex-row justify-center">
              <Image
                src={IconTranslateTablet}
                alt="arrow"
                className="flex flex-col justify-center w-20 h-20"
              ></Image>
            </div>
            <Box
              placeholder="คำแปล"
              value={translated}
              readonly={true}
              bgColor="bg-translated"
              width="540px"
              height="240px"
            ></Box>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span className="w-[540px]">{/* <History></History> */}</span>
            <div className="flex flex-col justify-center w-20"></div>
            <span className="w-[540px]"></span>
          </div>
        </div>

        {/* Translate and history mobile */}
        <div
          className={`flex flex-col font-bold text-white gap-10 ${EnumStyle.Mobile}`}
        >
          <span className="flex justify-center text-md text-center">
            แก้ไขภาษาอังกฤษเป็นไทย หรือ <br />
            จากไทยเป็นอังกฤษ เวลาลืมเปลี่ยนภาษา
          </span>
          <div className="flex flex-col flex-wrap ml-5 mr-5">
            <Box
              onChange={handleOnValueChanged}
              placeholder="คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษาลงในนี้"
              bgColor="bg-header"
              height="240px"
            ></Box>

            <div className="flex flex-row justify-center">
              <Image
                src={IconTranslateTablet}
                alt="arrow"
                className="flex flex-col justify-center w-20 h-20"
              ></Image>
            </div>
            <Box
              placeholder="คำแปล"
              value={translated}
              readonly={true}
              bgColor="bg-translated"
              height="240px"
            ></Box>
          </div>
          <div className="flex flex-wrap justify-center">
            <span className="w-[320px]">{/* <History></History> */}</span>
            <div className="flex flex-col justify-center w-20"></div>
            <span className="w-[320px]"></span>
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

      {isSolutionModalOpen && (
        <Modal
          title="วิธีใช้งาน"
          renderDesktop={SolutionDesktop}
          renderTablet={SolutionDesktop}
          renderMobile={SolutionMobile}
          onClick={handleClickedCloseSolutionModal}
        ></Modal>
      )}

      {isContactModalOpen && (
        <Modal
          title="วิธีใช้งาน"
          renderDesktop={ContactDesktop}
          renderTablet={ContactDesktop}
          renderMobile={ContactDesktop}
          onClick={handleClickedCloseContactModal}
        ></Modal>
      )}

      {isSupportModalOpen && (
        <Modal
          title="Donate"
          renderDesktop={SupportDesktop}
          renderTablet={SupportDesktop}
          renderMobile={SupportDesktop}
          onClick={handleClickedCloseSupportModal}
        ></Modal>
      )}
    </div>
  );
}
