import { useState } from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

// "productImage": "/images/product_2.jpg",
// "productName": "ABE",
// "description": "",
// "category": "XYC",
// "price": 599,
// "stockQuantity": 30

function Form({ data }) {
  const [productName, setProductName] = useState(data?.productName);

  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="file-input">Select product image:</label>
        <input type="file" id="file-input" />
      </div>

      <div>
        <label htmlFor="product-name">Product Name: </label>
        <input
          type="text"
          id="product-name"
          placeholder="Name..."
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" placeholder="Description..." />
      </div>

      <div>
        <label htmlFor="category">Category: </label>
        <input type="text" id="category" placeholder="Category..." />
      </div>

      <div>
        <label htmlFor="price">Price: </label>
        <input type="number" id="price" placeholder="Price..." />
      </div>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input type="number" id="quantity" placeholder="Quantity..." />
      </div>
      <div>
        <label htmlFor="archive">Archived? </label>
        <input type="checkbox" id="archive" />
      </div>
    </form>
  );
}

Form.propTypes = {
  data: PropTypes.object,
};

export default Form;
