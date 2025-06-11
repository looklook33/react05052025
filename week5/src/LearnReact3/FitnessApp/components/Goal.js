import { useFitness } from "../context/FitnessContext";
import { useTheme } from "../context/ThemeContext";

export default function Goal() {
  const { goal, setGoal } = useFitness();
  const { theme } = useTheme();

  return (
    <div className="form-group" style={theme}>
      <label>Fitness Goal</label>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Enter fitness goal"
      />
    </div>
  );
}