import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <header className="header">
    <>
      <h1>Book store</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </>
  </header>
);

export default NavBar;
