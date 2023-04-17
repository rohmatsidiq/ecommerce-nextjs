import pool from "@/database/pool";

export default function handler(req, res) {
  const method = req.method;
  const { id } = req.query;
  if (method === "DELETE") {
    pool.query(`DELETE FROM produk WHERE id_produk=${id}`, (err, result) => {
      if (err) {
        res.json({
          message: "Gagal koneksi ke database",
        });
      }
      res.json({
        message: "Berhasil menghapus produk data",
      });
    });
  } else {
    res.json({
      message: "Method salah",
    });
  }
}
