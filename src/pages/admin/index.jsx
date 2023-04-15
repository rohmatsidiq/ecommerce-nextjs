import { HeadComponent } from "@/components";
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
    <div>
      <HeadComponent title="Halaman Admin" />
      <div className="flex">
        <div
          className={
            showNav
              ? "bg-white min-h-screen w-60 shadow-xl px-4 sm:static absolute"
              : "bg-white min-h-screen w-60 shadow-xl px-4 sm:inline-block static  hidden"
          }
        >
          <h1 className="text-center font-bold text-3xl my-5 text-sky-500">
            Logo
          </h1>
          <button
            onClick={() => {
              setShowNav(false);
              setCard('dashboard')
            }}
            className="hover:translate-x-1 duration-150 flex gap-1 items-center mb-3 w-full"
          >
            <FcHome />
            Dashboard
          </button>
          <button
            onClick={() => {
              setShowNav(false);
              setCard("produk");
            }}
            className="hover:translate-x-1 duration-150 flex gap-1 items-center mb-3 w-full"
          >
            <FcShop />
            Produk
          </button>
          <button
            onClick={() => {
              setShowNav(false);
              setCard("transaksi");
            }}
            className="hover:translate-x-1 duration-150 flex gap-1 items-center mb-3 w-full"
          >
            <FcSalesPerformance />
            Transaksi
          </button>
          <button
            onClick={() => {
              setShowNav(false);
              setCard("pelanggan");
            }}
            className="hover:translate-x-1 duration-150 flex gap-1 items-center mb-3 w-full"
          >
            <FcConferenceCall />
            Pelanggan
          </button>
          <button className="bg-red-500 text-white w-full py-2 rounded-full hover:bg-red-600 hover:shadow-lg hover:shadow-red-200 mt-3 hover:scale-105">
            Logout
          </button>
        </div>
        <div className="p-4 w-full">
          <button
            onClick={handleShowNav}
            className={
              showNav
                ? "text-3xl mb-3 p-1 rounded-lg sm:hidden translate-x-60"
                : "text-3xl mb-3 p-1 rounded-lg sm:hidden"
            }
          >
            <FcMenu />
          </button>
          <div className="bg-white w-full rounded-2xl p-4">
            <h1 className="text-2xl font-bold">{card}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
