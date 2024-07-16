interface History {}

const History: React.FC<History> = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="text-white">ประวัติ</span>
        <div className="flex flex-row gap-5">
          {["xxx=xxx", "yyy=yyy"].map((item, index) => {
            return (
              <span
                key={index}
                className="text-white border-2 rounded-full p-2"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default History;
