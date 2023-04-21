import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HeadComponent, Navbar } from "@/components";
import axios from "axios";

function DetailProduk() {
  const router = useRouter();
  const { id } = router.query;
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
  const image = [
    // data.gambar_produk,
    // data.gambar_produk_2,
    // data.gambar_produk_3,
    // data.gambar_produk_4,
    // data.gambar_produk_5,
  ];

  const [count, setCount] = useState(1);
  const handleChangeImage = (index) => {
    setCount(index + 1);
  };

  const getData = async () => {
    try {
      const result = await axios.get(`/api/produk/get-produk-by-id/${id}`);
      setData(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  data.gambar_produk && image.push(data.gambar_produk);
  data.gambar_produk_2 && image.push(data.gambar_produk_2);
  data.gambar_produk_3 && image.push(data.gambar_produk_3);
  data.gambar_produk_4 && image.push(data.gambar_produk_4);
  data.gambar_produk_5 && image.push(data.gambar_produk_5);

  return (
    <div>
      <HeadComponent title="Detail Produk" />
      <Navbar />
      <div className="mt-20 max-w-[1200px] mx-auto p-4">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="w-full">
            <img
              className="w-full rounded-2xl"
              src={image[count - 1]}
              alt="produk"
            />
            <div className="grid grid-cols-5 gap-3 mt-3">
              {image.map((item, index) => (
                <img
                  onClick={() => {
                    handleChangeImage(index);
                  }}
                  key={index}
                  className="rounded-2xl cursor-pointer w-full"
                  src={item}
                  alt="produk"
                />
              ))}
            </div>
          </div>
          <div className="bg-red-300 h-10">
            <h1>{data.nama_produk}</h1>
          </div>
          <div className="bg-red-300 h-10"></div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduk;
