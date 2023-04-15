import pool from "@/database/pool";

export default function handler(req, res) {
  const method = req.method;
  if (method === "GET") {
    pool.query("SELECT * FROM produk", (err, result) => {
      if (err) {
        res.json({
          message: "Gagal koneksi ke database",
        });
      }
      res.json({
        message: "Berhasil mendapatkan data",
        data: result.reverse(),
      });
    });
  } else {
    res.json({
      message: "Method salah",
    });
  }
}
