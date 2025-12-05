import React from "react";

type HeadingProps = {
  title: string;
  className?: string; // <-- FIXED
};

const Heading = ({ title, className = "" }: HeadingProps) => {
  return (
    <div
      className={`
          border border-white/20
          bg-[#0c0c11]
            px-4 py-1 rounded-full font-medium
            text-white relative w-fit mx-auto
            ${className}
        `}
    >
      <span>{title}</span>
      <span
        className="
            absolute inset-x-0 w-1/2 mx-auto -bottom-px 
            h-px
          "
        style={{
          background:
            "linear-gradient(to right, transparent, #3b82f6, #8b5cf6, transparent)",
        }}
      />
    </div>
  );
};

export default Heading;
