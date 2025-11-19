import { Link } from "react-router";
import '../styles/header.css';

export function Header() {
  return (
    <header>
      <div className="profile">
        <div className="pic"></div>
        <p>John Doe</p>
      </div>

      <nav>
        <Link to="/">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}