import pool from "@/database/pool";
const jwt = require("jsonwebtoken");

export default function handler(req, res) {
  const method = req.method;
  const username = req.body.username;
  const password = req.body.password;

  if (method === "POST") {
    pool.query(
      `SELECT * FROM account WHERE username="${username}" OR email="${username}"`,
      (err, result) => {
        if (result.length > 0 && password == result[0].password) {
          const token = jwt.sign(
            {
              username: result[0].username,
              is_admin: result[0].is_admin,
            },
            "dc902cf8506a266f895891fbb97274fcb606b0dd1e172b4f89b7fde62c35cbe6"
          );
          res.json({
            success: true,
            is_admin: result[0].is_admin,
            token: token,
          });
        } else {
          res.json({
            success: false,
            message: "Username/password salah",
          });
        }
      }
    );
  } else {
    res.json({
      message: "Method salah",
    });
  }
}
