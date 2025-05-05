import ChordCreator from "../Components/ChordCreator";
import Logo from "../Components/Logo";
import styles from "./ChordFinderView.module.css";

function ChordFinderView() {
  return (
    <div className={styles.container}>
      <Logo />
      <h2>CHORD NAME</h2>
      <ChordCreator />
      <button>Play</button>
      <button>Add</button>
    </div>
  );
}

export default ChordFinderView;
