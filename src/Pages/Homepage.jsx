import Button from "../Components/Button";
import PageNav from "../Components/PageNav";

function Homepage() {
  return (
    <main>
      <PageNav />

      <section>
        <h1>Play the music YOU want!</h1>
        <h2>Store your favorite chords with us!</h2>

        <p>
          Store the chords you want or discover new ones in one simple app! No
          more bulky chordbooks or handdrawn diagrams. With Chordify You can
          keep all of your chords in a easy to look through fashion, ready for
          your next jam.
        </p>

        <p>
          Can't find the right chord for your composition? With Chordify's chord
          explorer you can easily find a chord suited for your composition in
          seconds!
        </p>

        <Button type="cta" destination="login">
          Start exploring right now!
        </Button>
      </section>
    </main>
  );
}

export default Homepage;
