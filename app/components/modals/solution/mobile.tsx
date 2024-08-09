import Box from "../../box";

const SolutionMobile: React.FC<{}> = () => {
  return (
    <div className="flex flex-row border p-10 gap-10 rounded-lg bg-translated">
      <div className="flex flex-col gap-5">
        <span>
          1. คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษา ทั้งภาษาไทย
          หรือภาษาอังกฤษลงในช่อง
        </span>
        <Box
          value="l;ylfuCyo=njvc0J;"
          bgColor="bg-translated"
          readonly={true}
        ></Box>
        <span>2. แจ๋วจะทำการแปลเป็นคำที่ถูกต้องให้ และสามารถนำไปใช้ได้เลย</span>
        <Box
          value="สวัสดีฉันชื่อแจ๋ว"
          bgColor="bg-translated"
          readonly={true}
        ></Box>
      </div>
    </div>
  );
};

export default SolutionMobile;
