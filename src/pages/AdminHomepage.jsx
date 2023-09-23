import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Sidebar from "../components/Sidebar";
import styles from "./AdminHomepage.module.css";
import Highlights from "../components/Highlights";

function AdminHomepage() {
  return (
    <div className={styles.admin}>
      {/* <Sidebar /> */}
      {/* <Navbar /> */}
      <Header />
      <Highlights />
      {/* <Highlights />
      <Tiles /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default AdminHomepage;
