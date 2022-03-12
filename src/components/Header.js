import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={classes.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={classes.active}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
