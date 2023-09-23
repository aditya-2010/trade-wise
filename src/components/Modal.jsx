import styles from "./Modal.module.css";
import PropTypes from "prop-types";

function Modal({
  title = "Title",
  info = "",
  button1Name = "OK",
  button2Name = "Cancel",
  button1Action = () => {},
  button2Action = () => {},
  onAction = () => {},
  children,
}) {
  return (
    <>
      <div className={styles.overlay} onClick={() => onAction()}></div>
      <div className={styles.modal}>
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
        {children}
        <div className={styles.buttons}>
          <button className="btn" onClick={() => button1Action()}>
            {button1Name}
          </button>
          <button className="btn" onClick={() => button2Action()}>
            {button2Name}
          </button>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  button1Name: PropTypes.string,
  button2Name: PropTypes.string,
  button1Action: PropTypes.func,
  button2Action: PropTypes.func,
  onAction: PropTypes.func,
};

export default Modal;
