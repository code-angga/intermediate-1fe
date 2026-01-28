const AuthLayout = ({ children }) => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/img/background.jpg)" }}
    >
      <div className="bg-black/70 text-white p-8 rounded-xl w-full max-w-md shadow-lg backdrop-blur">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
