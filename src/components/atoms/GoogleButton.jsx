const GoogleButton = () => {
  return (
    <button className="w-full flex items-center justify-center gap-2 border border-gray-600 py-1 rounded-full hover:bg-gray-800 transition">
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="w-5 h-5"
      />
      <span>Daftar dengan Google</span>
    </button>
  );
};

export default GoogleButton;
