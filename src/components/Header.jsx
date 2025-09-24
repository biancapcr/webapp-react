import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="site-nav">
      <img
        className="site-nav__logo"
        src="/public/img/film.gif"        
        alt="Logo"
      />
      <NavLink to="/" className="a">Bitflix</NavLink>
    </nav>
  );
}
export default Header;
