import { FitnessProvider } from "./context/FitnessContext";
import { ThemeProvider } from "./context/ThemeContext";
import Goal from "./components/Goal";
import Category from "./components/Category";
import Repetitions from "./components/Repetitions";
import AddGoal from "./components/AddGoal";
import './FitnessApp.css'

export default function FitnessApp() {
  return (
    <FitnessProvider>
      <ThemeProvider>
        <div className="container">
          <h1>Fitness Goal Tracker</h1>
          <Goal />
          <Category />
          <Repetitions />
          <AddGoal />
        </div>
      </ThemeProvider>
    </FitnessProvider>
  );
}