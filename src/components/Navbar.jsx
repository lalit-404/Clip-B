import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h4 className="logo">Clip B</h4>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pastes">Pastes</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
