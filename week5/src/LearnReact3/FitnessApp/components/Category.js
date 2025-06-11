import { useFitness } from "../context/FitnessContext";
import { useTheme } from "../context/ThemeContext";

export default function Category() {
  const { category, setCategory } = useFitness();
  const { theme } = useTheme();

  return (
    <div className="form-group" style={theme}>
      <label>Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Strength Training">Strength Training</option>
        <option value="Cardio">Cardio</option>
        <option value="Yoga">Yoga</option>
        <option value="CrossFit">CrossFit</option>
        <option value="Zumba">Zumba</option>
      </select>
    </div>
  );
}