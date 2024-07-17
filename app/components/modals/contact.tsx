"use client";

interface ModalProps {}

const ContactModal: React.FC<ModalProps> = ({}) => {
  return (
    <div className="fixed z-10 pt-24 w-full h-full overflow-auto bg-black bg-opacity-40 text-white">
      <div className="relative top-1/3">
        <div className="flex justify-center">
          <div className="flex flex-col border w-2/4 p-10 rounded-lg bg-modal gap-10">
            <span className="flex justify-center">วิธีใช้งาน</span>

            <div className="flex flex-row border p-10 gap-10 rounded-lg bg-translated">
              <div className="flex flex-col">
                <span>
                  1. คัดลอก / พิมพ์ ข้อความหรือตัวอังษรที่ลืมเปลี่ยนภาษา
                  ทั้งภาษาไทย หรือภาษาอังกฤษลงในช่อง
                </span>
              </div>
              <div className="flex flex-col">
                <span>
                  2. แจ๋วจะทำการแปลเป็นคำที่ถูกต้องให้ และสามารถนำไปใช้ได้เลย
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
