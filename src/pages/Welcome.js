import { Link, useNavigate } from "react-router-dom";
import PageBody from "../components/UI/PageBody";

const Welcome = () => {
  const nav = useNavigate();

  const onRecipeHandler = () => {
    nav("/recipe-book");
  };
  return (
    <PageBody pageTitle="Welcome">
      <Link to="/garage" className="btn btn-primary">
        My Garage
      </Link>

      <button className="ms-2 btn btn-secondary" onClick={onRecipeHandler}>
        Recipe Book
      </button>

      <Link to="/exercise-log" className="ms-2 btn btn-success">
        Exercise Log
      </Link>
    </PageBody>
  );
};

export default Welcome;
