"use client";
import { encode } from "@/util/enc";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const HomeComponent = () => {
  const [inputs, setInputs] = useState(["input-0"]);
  const ref = useRef();
  const router = useRouter();

  const addinput = () => {
    setInputs((p) => [...p, `input-${inputs.length}`]);
  };

  const submit = (e) => {
    e.preventDefault();
    // const { value } = ref.current;
    const emoji = encode(e.target?.emoji?.value || "❤");
    const path = inputs.map((x) => encode(e.target?.[x].value)).join("/");
    router.push(`/${emoji}/${path}`);
  };

  return (
    <form className="max-w-3xl w-full" ref={ref} onSubmit={submit}>
      {inputs.map((x) => (
        <input
          key={x}
          autoFocus
          type="text"
          name={x}
          placeholder={x}
          className="px-3 py-3 my-2 placeholder-grey-700 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full bg-[#ffffff3b]"
        />
      ))}
      <input
        type="text"
        name={"emoji"}
        placeholder={"Emoji"}
        className="px-3 py-3 my-2 placeholder-grey-700  relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full bg-[#ffffff3b]"
      />
      <div className="flex gap-2">
        <button
          type="button"
          className="bg-purple-800 px-2 py-1 mt-5 rounded "
          onClick={addinput}
        >
          Add
        </button>
        <button
          type="submit"
          className="bg-purple-800 px-2 py-1 mt-5 rounded flex-1"
        >
          Open
        </button>
      </div>
    </form>
  );
};

export default HomeComponent;
