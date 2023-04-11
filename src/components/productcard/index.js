import React from "react";
import Link from "next/link";

function Productcard({namaProduk, hargaProduk, stockProduk, gambar}) {
  return (
    <Link href="/">
      <div className="w-full bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 duration-200 hover:shadow-sky-200">
        <div className="w-full h-full object-cover">
          <img
            src={gambar}
            alt="product"
          />
        </div>
        <div className="p-4">
          <h1 className="text-lg">{namaProduk}</h1>
          <p>{hargaProduk}</p>
          <small className="text-sky-500">{stockProduk}</small>
        </div>
      </div>
    </Link>
  );
}

export default Productcard;
