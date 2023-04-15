import axios from "axios";
import { useState } from "react";
import { AiFillSave } from "react-icons/ai";

function AdminTambahProduk({ setCard }) {
  const [data, setData] = useState({
    nama_produk: "",
    harga_produk: "",
    stock_produk: "",
    deskripsi_produk: "",
    gambar_produk: "",
  });

  const handleOnChange = (e) => {
    if (e.target.name == "nama_produk") {
      setData({ ...data, nama_produk: e.target.value });
    } else if (e.target.name == "harga_produk") {
      setData({ ...data, harga_produk: e.target.value });
    } else if (e.target.name == "stock_produk") {
      setData({ ...data, stock_produk: e.target.value });
    } else if (e.target.name == "deskripsi_produk") {
      setData({ ...data, deskripsi_produk: e.target.value });
    }
  };

  const handleSave = async () => {
    try {
      await axios.post("http://localhost:3000/api/produk/post-produk", data);
      await setData({
        nama_produk: "",
        harga_produk: "",
        stock_produk: "",
        deskripsi_produk: "",
        gambar_produk: "",
      });
      setCard("produk");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Tambah Produk</h1>
      <div className="bg-white p-4 rounded-xl my-3">
        <div className="flex flex-col mb-3">
          <label htmlFor="nama_produk">Nama Produk</label>
          <input
            onChange={handleOnChange}
            className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
            type="text"
            id="nama_produk"
            name="nama_produk"
            value={data.nama_produk}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col mb-3">
            <label htmlFor="harga_produk">Harga Produk</label>
            <input
              onChange={handleOnChange}
              className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
              type="number"
              id="harga_produk"
              name="harga_produk"
              value={data.harga_produk}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="stock_produk">Stock Produk</label>
            <input
              onChange={handleOnChange}
              className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
              type="number"
              id="stock_produk"
              name="stock_produk"
              value={data.stock_produk}
            />
          </div>
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="deskripsi_produk">Deskripsi Produk</label>
          <textarea
            onChange={handleOnChange}
            cols="30"
            rows="10"
            className="px-3 py-2 mt-2 rounded-3xl border focus:outline-none
            focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
            type="text"
            id="deskripsi_produk"
            name="deskripsi_produk"
            value={data.deskripsi_produk}
          ></textarea>
        </div>

        <button
          onClick={handleSave}
          className="bg-sky-500 text-white px-4 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-sky-300 flex gap-2 items-center"
        >
          <AiFillSave className="text-2xl" />
          Simpan
        </button>
      </div>
    </div>
  );
}

export default AdminTambahProduk;
