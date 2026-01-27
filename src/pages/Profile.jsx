import React from "react";
import Navbar from "../components/organisms/Navbar";
import ProfileCard from "../components/organisms/Profile/ProfileCard";
import CardProfil from "../components/organisms/Profile/CardProfile";
import Footer from "../components/organisms/Footer";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <ProfileCard />
      <CardProfil />
      <Footer />
    </div>
  );
};

export default Profile;
