import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <header className="header">
    <>
      <h1>Book store CMS</h1>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </>
  </header>
);

export default NavBar;
