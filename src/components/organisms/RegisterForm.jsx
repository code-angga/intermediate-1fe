import InputField from "../molecules/InputField";
import PasswordField from "../molecules/PasswordField";
import Button from "../atoms/Button";
import GoogleButton from "../atoms/GoogleButton";
import { Link } from "react-router-dom";
import Logo from "../../../public/img/Logo.png";

const RegisterForm = () => {
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

      <InputField label="Username" placeholder="Masukkan username" />

      <PasswordField label="Kata Sandi" placeholder="Masukkan kata sandi" />

      <PasswordField
        label="Konfirmasi Kata Sandi"
        placeholder="Masukkan konfirmasi kata sandi"
      />

      <div className="text-sm text-gray-400 mb-4 text-center">
        Sudah punya akun?
        <Link to="/" className="text-white ml-1 font-semibold">
          Masuk
        </Link>
      </div>

      <Button>Daftar</Button>

      <div className="my-4 text-center text-gray-500 text-sm">Atau</div>

      <GoogleButton />
    </div>
  );
};

export default RegisterForm;
