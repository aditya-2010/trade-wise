import { useEffect, useRef, useState } from "react";
import styles from "./Inventory.module.css";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Form from "../components/Form";

function Inventory() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const productSearch = useRef(null);

  useEffect(() => {
    async function getProductsData() {
      setIsLoading(true);
      const res = await fetch("http://localhost:8000/products");
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
      setIsLoading(false);
    }
    getProductsData();
  }, []);

  useEffect(() => {
    if (filter === "archived")
      setFilteredProducts(products.filter((prod) => prod.archived === true));
    else if (filter === "notArchived")
      setFilteredProducts(products.filter((prod) => prod.archived === false));
    else setFilteredProducts([...products]);
  }, [products, filter]);

  useEffect(() => {
    productSearch.current.focus();
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setFilteredProducts(products);
      return;
    }
    setFilteredProducts(
      products.filter((prod) =>
        prod.productName.toLowerCase().startsWith(e.target.value)
      )
    );
  }

  return (
    <div>
      {formModalOpen && (
        <Modal title="Add new product" onAction={() => setFormModalOpen(false)}>
          <Form />
        </Modal>
      )}
      <div className={styles.inventory}>
        <h2>Inventory</h2>
        <div className={styles.topPanel}>
          <input
            className="searchbar"
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => handleSearch(e)}
            ref={productSearch}
          />
          <span>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All products</option>
              <option value="archived">Archived</option>
              <option value="notArchived">Not archived</option>
            </select>
            <button
              className="btn btn-primary"
              onClick={() => setFormModalOpen(true)}
            >
              Add New Product
            </button>
          </span>
        </div>
        <div className={styles.products}>
          {isLoading ? (
            <Loader />
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Inventory;
