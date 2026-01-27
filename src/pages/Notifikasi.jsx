import React from "react";

const Notifikasi = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-80 text-center animate-scale">
        <div className="text-green-500 text-4xl mb-3">✔</div>

        <h2 className="text-lg font-bold">Registrasi Berhasil</h2>
        <p className="text-gray-500 text-sm mt-2">
          Akun kamu berhasil dibuat. Silakan login.
        </p>

        <button
          onClick={onClose}
          className="mt-5 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Ke Halaman Login
        </button>
      </div>
    </div>
  );
};
export default Notifikasi;
