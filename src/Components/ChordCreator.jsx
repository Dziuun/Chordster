import { useReducer } from "react";
import styles from "./ChordCreator.module.css";

const initialState = {
  strings: [
    {
      string: "E",
      frets: Array.from({ length: 24 }, (_, i) => ({
        pressed: false,
        muted: false,
      })),
    },
    {
      string: "A",
      frets: Array.from({ length: 24 }, (_, i) => ({
        pressed: false,
        muted: false,
      })),
    },
    {
      string: "D",
      frets: Array.from({ length: 24 }, (_, i) => ({
        pressed: false,
        muted: false,
      })),
    },
    {
      string: "G",
      frets: Array.from({ length: 24 }, (_, i) => ({
        pressed: false,
        muted: false,
      })),
    },
    {
      string: "B",
      frets: Array.from({ length: 24 }, (_, i) => ({
        pressed: false,
        muted: false,
      })),
    },
    {
      string: "e",
      frets: Array.from({ length: 24 }, (_, i) => ({
        pressed: false,
        muted: false,
      })),
    },
  ],
  scroll: 0,
  pressed: [0, 0, 0, 0, 0, 0],
};

function reducer(state, action) {
  switch (action.type) {
    case "fret/pressed": {
      const id = action.payload;
      const stringName = id[0];
      const fretPressed = Number(id.slice(1));
      const stringPressed = state.strings.filter(
        (string) => string.string === stringName
      );
      const location = stringPressed[0].frets[fretPressed];

      console.log(stringPressed[0].frets[fretPressed]);
      return { ...state };
    }
  }
}

function ChordCreator() {
  const [{ strings, scroll }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.chordCreatorContainer}>
      <div className={styles.stockMap}>
        {strings.map((string) => (
          <div className={styles.string}>
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <div
                  className={styles.fret}
                  id={`${string.string}${i + 1 + scroll}`}
                  onClick={(e) =>
                    dispatch({ type: "fret/pressed", payload: e.target.id })
                  }
                >
                  {/* {fret.pressed ? (
                    <span className={styles.finger} id={`E${fret.id}`}></span>
                  ) : (
                    ""
                  )} */}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChordCreator;
