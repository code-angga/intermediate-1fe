export default function ProfileSection() {
  return (
    <div className="bg-black px-6 py-10">
      <div className="w-full mx-auto flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-black p-6 rounded-xl">
          <h2 className="text-white text-2xl font-semibold mb-6">
            Profil Saya
          </h2>

          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://i.pravatar.cc/80"
              className="w-28 h-28 rounded-full"
              alt="avatar"
            />

            <div>
              <button className="border border-blue-500 cursor-pointer text-blue-500 text-sm px-6 py-2 rounded-full">
                Ubah Foto
              </button>
              <p className="text-xs text-gray-300 mt-1 pl-2.5">Maksimal 2 MB</p>
            </div>
          </div>

          <div className="space-y-4 w-full">
            <div>
              <label className="text-sm text-gray-400">Nama Pengguna</label>
              <input
                className="w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="Angga"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Kata Sandi</label>
              <input
                type="password"
                className="w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="123456"
              />
            </div>

            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 cursor-pointer rounded-full text-sm">
              Simpan
            </button>
          </div>
        </div>

        {/* KANAN */}
        <div className="w-full md:w-1/2 md:self-start">
          <div className="bg-gray-600 p-6 rounded-xl h-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-2xl text-center font-semibold mb-2 ">
                Saat ini anda belum berlangganan
              </h3>
              <p className="text-md text-gray-200 text-center  leading-relaxed">
                Dapatkan Akses Tak Terbatas Ke Ribuan Film Dan Series kesukaan
                kamu!
              </p>
            </div>
            <div className="flex">
              <button className="mt-6 bg-gray-800 hover:bg-gray-700 ml-auto text-white px-6 py-2 cursor-pointer rounded-full text-sm w-fit">
                Mulai Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
