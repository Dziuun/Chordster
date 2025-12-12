import { NavLink } from "react-router-dom";

function Button({ type = "nav", destination, children }) {
  return (
    <NavLink to={destination} className="text-2xl">
      {children}
    </NavLink>
  );
}

export default Button;
