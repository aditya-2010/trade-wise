import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import styles from "./Customers.module.css";
import Loader from "../components/Loader";

function Customers() {
  const [customersData, setCustomersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCustomersData() {
      setIsLoading(true);
      const res = await fetch("http://localhost:8000/customers");
      const data = await res.json();
      setCustomersData(data);
      setIsLoading(false);
    }
    getCustomersData();
  }, [setCustomersData]);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className={styles.customers}>
        <h2>Customers</h2>
        {isLoading ? (
          <Loader />
        ) : (
          <Table
            data={customersData}
            cols={["name", "phone", "email", "address"]}
            searchBar={"name"}
          />
        )}
      </div>
    </>
  );
}

export default Customers;
