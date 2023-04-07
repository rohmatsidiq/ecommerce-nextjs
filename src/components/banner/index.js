import { React, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function Banner() {
  const words = ["satu", "dua", "tiga", "empat", "lima"];
  const [count, setCount] = useState(1);

  const handleNext = () => {
    if (count < words.length) {
      setCount(count + 1);
    } else if (count == words.length) {
      setCount(1);
    }
  };

  const handlePrevious = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count == 1) {
      setCount(words.length);
    }
  };

  const handleSlector = (index) => {
    setCount(index + 1);
  };

  return (
    <div className="max-w-[1200px] w-full mx-auto p-4 mt-3">
      <div className="bg-gray-300 w-full h-64 rounded-3xl flex justify-center items-center text-3xl font-bold relative">
        <p>{count}</p>
        <button
          className="bg-white opacity-80 text-4xl rounded-full absolute left-[10px]"
          onClick={handlePrevious}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          className="bg-white opacity-80 text-4xl rounded-full absolute right-[10px]"
          onClick={handleNext}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
      <div className="flex gap-2 justify-center mt-5 ">
        {words.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => {
                handleSlector(index);
              }}
              className="bg-gray-500 w-6 h-1 rounded-full"
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
