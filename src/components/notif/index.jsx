import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

export default function Notif({ content }) {
  return (
    <div className="fixed w-screen h-screen bg-black top-0 left-0 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-3xl flex flex-col gap-3 justify-center text-center">
        <BsCheck2Circle className="text-5xl w-full" />
        <h1 className="text-xl">{content}</h1>
      </div>
    </div>
  );
}
