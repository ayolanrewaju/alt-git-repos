import { NavLink } from "react-router-dom";
import { Logo } from "../assets/icons/Logo";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__container container">
        <Logo />
        <div className="nav__links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/repos">Repos</NavLink>
          <NavLink to="/forbidden" className="error">Error! DO NOT CLICK</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar