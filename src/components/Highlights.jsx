import {
  ArrowBigDownDash,
  CircleDollarSign,
  Clock,
  Wallet,
} from "lucide-react";
import styles from "./Highlights.module.css";

function Highlights() {
  return (
    <div className={styles.highlights}>
      <div className={styles.highlightTile}>
        <Wallet color="#3366ff" className={styles.icon} />
        <div>
          <h2>250</h2>
          <p>Sales this month</p>
        </div>
      </div>
      <div className={styles.highlightTile}>
        {/* <img src="./coin.svg" alt="Dollar coin" /> */}
        <CircleDollarSign color="#faad19" className={styles.icon} />
        <div>
          <h2>25000</h2>
          <p>Profit this month</p>
        </div>
      </div>
      <div className={styles.highlightTile}>
        <ArrowBigDownDash color="#0c53b7" className={styles.icon} />
        <div>
          <h2>14</h2>
          <p>Low stock items</p>
        </div>
      </div>
      <div className={styles.highlightTile}>
        <Clock color="#b72136" className={styles.icon} />
        <div>
          <h2>1000</h2>
          <p>Amount pending</p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
