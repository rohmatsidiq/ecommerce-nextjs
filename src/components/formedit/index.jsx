import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillSave, AiOutlineClose } from "react-icons/ai";

export default function Formedit({ idProduk, setIdProduk, setShowFormEdit }) {
  const [data, setData] = useState({});
  const handleCancel = () => {
    setIdProduk("");
    setShowFormEdit(false);
  };

  const getData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3000/api/produk/get-produk-by-id/${idProduk}`
      );
      setData(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-3xl">
        <h1 className="text-center text-2xl">Edit Produk</h1>
        <div className="flex flex-col mb-3">
          <label htmlFor="nama_produk">Nama Produk</label>
          <input
            // onChange={handleOnChange}
            className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
            type="text"
            id="nama_produk"
            name="nama_produk"
            defaultValue={data.nama_produk}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col mb-3">
            <label htmlFor="harga_produk">Harga Produk</label>
            <input
              // onChange={handleOnChange}
              className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
              type="number"
              id="harga_produk"
              name="harga_produk"
              defaultValue={data.harga_produk}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="stock_produk">Stock Produk</label>
            <input
              // onChange={handleOnChange}
              className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
              type="number"
              id="stock_produk"
              name="stock_produk"
              defaultValue={data.stock_produk}
            />
          </div>
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="deskripsi_produk">Deskripsi Produk</label>
          <textarea
            // onChange={handleOnChange}
            cols="30"
            rows="10"
            className="px-3 py-2 mt-2 rounded-3xl border focus:outline-none
            focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
            type="text"
            id="deskripsi_produk"
            name="deskripsi_produk"
            defaultValue={data.deskripsi_produk}
          ></textarea>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleCancel}
            className="bg-sky-500 text-white px-4 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-sky-300 flex gap-2 items-center"
          >
            <AiOutlineClose className="text-2xl" />
            Batal
          </button>

          <button
            // onClick={handleSave}
            className="bg-sky-500 text-white px-4 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-sky-300 flex gap-2 items-center"
          >
            <AiFillSave className="text-2xl" />
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
