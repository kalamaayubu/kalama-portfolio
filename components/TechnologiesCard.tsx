import React, { ReactNode } from "react";
type TechnologiesProps = {
  icon: ReactNode;
  items: string[];
  name: string;
  description: string;
};
const TechnologiesCard = ({
  icon,
  items,
  name,
  description,
}: TechnologiesProps) => {
  return (
    <div className="rounded-lg">
      <div className="relative m-px rounded-lg p-6 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-lg flex flex-col">
        <div className="bg-white/5 rounded-lg w-fit p-3">{icon}</div>
        <h3 className="text-3xl text-white font-semibold mt-3 mb-1">{name}</h3>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-3 mt-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-full text-sm border border-white/15 px-2.5 text-gray-400 py-0.5"
            >
              {item}
            </div>
          ))}
        </div>
        <span className="w-full absolute h-0.5 " />
      </div>
    </div>
  );
};

export default TechnologiesCard;
