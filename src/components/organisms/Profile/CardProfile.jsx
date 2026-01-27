import React from "react";
// import Film1 from "../public/img/Frame66.jpg";
// import Film2 from "../../../../public/img/Frame67.jpg";

const Card = () => {
  return (
    <div>
      {/* DAFTAR SAYA */}
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Daftar Saya</h3>
        <span className="text-sm text-gray-400 cursor-pointer">
          Tampilkan Semua
        </span>
      </div>

      <div className="flex gap-4">
        {/* <img src={Film1} alt="" />
        <img src={Film2} alt="" /> */}
        {/* <Card /> */}
      </div>
    </div>
  );
};

export default Card;
