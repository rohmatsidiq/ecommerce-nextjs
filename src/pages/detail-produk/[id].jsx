import { useEffect, useState } from "react";
import { HeadComponent, Navbar } from "@/components";
import { BiCartDownload } from "react-icons/bi";
import axios from "axios";

function DetailProduk({ id }) {
  const [amount, setAmount] = useState(1);
  const image = [];
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);
  const handleChangeImage = (index) => {
    setCount(index + 1);
  };

  const getData = async () => {
    try {
      const result = await axios.get(`/api/produk/get-produk-by-id/${id}`);
      console.log(result);
      setData(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
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
      <div className="mt-14 max-w-[1200px] mx-auto p-4">
        <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-xl">
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

          <div className="">
            <h1 className="text-3xl">{data.nama_produk}</h1>
            <small className="text-sky-500">Stock: {data.stock_produk}</small>
            <p className="text-2xl">{data.harga_produk_display}</p>
            <div className="my-3">
              <div className="shadow-lg p-4 rounded-xl border border-sky-300">
                <h3 className="text-xl">Detail Pembelian</h3>
                <div className="flex items-center gap-2 justify-between mt-4">
                  <p>Jumlah:</p>
                  <input
                    onChange={handleChangeAmount}
                    value={amount}
                    type="number"
                    className="w-full border rounded-full px-3 py-1 focus:outline-none focus:border-sky-300 focus:shadow-lg focus:shadow-sky-200"
                  />
                </div>
                <button className="bg-sky-500 w-full mt-4 p-2 rounded-full text-white hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-300 flex items-center justify-center gap-2">
                  <BiCartDownload className="text-2xl" />
                  Add to cart
                </button>
                <div className="flex justify-around mt-3">
                  <a
                    href="https://shopee.co.id/"
                    className="text-orange-500 underline"
                  >
                    Shopee
                  </a>
                  <a
                    href="https://www.tokopedia.com/"
                    className="text-green-500 underline"
                  >
                    Tokopedia
                  </a>
                </div>
              </div>
            </div>
            <p>{data.deskripsi_produk}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduk;

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  return {
    props: {
      id: id,
    },
  };
}
