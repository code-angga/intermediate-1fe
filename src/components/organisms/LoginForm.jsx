import InputField from "../molecules/InputField";
import PasswordField from "../molecules/PasswordField";
import Button from "../atoms/Button";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser, clearError } from "../../store/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isLogin, token } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  //  PINDAH KE HOMEPAGE JIKA LOGIN BERHASIL
  useEffect(() => {
    if (isLogin && token) {
      localStorage.setItem("token", token); // untuk ProtectedRoute
      navigate("/homepage", { replace: true });
    }
  }, [isLogin, token, navigate]);

  const handleChange = (e) => {
    dispatch(clearError());
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <form onSubmit={handleLogin}>
      <InputField
        label="Username"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Masukkan username"
      />

      <PasswordField
        label="Kata Sandi"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Masukkan kata sandi"
      />

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

      <button
        type="button"
        className="flex items-center justify-center w-full py-2 border bg-[#2A2A2A] rounded-3xl hover:bg-gray-800 transition"
      >
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
