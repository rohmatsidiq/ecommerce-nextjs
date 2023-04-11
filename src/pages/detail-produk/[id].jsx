import React, { useState } from "react";
import { useRouter } from "next/router";
import { HeadComponent, Navbar } from "@/components";

function DetailProduk() {
  const router = useRouter();
  const { id } = router.query;
  const image = [
    "https://jualanku.link/admin/get_file/872e98601c4a11edac1941bad6140786_2505.png",
    "https://jualanku.link/admin/get_file/8fe28f801c4a11ed89c3079f6c86b3eb_2506.png",
    "https://jualanku.link/admin/get_file/103a04c0071e11edb780ef541ee74624_2112.png",
    "https://jualanku.link/admin/get_file/103dc680071e11edb660f1f96618f1e7_2113.png",
    "https://jualanku.link/admin/get_file/1041d6c0071e11ed85018fe31b036076_2114.png",
  ];
  const [count, setCount] = useState(1);
  const handleChangeImage = (index) => {
    setCount(index + 1);
  };
  return (
    <div>
      <HeadComponent title="Detail Produk" />
      <Navbar />
      <div className="mt-20 max-w-[1200px] mx-auto p-4">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="w-full">
            <img className="rounded-2xl" src={image[count - 1]} alt="produk" />
            <div className="grid grid-cols-5 gap-3 mt-3">
              {image.map((item, index) => (
                <img
                  onClick={() => {
                    handleChangeImage(index);
                  }}
                  key={index}
                  className="rounded-2xl cursor-pointer"
                  src={item}
                  alt="produk"
                />
              ))}
            </div>
          </div>
          <div className="bg-red-300 h-10"></div>
          <div className="bg-red-300 h-10"></div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduk;
