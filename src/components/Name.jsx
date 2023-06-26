import { decode } from "@/util/enc";
import React from "react";

const Name = ({ slug }) => {
  return (
    <div className="flex justify-center h-full items-center flex-col gap-3">
      {slug.map((x, i) => (
        <div
          className={`${i % 2 ? "text-xl" : "text-base"} animate-night-light`}
          key={x}
        >
          {decode(x)}
        </div>
      ))}
    </div>
  );
};

export default Name;
