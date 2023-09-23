import { useState } from "react";
import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";
import Modal from "./Modal";
import Form from "./Form";

function ProductCard({ product }) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);

  function closeModal() {
    setArchiveModalOpen(false);
    setDeleteModalOpen(false);
    setFormModalOpen(false);
  }

  return (
    <>
      {deleteModalOpen && (
        <Modal
          title="Delete"
          info="Do you really want to delete?"
          button1Name="Delete"
          button2Name="Cancel"
          button1Action={() => {}}
          button2Action={() => setDeleteModalOpen(false)}
          onAction={closeModal}
        />
      )}
      {archiveModalOpen && (
        <Modal
          title="Archive"
          info="Do you really want to archive this product?"
          button1Name="Archive"
          button2Name="Cancel"
          button1Action={() => {}}
          button2Action={() => setArchiveModalOpen(false)}
          onAction={closeModal}
        />
      )}
      {formModalOpen && (
        <Modal
          title="Edit product"
          button1Name="Submit"
          button2Name="Cancel"
          button2Action={() => setFormModalOpen(false)}
          onAction={closeModal}
        >
          <Form data={product} />
        </Modal>
      )}
      <div className={styles.productCard}>
        <div className={styles.image}>
          {/* TODO: Get image URL from DB */}
          <img src={product.productImage} alt="Product display" />
        </div>
        <div className={styles.details} onClick={() => setFormModalOpen(true)}>
          <h3>{product.productName}</h3>
          <span>
            <p>Stock: {product.stockQuantity}</p>
            <p>₹ {product.price}</p>
          </span>
        </div>

        <div className={styles.hoverActions}>
          <button
            className="btn btn-hover-icon delete"
            onClick={() => setDeleteModalOpen(true)}
          >
            <span className="tooltip">DELETE</span>
            <img src="/delete.svg" alt="Delete bin" />
          </button>
          <button
            className="btn btn-hover-icon archive"
            onClick={() => setArchiveModalOpen(true)}
          >
            <span className="tooltip">ARCHIVE</span>
            <img src="/archive.svg" alt="Archive" />
          </button>
        </div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
