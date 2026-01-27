const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full bg-[#2A2A2A] hover:bg-slate-700 text-white py-2 rounded-3xl mt-4 cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
