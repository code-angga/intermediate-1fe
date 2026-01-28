const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url(../../public/img/background.jpg)] bg-cover bg-opacity-50 backdrop-blur">
      <div className="bg-black bg-opacity-70 text-white p-8 rounded-xl w-full max-w-md shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
