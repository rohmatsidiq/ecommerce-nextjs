import {
  AdminDashboard,
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
              ? "bg-slate-800 text-sm text-white min-h-screen w-60 shadow-xl px-4 sm:static fixed z-50"
              : "bg-slate-800 text-sm text-white min-h-screen h-full w-60 shadow-xl px-4 sm:block fixed sm:static hidden"
          }
        >
          <img src="./logo.png" alt="logo" className="p-3 my-3" />
          <button
            onClick={() => {
              setShowNav(false);
              setCard("dashboard");
            }}
            className={
              card === "dashboard"
                ? "hover:translate-x-2 bg-slate-700 hover:bg-slate-700 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
                : "hover:translate-x-2 hover:bg-slate-700 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
            }
          >
            <FcHome className="text-2xl" />
            Dashboard
          </button>
          <button
            onClick={() => {
              setShowNav(false);
              setCard("produk");
            }}
            className={
              card === "produk"
                ? "hover:translate-x-2 bg-slate-700 hover:bg-slate-700 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
                : "hover:translate-x-2 hover:bg-slate-700 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
            }
          >
            <FcShop className="text-2xl" />
            Produk
          </button>
          <button
            onClick={() => {
              setShowNav(false);
              setCard("penjualan");
            }}
            className={
              card === "penjualan"
                ? "hover:translate-x-2 bg-slate-700 hover:bg-slate-700 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
                : "hover:translate-x-2 hover:bg-slate-700 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
            }
          >
            <FcSalesPerformance className="text-2xl" />
            Penjualan
          </button>
          <button
            onClick={() => {
              setShowNav(false);
              setCard("pelanggan");
            }}
            className={
              card === "pelanggan"
                ? "hover:translate-x-2 bg-slate-700 hover:bg-slate-700 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
                : "hover:translate-x-2 hover:bg-slate-700 rounded-xl py-2 px-3 duration-150 flex gap-1 items-center w-full"
            }
          >
            <FcConferenceCall className="text-2xl" />
            Pelanggan
          </button>
          <button className="bg-red-600 text-white w-full py-2 rounded-full hover:bg-red-600 hover:shadow-lg hover:shadow-red-800 mt-3 hover:scale-105">
            Logout
          </button>
        </div>
        <div className="w-full fixed sm:static top-0">
          <div className="bg-gray-100 px-2">
            <button
              onClick={handleShowNav}
              className="text-3xl p-1 rounded-lg sm:hidden"
            >
              <FcMenu />
            </button>
          </div>
          <div className="p-4 max-h-screen overflow-y-scroll text-sm h-screen">
            {card === "dashboard" && <AdminDashboard />}
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
