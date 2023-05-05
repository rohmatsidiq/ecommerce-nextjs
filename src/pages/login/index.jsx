import { HeadComponent } from "@/components";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

function Login() {
  const route = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setData({ ...data, username: e.target.value });
      setErrorMessage("");
    } else if (e.target.name === "password") {
      setData({ ...data, password: e.target.value });
      setErrorMessage("");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("api/account/login", {
        username: data.username,
        password: data.password,
      });
      if (response.data.message !== "") {
        setErrorMessage(response.data.message);
      }
      if (response.data.success && response.data.is_admin == "true") {
        localStorage.setItem("admin", `${response.data.token}`);
        route.push("/admin");
      } else if (response.data.success && response.data.is_admin == "false") {
        localStorage.setItem("user", `${response.data.token}`);
        route.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeadComponent title="Login" />
      <div className="bg-slate-50 w-screen h-screen flex justify-center items-center p-5">
        <div className="bg-white p-5 rounded-2xl shadow-md w-full max-w-sm">
          <h1 className="text-2xl text-center mb-5">Login</h1>
          {errorMessage !== "" && (
            <h5 className="text-center text-red-600 mb-5">{errorMessage}</h5>
          )}
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
          <button
            onClick={handleLogin}
            className="bg-sky-600 hover:bg-sky-500 text-white w-full rounded-full p-2 mb-3 hover:shadow-lg hover:shadow-sky-100"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
