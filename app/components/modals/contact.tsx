"use client";

interface ModalProps {}

const ContactModal: React.FC<ModalProps> = ({}) => {
  return (
    <div className="fixed z-10 pt-24 w-full h-full overflow-auto bg-black bg-opacity-40 text-white">
      <div className="relative top-1/3">
        <div className="flex justify-center">
          <div className="flex flex-col border p-10 rounded-lg bg-modal">
            <span>วิธีใช้งาน</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
