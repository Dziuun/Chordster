import { useState } from "react";
import styles from "./ChordCreator.module.css";

function ChordCreator() {
  const [curFingers, setCurFingers] = useState([]);

  const [stringE, setStringE] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      pressed: false,
    }))
  );

  const [stringA, setStringA] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      pressed: false,
    }))
  );

  const [stringD, setStringD] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      pressed: false,
    }))
  );

  const [stringG, setStringG] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      pressed: false,
    }))
  );

  const [stringB, setStringB] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      pressed: false,
    }))
  );

  const [stringe, setStringe] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      pressed: false,
    }))
  );

  function handleClick(e) {
    // if (curFingers.length > 5) return;

    const id = +e.target.id.slice(1, 2);

    const baseNote = e.target.id.slice(0, 1);

    console.log(id, baseNote);

    switch (baseNote) {
      case "E":
        setStringE((prev) =>
          prev.map((fret) =>
            fret.id === id ? { ...fret, pressed: !fret.pressed } : fret
          )
        );
        break;

      case "A":
        setStringA((prev) =>
          prev.map((fret) =>
            fret.id === id ? { ...fret, pressed: !fret.pressed } : fret
          )
        );
        break;

      case "D":
        setStringD((prev) =>
          prev.map((fret) =>
            fret.id === id ? { ...fret, pressed: !fret.pressed } : fret
          )
        );
        break;

      case "G":
        setStringG((prev) =>
          prev.map((fret) =>
            fret.id === id ? { ...fret, pressed: !fret.pressed } : fret
          )
        );
        break;

      case "B":
        setStringB((prev) =>
          prev.map((fret) =>
            fret.id === id ? { ...fret, pressed: !fret.pressed } : fret
          )
        );
        break;

      case "e":
        setStringe((prev) =>
          prev.map((fret) =>
            fret.id === id ? { ...fret, pressed: !fret.pressed } : fret
          )
        );
        break;
    }

    console.log("note sound");
  }

  return (
    <div className={styles.chordCreatorContainer}>
      <div className={styles.stockMap}>
        <div className={styles.string}>
          {stringE.map((fret) => {
            return (
              <div
                className={styles.fret}
                id={`E${fret.id}`}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                {fret.pressed ? (
                  <span className={styles.finger} id={fret.id}></span>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.string}>
          {stringA.map((fret) => {
            return (
              <div
                className={styles.fret}
                id={`A${fret.id}`}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                {fret.pressed ? (
                  <span className={styles.finger} id={fret.id}></span>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.string}>
          {stringD.map((fret) => {
            return (
              <div
                className={styles.fret}
                id={`D${fret.id}`}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                {fret.pressed ? (
                  <span className={styles.finger} id={fret.id}></span>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.string}>
          {stringG.map((fret) => {
            return (
              <div
                className={styles.fret}
                id={`G${fret.id}`}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                {fret.pressed ? (
                  <span className={styles.finger} id={fret.id}></span>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.string}>
          {stringB.map((fret) => {
            return (
              <div
                className={styles.fret}
                id={`B${fret.id}`}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                {fret.pressed ? (
                  <span className={styles.finger} id={fret.id}></span>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.string}>
          {stringe.map((fret) => {
            return (
              <div
                className={styles.fret}
                id={`e${fret.id}`}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                {fret.pressed ? (
                  <span className={styles.finger} id={fret.id}></span>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChordCreator;
