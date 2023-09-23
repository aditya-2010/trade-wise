import { Bell, ListTodo, Menu } from "lucide-react";
import styles from "./Base.module.css";

function Navbar({ setIsMobile }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Menu
            className={styles.menu}
            onClick={() => setIsMobile((isMobile) => !isMobile)}
          />
        </div>
        <input type="text" placeholder="Search" />
      </div>

      <div className={styles.right}>
        <div className="notifications">
          <Bell />
          {/* <BellDot /> */}
        </div>
        <div className="tasks">
          <ListTodo />
        </div>
        <div className={styles.profile}>
          <img src="https://i.pravatar.cc/300?u=a042" alt="Profile image" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
