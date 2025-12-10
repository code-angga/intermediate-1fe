import AuthLayout from "../components/template/AuthLayout";
import LoginForm from "../components/organisms/LoginForm";
import Logo from "../../public/img/Logo.png";

const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="flex items-center justify-center mb-6">
        <img src={Logo} alt="Logo" />
      </div>

      <h2 className="text-center text-2xl mb-2">Masuk</h2>
      <p className="text-center text-sm text-gray-400 mb-6">
        Selamat datang kembali!
      </p>

      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
