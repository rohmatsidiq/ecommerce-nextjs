import { useEffect, useState } from "react";
import { HeadComponent, Navbar, Banner, Productcard } from "../components";
import axios from "axios";

export default function Home() {
  const [produk, setProduk] = useState([]);
  const getProduk = async () => {
    try {
      const result = await axios.get("api/produk/get-produk");
      setProduk(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduk();
  }, []);
  return (
    <>
      <Navbar />
      <HeadComponent title={"Ecommerce"} />
      <Banner />

      <div className="max-w-[1200px] mx-auto p-4">
        <p className="text-2xl font-bold">Product</p>
        <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 mt-3">
          {produk.map((item, index) => (
            <Productcard
              key={index}
              id={item.id_produk}
              namaProduk={item.nama_produk}
              hargaProduk={item.harga_produk_display}
              gambar={item.gambar_produk}
            />
          ))}
        </div>
      </div>
    </>
  );
}
