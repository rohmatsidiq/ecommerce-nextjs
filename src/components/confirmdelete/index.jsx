import React from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import axios from "axios";

export default function Confirmdelete({
  idProduk,
  setIdProduk,
  setConfirmDelete,
  setShowNotif,
  getProduk,
}) {
  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/api/produk/delete-produk/${idProduk}`
      );
      setIdProduk("");
      setShowNotif(true);
      setConfirmDelete(false);
      getProduk();
      setTimeout(() => {
        setShowNotif(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed w-screen h-screen bg-black top-0 left-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white py-5 px-8 rounded-3xl flex flex-col gap-3 justify-center text-center">
        <h1 className="text-xl my-3">Yakin Hapus Produk?</h1>
        <div className="flex justify-around items-center">
          <button
            onClick={() => {
              setConfirmDelete(false);
            }}
            className="px-2 py-1 border-2 text-sky-500 border-sky-500 rounded-full hover:bg-sky-600 hover:text-white hover:border-sky-600 hover:shadow-lg hover:shadow-sky-300 flex gap-2 items-center"
          >
            <FiXCircle className="text-2xl" />
            No
          </button>
          <button
            onClick={handleDelete}
            className="px-2 py-1 border-2 border-sky-500 hover:border-sky-600 rounded-full bg-sky-500 hover:bg-sky-600 text-white hover:shadow-lg hover:shadow-sky-300 flex gap-2 items-center"
          >
            <FiCheckCircle className="text-2xl" />
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
