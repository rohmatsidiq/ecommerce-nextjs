import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Confirmdelete, Formedit, Formtambahproduk, Notif } from "..";

export default function AdminProduk() {
  const [produk, setProduk] = useState([]);
  const [confrimDelete, setConfirmDelete] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [search, setSearch] = useState("");
  const [idProduk, setIdProduk] = useState("");
  const [showFormEdit, setShowFormEdit] = useState(false);
  const [showFormTambahProduk, setShowFormTambahProduk] = useState(false);
  const getProduk = async () => {
    try {
      const result = await axios.get("/api/produk/get-produk");
      setProduk(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduk = async (id_produk) => {
    setIdProduk(id_produk);
    setConfirmDelete(true);
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
    <div className="">
      {confrimDelete && (
        <Confirmdelete
          idProduk={idProduk}
          setIdProduk={setIdProduk}
          setConfirmDelete={setConfirmDelete}
          setShowNotif={setShowNotif}
          getProduk={getProduk}
        />
      )}
      {showNotif && <Notif content="Produk Berhasil Dihapus" />}
      {showFormTambahProduk && (
        <Formtambahproduk
          setShowFormTambahProduk={setShowFormTambahProduk}
          setShowNotif={setShowNotif}
          getProduk={getProduk}
        />
      )}
      {showFormEdit && (
        <Formedit
          idProduk={idProduk}
          setIdProduk={setIdProduk}
          setShowFormEdit={setShowFormEdit}
          getProduk={getProduk}
        />
      )}
      <h1 className="text-2xl font-bold mb-3">Produk</h1>
      <div className="grid grid-cols-5 gap-2 items-center mb-3">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Cari"
          className="px-4 col-span-4 py-2 rounded-full border focus:outline-none focus:border-sky-300 focus:shadow-lg focus:shadow-sky-100"
        />
        <button
          onClick={() => {
            setShowFormTambahProduk(true);
          }}
          className="bg-sky-500 px-3 py-2 rounded-full text-white hover:shadow-lg hover:shadow-sky-100 flex items-center gap-1 hover:scale-105 justify-center"
        >
          <AiFillPlusCircle className="text-xl" />
          Tambah Produk
        </button>
      </div>
      <div>
        {produk
          .filter((i) => {
            return search.toLowerCase() === ""
              ? i
              : i.nama_produk.toLowerCase().includes(search);
          })
          .map((e) => (
            <div
              key={e.id_produk}
              className="bg-white rounded-2xl p-3 mb-3 border"
            >
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-4 sm:col-span-1">
                  <div className="w-full h-20">
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src={e.gambar_produk}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-8 sm:col-span-11">
                  <div className="sm:grid sm:grid-cols-4">
                    <p className="">{e.nama_produk}</p>
                    <p className="">Stock: {e.stock_produk} pcs</p>
                    <p className="">{e.harga_produk_display}</p>
                    <div className="w-full flex sm:justify-end">
                      <button
                        onClick={() => {
                          setShowFormEdit(true);
                          setIdProduk(e.id_produk);
                        }}
                        className="bg-green-600 hover:bg-green-500 p-2 m-1 rounded-full text-white hover:shadow-lg hover:shadow-green-200 hover:scale-105 flex items-center gap-1"
                      >
                        <MdOutlineModeEdit className="text-lg" />
                      </button>
                      <button
                        onClick={() => {
                          deleteProduk(e.id_produk);
                        }}
                        className="bg-red-600 hover:bg-red-500 p-2 m-1 rounded-full text-white hover:shadow-lg hover:shadow-red-200 hover:scale-105 flex items-center gap-1"
                      >
                        <RiDeleteBin5Line className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
