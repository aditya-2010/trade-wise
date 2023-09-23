import styles from "./Base.module.css";
import { NavLink } from "react-router-dom";
import { AreaChart, Store, Truck, Users2 } from "lucide-react";

function Sidebar({ isMobile }) {
  return (
    <div className={`${styles.sidebar} ${!isMobile ? "active" : ""}`}>
      <div className={styles.logo}>
        {/* <h1>LOGO</h1> */}
        <NavLink to="/">
          <img src="../tradewise-logo.jpg" alt="Tradewise" />
        </NavLink>
      </div>
      <div className={styles.user}>
        <img src="https://i.pravatar.cc/300?u=a042" alt="User face" />
        <h4>Name Lastname</h4>
      </div>
      <ul>
        <li>
          <NavLink to="/app/">
            {/* <img src={dashboardIcon} alt="Dashboard icon" /> Dashboard */}
            <AreaChart color="rgb(99, 115, 129)" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/inventory">
            <Store color="rgb(99, 115, 129)" /> Inventory
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/orders">
            <Truck color="rgb(99, 115, 129)" /> Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/customers">
            <Users2 color="rgb(99, 115, 129)" /> Customers
          </NavLink>
        </li>
      </ul>
      <div className={styles.logout}>
        <button className="btn btn-primary">Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
