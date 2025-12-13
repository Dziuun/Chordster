import Button from "../Components/Button";
import PageNav from "../Components/PageNav";

function Homepage() {
  return (
    <>
      <PageNav />
      <main className="bg-zinc-600  ">
        <section className="bg-[url(/guitar_bg.jpg)] bg-cover bg-center before:absolute before:inset-0 before:bg-black/60 h-screen z-0">
          <div className="relative flex flex-col justify-center items-center content-center text-center z-10 h-screen">
            <h1 className="text-5xl text-emerald-50 ">
              Play the music <span className="text-emerald-400">YOU</span> want
              to play!
            </h1>
            <h2 className="text-3xl text-emerald-50 ">
              Store your favorite chords with us!
            </h2>
          </div>
        </section>
        <section className="grid grid-rows-2 grid-cols-2 mt-16 gap-16">
          <div className="justify-self-end self-center w-lg">
            <h2 className="text-3xl text-center text-emerald-50">
              Easy Storage!
            </h2>
            <p className="justify-self-end self-center w-lg text-emerald-50 text-lg mt-4">
              Store the chords you want or discover new ones in one simple app!
              No more bulky chordbooks or handdrawn diagrams. With Chordify You
              can keep all of your chords in a easy to look through fashion,
              ready for Your next jam.
            </p>
          </div>
          <img
            src="/guitar_book.jpg"
            className="max-h-[40vw] self-end rounded-md"
          />
          <img
            src="/guitar_gameplay.jpg"
            className="max-h-[40vw] self-end justify-self-end rounded-md"
          />
          <div className="justify-self-end self-center w-lg">
            <h2 className="text-3xl text-center text-emerald-50">
              Composition Help!
            </h2>
            <p className="justify-self-start self-center w-lg text-emerald-50 text-lg mt-2">
              Can't find the right chord for your composition? With Chordify's
              chord explorer you can easily find a chord suited for your
              composition in seconds!
            </p>
          </div>
        </section>
        <Button
          type="cta"
          destination="login"
          className="place-center mr-auto ml-auto"
        >
          Start exploring right now!
        </Button>
      </main>
    </>
  );
}

export default Homepage;
