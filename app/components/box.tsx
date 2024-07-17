"use client";

interface BoxProps {
  placeholder: string;
  value?: string;
  readonly?: boolean;
  onChange?: any;
  bgColor?: string;
}

const Box: React.FC<BoxProps> = ({
  onChange,
  placeholder,
  value,
  readonly,
  bgColor,
}) => {
  return (
    <>
      <textarea
        onKeyUp={onChange}
        value={value}
        placeholder={placeholder}
        className={`p-4 p-5 border-2 w-[540px] h-[240px] rounded-lg focus:outline-none focus:border-borderBox ${bgColor}`}
        readOnly={readonly}
      ></textarea>
    </>
  );
};

export default Box;
