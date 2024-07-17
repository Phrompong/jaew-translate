interface BoxProps {
  placeholder: string;
}

const Box: React.FC<BoxProps> = ({ placeholder }) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        className="p-4 p-5 border-2 w-[540px] h-[240px] rounded-lg bg-header focus:outline-none focus:border-borderBox"
      ></textarea>
    </>
  );
};

export default Box;
