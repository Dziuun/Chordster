import ChordCreator from "../Components/ChordCreator";
import ChordCreatorUi from "../Components/ChordCreatorUi";
import Logo from "../Components/Logo";
import styles from "./ChordFinderView.module.css";

function ChordFinderView() {
  return (
    <div className={styles.container}>
      <Logo />
      <h2>CHORD NAME</h2>
      <ChordCreator />
      <ChordCreatorUi />
    </div>
  );
}

export default ChordFinderView;
