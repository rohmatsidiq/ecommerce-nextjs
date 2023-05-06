import pool from "@/database/pool";

export default function handler(req, res) {
  const method = req.method;
  const { id } = req.query;
  if (method === "GET") {
    pool.query(`SELECT * FROM produk WHERE id_produk=${id}`, (err, result) => {
      if (err) {
        res.json({
          message: "Gagal koneksi ke database",
          id: id,
        });
      }
      res.json({
        message: "Berhasil mendapatkan data",
        data: result,
      });
    });
  } else {
    res.json({
      message: "Method salah",
    });
  }
}
