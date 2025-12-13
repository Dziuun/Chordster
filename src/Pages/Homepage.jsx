import Button from "../Components/Button";
import PageNav from "../Components/PageNav";

function Homepage() {
  return (
    <main className="bg-gray-200">
      <PageNav />

      <section className="bg-[url(../../public/guitar_bg.jpg)] bg-cover flex-col justify-items-center content-center h-screen ">
        <h1 className="text-5xl text-emerald-50">
          Play the music <span className="text-emerald-400">YOU</span> want to
          play!
        </h1>
        <h2 className="text-3xl text-emerald-50 ">
          Store your favorite chords with us!
        </h2>
      </section>
      <p>
        Store the chords you want or discover new ones in one simple app! No
        more bulky chordbooks or handdrawn diagrams. With Chordify You can keep
        all of your chords in a easy to look through fashion, ready for your
        next jam.
      </p>
      <img src="../../public/guitar_book.jpg" />
      <p>
        Can't find the right chord for your composition? With Chordify's chord
        explorer you can easily find a chord suited for your composition in
        seconds!
      </p>

      <Button type="cta" destination="login">
        Start exploring right now!
      </Button>
    </main>
  );
}

export default Homepage;
