import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    // menghapus data login
    localStorage.removeItem("login");
    localStorage.removeItem("user");

    alert("Berhasil Keluar");
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogOut}>Keluar</button>
    </div>
  );
};

export default LogoutButton;
