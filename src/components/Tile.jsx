import { Link } from "react-router-dom";
import styles from "./Tiles.module.css";
import rightArrow from "../assets/rightArrow.svg";

// eslint-disable-next-line react/prop-types
function Tile({ tag, children }) {
  return (
    <div className={styles.tile}>
      {children}
      <div>
        <button>
          <Link to={tag}>
            <p>View more</p>
            <img src={rightArrow} alt="Right arrow" />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Tile;
