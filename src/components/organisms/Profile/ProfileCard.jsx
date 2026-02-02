// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { updateProfile } from "../../../store/authSlice";
// import { FaEdit } from "react-icons/fa";

// export default function ProfileSection() {
//   const dispatch = useDispatch();
//   const { users, currentUser } = useSelector((state) => state.auth);

//   const userData = users.find((u) => u.username === currentUser);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [editUsername, setEditUsername] = useState(false);
//   const [editPassword, setEditPassword] = useState(false);

//   useEffect(() => {
//     if (userData) {
//       setUsername(userData.username);
//       setPassword(userData.password);
//     }
//   }, [userData]);

//   const handleSave = () => {
//     dispatch(
//       updateProfile({
//         oldUsername: currentUser,
//         username,
//         password,
//       }),
//     );

//     setEditUsername(false);
//     setEditPassword(false);
//     alert("Profil berhasil diperbarui ✅");
//   };

//   if (!userData) return null;

//   return (
//     <div className="bg-black px-6 py-10">
//       <div className="w-full mx-auto flex flex-col md:flex-row gap-6">
//         <div className="flex-1 bg-black p-6 rounded-xl">
//           <h2 className="text-white text-2xl font-semibold mb-6">
//             Profil Saya
//           </h2>

//           <div className="space-y-5">
//             {/* USERNAME */}
//             <div>
//               <label className="text-sm text-gray-400">Nama Pengguna</label>
//               <div className="relative">
//                 <input
//                   className={`w-full mt-1 rounded-lg px-4 py-2 pr-10 text-white
//                     ${
//                       editUsername
//                         ? "bg-zinc-800 border border-blue-500"
//                         : "bg-zinc-900 border border-zinc-700 cursor-not-allowed"
//                     }`}
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   disabled={!editUsername}
//                 />

//                 <FaEdit
//                   onClick={() => setEditUsername(true)}
//                   className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer
//                     ${
//                       editUsername
//                         ? "text-blue-500"
//                         : "text-gray-400 hover:text-blue-500"
//                     }`}
//                   title="Edit username"
//                 />
//               </div>
//             </div>

//             {/* PASSWORD */}
//             <div>
//               <label className="text-sm text-gray-400">Kata Sandi</label>
//               <div className="relative">
//                 <input
//                   type="password"
//                   className={`w-full mt-1 rounded-lg px-4 py-2 pr-10 text-white
//                     ${
//                       editPassword
//                         ? "bg-zinc-800 border border-blue-500"
//                         : "bg-zinc-900 border border-zinc-700 cursor-not-allowed"
//                     }`}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   disabled={!editPassword}
//                 />

//                 <FaEdit
//                   onClick={() => setEditPassword(true)}
//                   className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer
//                     ${
//                       editPassword
//                         ? "text-blue-500"
//                         : "text-gray-400 hover:text-blue-500"
//                     }`}
//                   title="Edit password"
//                 />
//               </div>
//             </div>

//             <button
//               onClick={handleSave}
//               className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm"
//             >
//               Simpan
//             </button>
//           </div>
//         </div>

//         {/* KANAN */}
//         <div className="w-full md:w-1/2">
//           <div className="bg-gray-600 p-6 rounded-xl h-1/2 flex flex-col justify-between">
//             <div>
//               <h3 className="text-white text-2xl text-center font-semibold mb-2">
//                 Saat ini anda belum berlangganan
//               </h3>
//               <p className="text-gray-200 text-center">
//                 Dapatkan Akses Tak Terbatas Ke Ribuan Film Dan Series kesukaan
//                 kamu!
//               </p>
//             </div>
//             <button className="mt-6 bg-gray-800 hover:bg-gray-700 ml-auto text-white px-6 py-2 rounded-full text-sm">
//               Mulai Berlangganan
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateProfile } from "../../../store/authSlice";
import { FaEdit } from "react-icons/fa";

