import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function AdminProduk() {
  const [produk, setProduk] = useState([]);
  const getProduk = async () => {
    try {
      const result = await axios.get(
        "http://localhost:3000/api/produk/get-produk"
      );
      setProduk(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduk();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Produk</h1>
      <table className="w-full bg-white rounded-2xl text-center mt-5">
        <thead>
          <tr className="border-b-2">
            <th className="p-4">Gambar</th>
            <th className="p-4">Nama Produk</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Harga</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {produk.map((e) => (
            <tr key={e.id_produk}>
              <td className="p-4 flex justify-center">
                <div className="bg-gray-400 w-12 h-12"></div>
              </td>
              <td className="p-4">{e.nama_produk}</td>
              <td className="p-4">{e.stock_produk}</td>
              <td className="p-4">{e.harga_produk_display}</td>
              <td className="p-4">
                <div className=" flex justify-center items-center gap-2">
                  <button className="bg-yellow-400 p-2 rounded-full text-white hover:shadow-lg hover:shadow-yellow-300 hover:scale-105">
                    <AiFillEdit />
                  </button>
                  <button className="bg-red-500 p-2 rounded-full text-white hover:shadow-lg hover:shadow-red-300 hover:scale-105">
                    <AiFillDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
