import React from "react";

const Services = () => {
  return (
    <section className="mt-36">
      <div
        className="
            border border-white/20
            px-4 py-1 rounded-full font-medium
            text-white relative w-fit mb-10 mx-auto lg:mx-0
          "
      >
        <span>Services</span>
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
    </section>
  );
};

export default Services;
