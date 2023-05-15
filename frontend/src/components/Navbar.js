import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="top" className="navbar navbar-dark bg-dark px-3 mb-2">
      <div className="container">
        <Link to="/" className="navbar-brand text-center">
          <img className="brand-img" src="./logo192.png" alt="brand"></img>
        </Link>

        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item px-3">
            <Link className="nav-link" to="/">
              Draft 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tierlist">
              Tierlist
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
