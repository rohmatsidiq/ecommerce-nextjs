import {
  AdminProduk,
  AdminTambahProduk,
  Formtambahproduk,
  HeadComponent,
} from "@/components";
import React, { useState } from "react";
import {
  FcHome,
  FcShop,
  FcSalesPerformance,
  FcConferenceCall,
  FcMenu,
} from "react-icons/fc";

export default function Admin() {
  const [showNav, setShowNav] = useState(false);
  const [card, setCard] = useState("dashboard");
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <HeadComponent title="Halaman Admin" />
      <div className="flex">
        <div
          className={
            showNav
              ? "bg-white min-h-screen w-60 shadow-xl px-4 sm:static fixed z-50"
              : "bg-white min-h-screen h-full w-60 shadow-xl px-4 sm:block fixed sm:static hidden"
          }
        >
          <h1 className="text-center font-bold text-3xl my-5 text-sky-500">
            Logo
          </h1>
          <button
            onClick={() => {
              setShowNav(false);
              setCard("dashboard");
            }}
            className="hover:translate-x-1 hover:bg-slate-100 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
          >
            <FcHome className="text-2xl" />
            Dashboard
          </button>
          <button
            onClick={() => {
              setShowNav(false);
              setCard("produk");
            }}
            className="hover:translate-x-1 hover:bg-slate-100 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
          >
            <FcShop className="text-2xl" />
            Produk
          </button>
          <button
            onClick={() => {
              setShowNav(false);
              setCard("transaksi");
            }}
            className="hover:translate-x-1 hover:bg-slate-100 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
          >
            <FcSalesPerformance className="text-2xl" />
            Transaksi
          </button>
          <button
            onClick={() => {
              setShowNav(false);
              setCard("pelanggan");
            }}
            className="hover:translate-x-1 hover:bg-slate-100 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
          >
            <FcConferenceCall className="text-2xl" />
            Pelanggan
          </button>
          <button className="bg-red-500 text-white w-full py-2 rounded-full hover:bg-red-600 hover:shadow-lg hover:shadow-red-200 mt-3 hover:scale-105">
            Logout
          </button>
        </div>
        <div className="w-full">
          <div className="bg-gray-200 px-2">
            <button
              onClick={handleShowNav}
              className="text-3xl p-1 rounded-lg sm:hidden"
            >
              <FcMenu />
            </button>
          </div>
          <div className="p-4 overflow-y-scroll">
            {card == "produk" && <AdminProduk setCard={setCard} />}
            {card == "tambahproduk" && <AdminTambahProduk setCard={setCard} />}
            {card == "formtambahproduk" && (
              <Formtambahproduk setCard={setCard} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
