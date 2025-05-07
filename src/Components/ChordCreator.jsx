import styles from "./ChordCreator.module.css";
import guitarStock from "../assets/guitarStock.jpeg";

function ChordCreator() {
  return (
    <div className={styles.chordCreatorContainer}>
      <div className={styles.guitarStock}>
        <img src={guitarStock} />
      </div>
      <div className={styles.stockMap}>
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
        <input className={styles.finger} type="checkbox" />
      </div>
    </div>
  );
}

export default ChordCreator;
