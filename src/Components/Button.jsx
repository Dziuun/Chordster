import { NavLink } from "react-router-dom";

function Button({ type = "nav", destination, children }) {
  if (type === "nav")
    return (
      <NavLink
        to={destination}
        className="text-2xl text-emerald-50  px-4 pb-2 pt-1 text-center"
      >
        {children}
      </NavLink>
    );

  if (type === "cta")
    return (
      <NavLink
        to={destination}
        className="cursor-pointer text-2xl bg-emerald-700 rounded-full px-4 pb-2 pt-1 text-center 
      "
      >
        {children}
      </NavLink>
    );
}

export default Button;
