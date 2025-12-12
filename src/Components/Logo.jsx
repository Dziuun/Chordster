import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Logo() {
  return (
    <Link to="/" className="flex">
      <img src={logo} width="64px" />
      <h1>Chordster</h1>
    </Link>
  );
}

export default Logo;