export default function ProfileSection() {
  const dispatch = useDispatch();
  const { users, currentUser } = useSelector((state) => state.auth);

  const userData = users.find((u) => u.username === currentUser);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [editUsername, setEditUsername] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  // FOTO PROFIL
  const [profileImage, setProfileImage] = useState(
    userData?.photo || "avatar.png",
  );
  const [imageError, setImageError] = useState("");

  useEffect(() => {
    if (userData) {
      setUsername(userData.username);
      setPassword(userData.password);
      setProfileImage(userData.photo || "avatar.png");
    }
  }, [userData]);

  // HANDLE FOTO
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setImageError("Ukuran foto maksimal 2 MB");
      return;
    }

    setImageError("");

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // SAVE PROFIL
  const handleSave = () => {
    dispatch(
      updateProfile({
        oldUsername: currentUser,
        username,
        password,
        photo: profileImage,
      }),
    );

    setEditUsername(false);
    setEditPassword(false);
    alert("Profil berhasil diperbarui ✅");
  };

  if (!userData) return null;

  return (
    <div className="bg-black px-6 py-10">
      <div className="w-full mx-auto flex flex-col md:flex-row gap-6">
        {/* KIRI */}
        <div className="flex-1 bg-black p-6 rounded-xl">
          <h2 className="text-white text-2xl font-semibold mb-6">
            Profil Saya
          </h2>

          {/* FOTO PROFIL */}
          <div className="flex flex-row items-center gap-3 mb-8">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-2 border-zinc-700"
            />
            <div className="flex flex-col gap-1">
              <label className="cursor-pointer w-fit">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span className="bg-zinc-800 hover:bg-zinc-700 border border-blue-600 text-blue-600 px-4 py-1.5 rounded-full text-sm">
                  Ubah Foto
                </span>
              </label>

              <p className="text-md text-gray-200 block"> maksimal 2 MB</p>

              {imageError && (
                <p className="text-xs text-red-500">{imageError}</p>
              )}
            </div>
          </div>

          <div className="space-y-5">
            {/* USERNAME */}
            <div>
              <label className="text-sm text-gray-400">Nama Pengguna</label>
              <div className="relative">
                <input
                  className={`w-full mt-1 rounded-lg px-4 py-2 pr-10 text-white
                    ${
                      editUsername
                        ? "bg-zinc-800 border border-blue-500"
                        : "bg-zinc-900 border border-zinc-700 cursor-not-allowed"
                    }`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={!editUsername}
                />

                <FaEdit
                  onClick={() => setEditUsername(true)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer
                    ${
                      editUsername
                        ? "text-blue-500"
                        : "text-gray-400 hover:text-blue-500"
                    }`}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-400">Kata Sandi</label>
              <div className="relative">
                <input
                  type="password"
                  className={`w-full mt-1 rounded-lg px-4 py-2 pr-10 text-white
                    ${
                      editPassword
                        ? "bg-zinc-800 border border-blue-500"
                        : "bg-zinc-900 border border-zinc-700 cursor-not-allowed"
                    }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={!editPassword}
                />

                <FaEdit
                  onClick={() => setEditPassword(true)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer
                    ${
                      editPassword
                        ? "text-blue-500"
                        : "text-gray-400 hover:text-blue-500"
                    }`}
                />
              </div>
            </div>

            <button
              onClick={handleSave}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm"
            >
              Simpan
            </button>
          </div>
        </div>

        {/* KANAN */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-600 p-6 rounded-xl h-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-2xl text-center font-semibold mb-2">
                Saat ini anda belum berlangganan
              </h3>
              <p className="text-gray-200 text-center">
                Dapatkan Akses Tak Terbatas Ke Ribuan Film Dan Series kesukaan
                kamu!
              </p>
            </div>
            <button className="mt-6 bg-gray-800 hover:bg-gray-700 ml-auto text-white px-6 py-2 rounded-full text-sm">
              Mulai Berlangganan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
