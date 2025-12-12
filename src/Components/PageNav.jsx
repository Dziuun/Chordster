import Button from "./Button";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className="flex flex-row justify-between pl-8 pr-8 bg-emerald-400">
      <Logo />
      <div className="flex gap-4 items-center">
        <Button type="nav" destination="about">
          About
        </Button>
        <Button type="cta" destination="login">
          Login
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
