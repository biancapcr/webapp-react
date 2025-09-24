import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="site-nav">
      <img
        className="site-nav__logo"
        src="https://i.pinimg.com/736x/20/89/e8/2089e87ade7c190b1abc3ebc00044a1f.jpg"
        alt="Logo"
      />
      <NavLink to="/" className="a">Home</NavLink>
    </nav>
  );
}
export default Header;
