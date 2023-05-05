import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
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
        `../api/produk/delete-produk/${idProduk}`
      );
      setIdProduk("");
      setShowNotif(true);
      setConfirmDelete(false);
      getProduk();
      setTimeout(() => {
        setShowNotif(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed w-screen h-screen bg-black top-0 left-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white py-5 px-8 rounded-3xl flex flex-col gap-3 justify-center text-center">
        <h1 className="text-xl my-3">Yakin Hapus Produk?</h1>
        <div className="flex justify-around items-center gap-3">
          <button
            onClick={() => {
              setConfirmDelete(false);
            }}
            className="text-sky-600 border border-sky-600 hover:border-sky-500 hover:text-sky-500 w-full px-4 py-2 rounded-full hover:shadow-lg hover:shadow-sky-200 flex gap-2 items-center"
          >
            <FiX className="text-2xl" />
            No
          </button>
          <button
            onClick={handleDelete}
            className="bg-sky-600 hover:bg-sky-500 w-full text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-sky-200 flex gap-2 items-center"
          >
            <FiCheck className="text-2xl" />
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
