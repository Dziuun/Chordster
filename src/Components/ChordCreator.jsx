import styles from "./ChordCreator.module.css";
import guitarStock from "../assets/guitarStock.jpeg";

function ChordCreator() {
  return (
    <div>
      <div className={styles.guitarStock}>
        <img src={guitarStock} />
      </div>
    </div>
  );
}

export default ChordCreator;
