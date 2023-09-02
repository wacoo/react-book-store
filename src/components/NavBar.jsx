import { NavLink } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';
import Head from '../img/head.png';

const NavBar = (props) => {
  const { active } = props;
  const { home, cat } = active;
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo-menu">
          <h1>Book store CMS</h1>
          <ul>
            <li>
              <NavLink style={home} to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink style={cat} to="/categories" target="_blank">
                CATEGORIES
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mask">
          <img src={Head} alt="Head" />
        </div>
      </div>
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
