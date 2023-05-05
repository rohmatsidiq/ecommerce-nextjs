import { HeadComponent } from "@/components";
import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setData({ ...data, username: e.target.value });
    } else if (e.target.name === "password") {
      setData({ ...data, password: e.target.value });
    }
  };

  console.log(data);
  return (
    <>
      <HeadComponent title="Login" />
      <div className="bg-slate-50 w-screen h-screen flex justify-center items-center p-5">
        <div className="bg-white p-5 rounded-2xl shadow-md w-full max-w-sm">
          <h1 className="text-2xl text-center mb-5">Login</h1>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Username/Email"
            name="username"
            className="border w-full px-3 py-2 rounded-full focus:border-sky-300 focus:outline-none focus:shadow-lg focus:shadow-sky-100 mb-5"
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
            className="border w-full px-3 py-2 rounded-full focus:border-sky-300 focus:outline-none focus:shadow-lg focus:shadow-sky-100 mb-5"
          />
          <button className="bg-sky-600 hover:bg-sky-500 text-white w-full rounded-full p-2 mb-3 hover:shadow-lg hover:shadow-sky-100">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
