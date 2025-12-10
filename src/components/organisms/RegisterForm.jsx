import InputField from "../molecules/InputField";
import PasswordField from "../molecules/PasswordField";
import Button from "../atoms/Button";
import GoogleButton from "../atoms/GoogleButton";
import { Link } from "react-router-dom";
import Logo from "../../../public/img/Logo.png";
import { useState } from "react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
    konfirmasiPassword: "",
  });

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { username, password, konfirmasiPassword } = form;

    if (!username || !password || !konfirmasiPassword) {
      alert("Semua field harus diisi!");
      return;
    }

    if (password !== konfirmasiPassword) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    // Ambil data lama
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Push user baru
    users.push({
      username: username,
      password: password,
    });

    // Simpan kembali ke localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Berhasil registrasi!");

    // Reset form
    setForm({
      username: "",
      password: "",
      konfirmasiPassword: "",
    });
  };

  return (
    <div>
      <div className="text-center mb-6">
        <div className="flex justify-center mb-2">
          <div className="bg-white text-black p-2 rounded">
            <img src={Logo} alt="Logo" className="w-full h-12 bg-black" />
          </div>
        </div>

        <h1 className="text-3xl font-bold">Daftar</h1>
        <p className="text-gray-400">Selamat datang!</p>
      </div>

      <form onSubmit={handleRegister}>
        <InputField
          type="text"
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Masukkan username"
        />

        <PasswordField
          label="Kata Sandi"
          name="password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
          placeholder="Masukkan kata sandi"
        />

        {/* <button type="button" onClick={togglePassword}>
          👁️
        </button> */}

        <PasswordField
          label="Konfirmasi Kata Sandi"
          name="konfirmasiPassword"
          type={showPassword ? "text" : "password"}
          value={form.konfirmasiPassword}
          onChange={handleChange}
          placeholder="Masukkan konfirmasi kata sandi"
        />

        <div className="text-sm text-gray-400 mb-4 text-center">
          Sudah punya akun?
          <Link to="/" className="text-white ml-1 font-semibold">
            Masuk
          </Link>
        </div>

        <Button type="submit">Daftar</Button>

        <div className="my-4 text-center text-gray-500 text-sm">Atau</div>

        <GoogleButton />
      </form>
    </div>
  );
};

export default RegisterForm;
