import InputField from "../molecules/InputField";
import PasswordField from "../molecules/PasswordField";
import Button from "../atoms/Button";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
const LoginForm = () => {
  const navigate = useNavigate();
  // const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  // const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Cek apakah username & password cocok
    const userFound = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (!userFound) {
      setError("Username atau password salah!");
      return;
    }

    // Jika berhasil login → buat sesi
    localStorage.setItem("login", "true");
    localStorage.setItem("user", form.username);

    alert("Login berhasil!");
    navigate("/homepage");
  };
  return (
    <form onSubmit={handleLogin}>
      <InputField
        label="Username"
        name="username"
        type="text"
        placeholder="Masukkan username"
        value={form.username}
        onChange={handleChange}
      />

      <PasswordField
        label="Kata Sandi"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Masukkan kata sandi"
      />

      {/* Notifikasi Error */}
      {error && (
        <div className="bg-red-600 text-white p-2 rounded mb-4 text-center">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 mt-2 text-sm">
        <div>
          Belum punya akun?{" "}
          <Link to="/register" className="font-semibold">
            Daftar
          </Link>
        </div>
        <div className="text-right">
          <a href="#">Lupa kata sandi?</a>
        </div>
      </div>

      <Button type="submit">Masuk</Button>

      <div className="my-4 text-center text-sm text-gray-400">Atau</div>

      <button className="flex items-center justify-center w-full py-2 border bg-[#2A2A2A] rounded-3xl hover:bg-gray-800 transition">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          className="w-5 h-5 mr-2"
        />
        Masuk dengan Google
      </button>
    </form>
  );
};

export default LoginForm;
