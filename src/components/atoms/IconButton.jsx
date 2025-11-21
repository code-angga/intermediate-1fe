const IconButton = ({ children, ...props }) => {
  return (
    <button {...props} className="absolute right-3 top-2.5 text-gray-400">
      {children}
    </button>
  );
};

export default IconButton;
