import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #eee" }}>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
}
