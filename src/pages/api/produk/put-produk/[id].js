import pool from "@/database/pool";

export default function handler(req, res) {
  const { id } = req.query;
  const method = req.method;
  const nama_produk = req.body.nama_produk;
  const stock_produk = req.body.stock_produk;
  const deskripsi_produk = req.body.deskripsi_produk;
  const gambar_produk = req.body.gambar_produk;
  const harga_produk = req.body.harga_produk;
  const harga_produk_display = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(harga_produk);

  if (method === "PUT") {
    pool.query(
      `UPDATE produk SET nama_produk='${nama_produk}', deskripsi_produk='${deskripsi_produk}', harga_produk=${harga_produk}, harga_produk_display='${harga_produk_display}', gambar_produk='${gambar_produk}', stock_produk=${stock_produk} WHERE id_produk=${id}`,
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
            harga_produk_display: harga_produk_display,
            gambar_produk: gambar_produk,
            stock_produk: stock_produk,
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
