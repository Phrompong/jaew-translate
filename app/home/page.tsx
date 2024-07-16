import Header from "../components/header";
import Box from "../components/box";
import History from "../components/history";

export default function Home() {
  return (
    <div className="bg-header h-screen">
      <div className="flex flex-col gap-10 ml-10 p-5">
        <Header></Header>
        <div className="flex flex-col text-center font-bold text-white gap-10">
          <span className="">
            แก้ไขภาษาอังกฤษเป็นไทย หรือ จากไทยเป็นอังกฤษ เวลาลืมเปลี่ยนภาษา
          </span>
          <div className="flex flex-wrap justify-between">
            <Box placeholder="คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษาลงในนี้"></Box>
            <Box placeholder="คำแปล"></Box>
          </div>
        </div>
        <History></History>
        <div className="flex mb-1">xxx</div>
      </div>
    </div>
  );
}
