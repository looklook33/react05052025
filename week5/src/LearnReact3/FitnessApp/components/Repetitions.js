import { useFitness } from "../context/FitnessContext";
import { useTheme } from "../context/ThemeContext";

export default function Repetitions() {
  const { repetitions, setRepetitions } = useFitness();
  const { theme } = useTheme();

  return (
    <div className="form-group" style={theme}>
      <label>Repetitions</label>
      <input
        type="text"
        value={repetitions}
        onChange={(e) => setRepetitions(e.target.value)}
        placeholder="Enter repetitions"
      />
    </div>
  );
}