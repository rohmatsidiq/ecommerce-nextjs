import { React, useState } from "react";

function Banner() {
  const words = ["satu", "dua", "tiga", "empat", "lima"];
  const [count, setCount] = useState(1);

  return (
    <div className="max-w-[1200px] w-full mx-auto p-4 mt-3">
      <div className="bg-gray-300 w-full h-64 rounded-3xl flex justify-center items-center text-3xl font-bold">
        <p>{words[count - 1]}</p>
      </div>
      <div className="flex gap-2 justify-center mt-5">
        {words.map((item, index) => (
          <div key={index}>
            <div className="bg-gray-500 w-6 h-1 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
