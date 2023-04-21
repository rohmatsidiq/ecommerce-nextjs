import pool from "@/database/pool";
import multer from "multer";

export default function handler(req, res) {
  //   const upload = multer();
  const method = req.method;
  if (method === "POST") {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "../../../../public");
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
      },
    });

    const upload = multer({ storage: storage });
    // pool.query("SELECT * FROM produk", (err, result) => {
    //   if (err) {
    //     res.json({
    //       message: "Gagal koneksi ke database",
    //     });
    //   }
    //   res.json({
    //     message: "Berhasil mendapatkan data",
    //     data: result.reverse(),
    //   });
    // });

    res.json({
      message: "berhasil",
    });
  } else {
    res.json({
      message: "Method salah",
    });
  }
}
