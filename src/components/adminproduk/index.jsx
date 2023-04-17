import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillPlusCircle } from "react-icons/ai";
import { Formedit } from "..";

export default function AdminProduk({ setCard }) {
  const [produk, setProduk] = useState([]);
  const [search, setSearch] = useState("");
  const [idProduk, setIdProduk] = useState("");
  const [showFormEdit, setShowFormEdit] = useState(false);
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getProduk();
  }, []);

  if (!produk) {
    return;
  }

  return (
    <div>
      {showFormEdit && (
        <Formedit
          idProduk={idProduk}
          setIdProduk={setIdProduk}
          setShowFormEdit={setShowFormEdit}
          getProduk={getProduk}
        />
      )}
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">Produk</h1>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Cari"
          className="px-4 py-2 rounded-full border focus:outline-none focus:border-sky-300 focus:shadow-lg focus:shadow-sky-200"
        />
        <button
          onClick={() => {
            setCard("tambahproduk");
          }}
          className="bg-sky-500 px-3 py-2 rounded-full text-white hover:shadow-lg hover:shadow-sky-300 flex items-center gap-1 hover:scale-105"
        >
          <AiFillPlusCircle className="text-xl" />
          Tambah Produk
        </button>
      </div>
      <table className="w-full bg-white text-center mt-5 h-100">
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
          {produk
            .filter((i) => {
              return search.toLowerCase() === ""
                ? i
                : i.nama_produk.toLowerCase().includes(search);
            })
            .map((e) => (
              <tr key={e.id_produk} className="border-b-2">
                <td className="p-4 flex justify-center">
                  <div className="bg-gray-400 w-12 h-12"></div>
                </td>
                <td className="p-4">{e.nama_produk}</td>
                <td className="p-4">{e.stock_produk}</td>
                <td className="p-4">{e.harga_produk_display}</td>
                <td className="p-4">
                  <div className=" flex justify-center items-center gap-2">
                    <button
                      onClick={() => {
                        setShowFormEdit(true);
                        setIdProduk(e.id_produk);
                      }}
                      className="bg-yellow-400 p-2 rounded-full text-white hover:shadow-lg hover:shadow-yellow-300 hover:scale-105"
                    >
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
