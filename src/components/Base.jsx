import { Outlet } from "react-router-dom";
import styles from "./Base.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

function Base() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setIsMobile(window.innerWidth < 1200);
      },
      false
    );
  }, [setIsMobile]);

  return (
    <div className={styles.base}>
      <Sidebar isMobile={isMobile} />
      <Navbar setIsMobile={setIsMobile} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Base;
