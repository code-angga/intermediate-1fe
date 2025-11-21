import InputField from "../molecules/InputField";
import PasswordField from "../molecules/PasswordField";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

const LoginForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputField label="Username" placeholder="Masukkan username" />

      <PasswordField label="Kata Sandi" placeholder="Masukkan kata sandi" />

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
