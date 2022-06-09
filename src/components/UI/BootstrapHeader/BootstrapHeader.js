import { Link, NavLink } from "react-router-dom";

const BootstrapHeader = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="bg-primary p-3 ">
            <ul className="nav justify-content-center  ">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="welcome">
                  Welcome
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="garage">
                  Garage
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="recipe-book">
                  Recipe Book
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-white" to="exercise-log">
                  Exercise Log
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootstrapHeader;
