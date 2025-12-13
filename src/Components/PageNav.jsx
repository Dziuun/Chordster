import Button from "./Button";

function NavBar() {
  return (
    <nav className="flex flex-row justify-between pl-8 pr-8 absolute w-screen z-20 pt-4 ">
      <h1 className="text-2xl text-emerald-50">CHORDSTER</h1>
      <div className="flex gap-4 items-center">
        <Button type="nav" destination="about">
          About
        </Button>
        <Button type="cta" destination="login">
          Login
        </Button>
      </div>
    </nav>
  );
}

export default NavBar;
