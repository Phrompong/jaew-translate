"use client";

interface BoxProps {
  placeholder?: string;
  value?: string;
  readonly?: boolean;
  onChange?: any;
  bgColor?: string;
  width?: string;
  height?: string;
  border?: string;
}

const Box: React.FC<BoxProps> = ({
  onChange,
  placeholder,
  value,
  readonly,
  bgColor,
  width,
  height,
  border,
}) => {
  // w-[540px]
  // h-[240px]
  border = border || "2";
  return (
    <>
      <textarea
        onKeyUp={onChange}
        value={value}
        placeholder={placeholder}
        className={`p-4 p-5 border w-[${width}] h-[${height}] rounded-lg focus:outline-none ${bgColor}`}
        readOnly={readonly}
      ></textarea>
    </>
  );
};

export default Box;
