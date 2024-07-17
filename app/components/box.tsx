"use client";

interface BoxProps {
  placeholder?: string;
  value?: string;
  readonly?: boolean;
  onChange?: any;
  bgColor?: string;
  width?: string;
  height?: string;
}

const Box: React.FC<BoxProps> = ({
  onChange,
  placeholder,
  value,
  readonly,
  bgColor,
  width,
  height,
}) => {
  // w-[540px]
  // h-[240px]
  return (
    <>
      <textarea
        onKeyUp={onChange}
        value={value}
        placeholder={placeholder}
        className={`p-4 p-5 border-2 w-[${width}] h-[${height}] rounded-lg focus:outline-none focus:border-borderBox ${bgColor}`}
        readOnly={readonly}
      ></textarea>
    </>
  );
};

export default Box;
