import { useState } from "react";
import styles from "./ChordCreator.module.css";

function ChordCreator() {
  const [curFingers, setCurFingers] = useState([]);

  function handleClick(e) {
    if (curFingers.length > 5) return;

    setCurFingers([...curFingers, e.target.id]);

    console.log(curFingers);
    console.log("note sound");
  }

  function markFingers() {
    curFingers.map((finger) => {
      return <span>fret</span>;
    });
  }

  return (
    <div className={styles.chordCreatorContainer}>
      <div className={styles.stockMap}>
        <div className={styles.string}>
          <div
            className={styles.finger}
            id="1"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="2"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="3"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="4"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="5"
            onClick={(e) => handleClick(e)}
          ></div>
        </div>
        <div className={styles.string}>
          <div
            className={styles.finger}
            id="1"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="2"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="3"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="4"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="5"
            onClick={(e) => handleClick(e)}
          ></div>
        </div>
        <div className={styles.string}>
          <div
            className={styles.finger}
            id="1"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="2"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="3"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="4"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="5"
            onClick={(e) => handleClick(e)}
          ></div>
        </div>
        <div className={styles.string}>
          <div
            className={styles.finger}
            id="1"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="2"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="3"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="4"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="5"
            onClick={(e) => handleClick(e)}
          ></div>
        </div>
        <div className={styles.string}>
          <div
            className={styles.finger}
            id="1"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="2"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="3"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="4"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="5"
            onClick={(e) => handleClick(e)}
          ></div>
        </div>
        <div className={styles.string}>
          <div
            className={styles.finger}
            id="1"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="2"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="3"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="4"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className={styles.finger}
            id="5"
            onClick={(e) => handleClick(e)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ChordCreator;
