import { HeadComponent, Navbar, Banner, Productcard } from "../components";
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeadComponent title={"Ecommerce"} />
      <Banner />

      <div className="max-w-[1200px] mx-auto p-4">
        <p className="text-2xl font-bold">Product</p>
        <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 mt-3">
          <Productcard
            namaProduk="Orang Sakit Lebih Bahagia"
            hargaProduk="Rp9.000"
            stockProduk="250pcs"
            gambar="https://jualanku.link/admin/get_file/c93d35201c4a11edba7fe7146056076c_2509.png"
          />
          <Productcard
            namaProduk="Psikologi Islam Yang Sempurna"
            hargaProduk="Rp50.000"
            stockProduk="250pcs"
            gambar="https://jualanku.link/admin/get_file/cdf1ced01c4b11eda0188732df1b627c_2528.png"
          />
          <Productcard
            namaProduk="Psikologi Islam Yang Sempurna"
            hargaProduk="Rp50.000"
            stockProduk="250pcs"
            gambar="https://jualanku.link/admin/get_file/cdf1ced01c4b11eda0188732df1b627c_2528.png"
          />
          <Productcard
            namaProduk="Psikologi Islam Yang Sempurna"
            hargaProduk="Rp50.000"
            stockProduk="250pcs"
            gambar="https://jualanku.link/admin/get_file/cdf1ced01c4b11eda0188732df1b627c_2528.png"
          />
          <Productcard
            namaProduk="Psikologi Islam Yang Sempurna"
            hargaProduk="Rp50.000"
            stockProduk="250pcs"
            gambar="https://jualanku.link/admin/get_file/cdf1ced01c4b11eda0188732df1b627c_2528.png"
          />
          <Productcard
            namaProduk="Psikologi Islam Yang Sempurna"
            hargaProduk="Rp50.000"
            stockProduk="250pcs"
            gambar="https://jualanku.link/admin/get_file/cdf1ced01c4b11eda0188732df1b627c_2528.png"
          />
          <Productcard
            namaProduk="Psikologi Islam Yang Sempurna"
            hargaProduk="Rp50.000"
            stockProduk="250pcs"
            gambar="https://jualanku.link/admin/get_file/cdf1ced01c4b11eda0188732df1b627c_2528.png"
          />
          <Productcard
            namaProduk="Psikologi Islam Yang Sempurna"
            hargaProduk="Rp50.000"
            stockProduk="250pcs"
            gambar="https://jualanku.link/admin/get_file/cdf1ced01c4b11eda0188732df1b627c_2528.png"
          />
          <Productcard
            namaProduk="Psikologi Islam Yang Sempurna"
            hargaProduk="Rp50.000"
            stockProduk="250pcs"
            gambar="https://jualanku.link/admin/get_file/cdf1ced01c4b11eda0188732df1b627c_2528.png"
          />
        </div>
      </div>
    </>
  );
}
