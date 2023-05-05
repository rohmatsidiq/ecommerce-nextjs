import axios from "axios";
import { useState } from "react";
import { AiFillSave, AiOutlineClose } from "react-icons/ai";
import { Notif } from "..";

export default function Formtambahproduk({
  getProduk,
  setShowFormTambahProduk,
}) {
  const [showNotif, setShowNotif] = useState(false);
  const [data, setData] = useState({
    nama_produk: "",
    harga_produk: "",
    stock_produk: "",
    deskripsi_produk: "",
    gambar_produk: "",
    gambar_produk_2: "",
    gambar_produk_3: "",
    gambar_produk_4: "",
    gambar_produk_5: "",
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
    } else if (e.target.name == "gambar_produk") {
      setData({ ...data, gambar_produk: e.target.value });
    } else if (e.target.name == "gambar_produk_2") {
      setData({ ...data, gambar_produk_2: e.target.value });
    } else if (e.target.name == "gambar_produk_3") {
      setData({ ...data, gambar_produk_3: e.target.value });
    } else if (e.target.name == "gambar_produk_4") {
      setData({ ...data, gambar_produk_4: e.target.value });
    } else if (e.target.name == "gambar_produk_5") {
      setData({ ...data, gambar_produk_5: e.target.value });
    }
  };

  const handleSave = async () => {
    try {
      await axios.post("api/produk/post-produk", data);
      setData({
        nama_produk: "",
        harga_produk: "",
        stock_produk: "",
        deskripsi_produk: "",
        gambar_produk: "",
        gambar_produk_2: "",
        gambar_produk_3: "",
        gambar_produk_4: "",
        gambar_produk_5: "",
      });
      setShowNotif(true);
      getProduk();

      setTimeout(() => {
        setShowFormTambahProduk(false);
        setShowNotif(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute w-screen h-screen overflow-y-scroll top-0 left-0 bg-black bg-opacity-50 p-4 shadow-xl z-50">
      {showNotif && <Notif content="Produk Berhasil Ditambah" />}
      <div className="bg-white p-5 rounded-3xl max-w-2xl mx-auto">
        <h1 className="text-center text-2xl">Tambah Produk</h1>
        <div className="flex flex-col mb-3">
          <label htmlFor="nama_produk">Nama Produk</label>
          <input
            onChange={handleOnChange}
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
              onChange={handleOnChange}
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
              onChange={handleOnChange}
              className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
              type="number"
              id="stock_produk"
              name="stock_produk"
              defaultValue={data.stock_produk}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-3 my-2">
          <div className="flex flex-col mb-3">
            <label htmlFor="gambar_produk">Gambar Produk 1</label>
            <input
              onChange={handleOnChange}
              className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
              type="text"
              id="gambar_produk"
              name="gambar_produk"
              defaultValue={data.gambar_produk}
            />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="gambar_produk_2">Gambar Produk 2</label>
            <input
              onChange={handleOnChange}
              className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
              type="text"
              id="gambar_produk_2"
              name="gambar_produk_2"
              defaultValue={data.gambar_produk_2}
            />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="gambar_produk_3">Gambar Produk 3</label>
            <input
              onChange={handleOnChange}
              className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
              type="text"
              id="gambar_produk_3"
              name="gambar_produk_3"
              defaultValue={data.gambar_produk_3}
            />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="gambar_produk_4">Gambar Produk 4</label>
            <input
              onChange={handleOnChange}
              className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
              type="text"
              id="gambar_produk_4"
              name="gambar_produk_4"
              defaultValue={data.gambar_produk_4}
            />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="gambar_produk_5">Gambar Produk 5</label>
            <input
              onChange={handleOnChange}
              className="px-3 py-2 mt-2 rounded-full border focus:outline-none focus:border-sky-200 focus:shadow-md focus:shadow-sky-200"
              type="text"
              id="gambar_produk_5"
              name="gambar_produk_5"
              defaultValue={data.gambar_produk_5}
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
            defaultValue={data.deskripsi_produk}
          ></textarea>
        </div>

        <div className="flex justify-between gap-3">
          <button
            onClick={() => {
              setShowFormTambahProduk(false);
            }}
            className="bg-sky-500 w-full text-white px-4 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-sky-300 flex gap-2 items-center"
          >
            <AiOutlineClose className="text-2xl" />
            Batal
          </button>

          <button
            onClick={handleSave}
            className="bg-sky-500 w-full text-white px-4 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-sky-300 flex gap-2 items-center"
          >
            <AiFillSave className="text-2xl" />
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
