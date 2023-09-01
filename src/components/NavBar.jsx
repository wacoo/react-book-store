import { NavLink } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';

const NavBar = (props) => {
  const { active } = props;
  const { home, cat } = active;
  console.log(home);
  return (
    <header className="header">
      <>
        <h1>Book store CMS</h1>
        <ul>
          <li>
            <NavLink
              style={home}
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              style={cat}
              to="/categories"
              target="_blank"
            >
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </>
    </header>
  );
};

NavBar.propTypes = {
  active: PropTypes.shape({
    home: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavBar;
