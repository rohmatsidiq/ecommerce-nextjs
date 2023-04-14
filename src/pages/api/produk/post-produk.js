import pool from "@/database/pool";

export default function handler(req, res) {
  const method = req.method;
  const nama_produk = req.body.nama_produk;
  const deskripsi_produk = req.body.deskripsi_produk;
  const harga_produk = req.body.harga_produk;
  if (method === "POST") {
    pool.query(
      `INSERT INTO produk (nama_produk, deskripsi_produk, harga_produk) VALUES ('${nama_produk}', '${deskripsi_produk}', '${harga_produk}')`,
      (err, result) => {
        if (err) {
          res.json({
            message: "Gagal koneksi ke database",
          });
        }
        res.json({
          message: "Berhasil menyimpan data",
          data: {
            nama_produk: nama_produk,
            deskripsi_produk: deskripsi_produk,
            harga_produk: harga_produk,
          },
        });
      }
    );
  } else {
    res.json({
      message: "Method salah",
    });
  }
}
