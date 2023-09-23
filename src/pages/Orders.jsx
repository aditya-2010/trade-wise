import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "./Orders.module.css";
import Table from "../components/Table";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function Orders() {
  const [ordersData, setOrdersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getOrdersData() {
      setIsLoading(true);
      const res = await fetch("http://localhost:8000/orders");
      const data = await res.json();
      setOrdersData(data);
      setIsLoading(false);
    }
    getOrdersData();
  }, []);

  return (
    <div>
      <div className={styles.orders}>
        <h2>Orders</h2>
        {isLoading ? (
          <Loader />
        ) : (
          <Table
            data={ordersData}
            cols={[
              "_id",
              "orderDate",
              "items",
              "totalAmount",
              "status",
              "paymentStatus",
            ]}
          />
        )}
      </div>
    </div>
  );
}

export default Orders;
