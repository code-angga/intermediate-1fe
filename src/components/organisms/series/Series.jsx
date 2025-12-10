import Card from "../../template/Card";
import HomeLayouts from "../../template/HomeLayouts";
import Footer from "../Footer";
import Navbar from "../Navbar";
import GendreDropdown from "./GendreDropdown";

const Series = () => {
  return (
    <div>
      <Navbar />
      <GendreDropdown />
      <Card />
      <Footer />
    </div>
  );
};

export default Series;
