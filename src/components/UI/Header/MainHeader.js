import { NavLink } from "react-router-dom";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <header className="header">
            <nav>
              <ul>
                <li>
                  <NavLink to="/welcome">Welcome</NavLink>
                </li>
                <li>
                  <NavLink to="/garage">Garage</NavLink>
                </li>
                <li>
                  <NavLink to="recipe-book">Recipe Book</NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
