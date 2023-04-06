import Link from "next/link";
import { React, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-white w-screen shadow-lg">
      <div className="max-w-[1200px] mx-auto p-5">
        <div className="flex justify-between items-center text-sky-500">
          {/* Logo */}
          <Link href="/">
            <p className="text-3xl font-bold">Logo</p>
          </Link>

          {/* Menu */}
          <div
            className={
              showMenu
                ? "absolute sm:static flex flex-col sm:flex-row gap-5 bg-white sm:bg-nonee shadow-lg sm:shadow-none top-[76px] sm:top-0 w-1/2 right-0 justify-center sm:justify-end text-end p-5 sm:p-0 rounded-es-3xl sm:rounded-none duration-500"
                : "absolute sm:static flex flex-col sm:flex-row gap-5 bg-white sm:bg-nonee shadow-lg sm:shadow-none top-[76px] sm:top-0 w-1/2 right-[-100%] justify-center sm:justify-end text-end p-5 sm:p-0 rounded-es-3xl sm:rounded-none duration-500"
            }
          >
            <Link
              className="hover:border-b hover:border-sky-200 hover:scale-110 hover:text-sky-600"
              href="/"
            >
              Beranda
            </Link>
            <Link
              className="hover:border-b hover:border-sky-200 hover:scale-110 hover:text-sky-600"
              href="/produk"
            >
              Produk
            </Link>
            <Link
              className="hover:border-b hover:border-sky-200 hover:scale-110 hover:text-sky-600"
              href="/agen"
            >
              Agen
            </Link>
            <Link
              className="hover:border-b hover:border-sky-200 hover:scale-110 hover:text-sky-600"
              href="/keranjang"
            >
              Keranjang
            </Link>
            <Link
              className="hover:border-b hover:border-sky-200 hover:scale-110 hover:text-sky-600"
              href="/kontak"
            >
              Kontak
            </Link>
          </div>
          <TiThMenuOutline
            onClick={handleShowMenu}
            className="sm:hidden block text-2xl hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
