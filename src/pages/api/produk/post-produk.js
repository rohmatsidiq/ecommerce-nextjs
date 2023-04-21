import pool from "@/database/pool";

export default function handler(req, res) {
  const method = req.method;
  const nama_produk = req.body.nama_produk;
  const stock_produk = req.body.stock_produk;
  const deskripsi_produk = req.body.deskripsi_produk;
  const gambar_produk = req.body.gambar_produk;
  const gambar_produk_2 = req.body.gambar_produk_2;
  const gambar_produk_3 = req.body.gambar_produk_3;
  const gambar_produk_4 = req.body.gambar_produk_4;
  const gambar_produk_5 = req.body.gambar_produk_5;
  const harga_produk = req.body.harga_produk;
  const harga_produk_display = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(harga_produk);

  if (method === "POST") {
    pool.query(
      `INSERT INTO produk (nama_produk, deskripsi_produk, harga_produk, harga_produk_display, gambar_produk, gambar_produk_2, gambar_produk_3, gambar_produk_4, gambar_produk_5, stock_produk) VALUES ('${nama_produk}', '${deskripsi_produk}', ${harga_produk}, '${harga_produk_display}', '${gambar_produk}', '${gambar_produk_2}', '${gambar_produk_3}', '${gambar_produk_4}', '${gambar_produk_5}', ${stock_produk})`,
      (err, result) => {
        if (err) {
          res.json({
            message: "Gagal koneksi ke database",
          });
        }
        res.json({
          message: "Berhasil menyimpan data",
          data: result,
        });
      }
    );
  } else {
    res.json({
      message: "Method salah",
    });
  }
}
