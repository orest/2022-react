import logo from "./logo.svg";
import "./App.css";
import Welcome from "./pages/Welcome";
import Garage from "./pages/Garage";
import RecipeBook from "./pages/RecipeBook";
import { Navigate, Route, Routes } from "react-router-dom";
import MainHeader from "./components/UI/Header/MainHeader";
import BootstrapHeader from "./components/UI/BootstrapHeader/BootstrapHeader";
import ExerciseLog from "./pages/ExerciseLog";
import ExerciseLogEdit from "./pages/ExerciseLogEdit";

function App() {
  return (
    <div className="App">
      <BootstrapHeader />

      <Routes>
        <Route path="welcome" element={<Welcome />} />
        <Route path="garage" element={<Garage />} />
        <Route path="recipe-book" element={<RecipeBook />} />
        <Route path="exercise-log" element={<ExerciseLog />} />
        <Route path="exercise-log/:id" element={<ExerciseLogEdit />} />
        <Route path="/" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </div>
  );
}

export default App;
