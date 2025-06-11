import { useFitness } from "../context/FitnessContext";
import { useTheme } from "../context/ThemeContext";

export default function AddGoal() {
  const { goals, setGoals, goal, repetitions, category } = useFitness();
  const { theme } = useTheme();

  function handleAddGoal() {
    if (goal.trim() === "") return;
    const newGoal = {
      id: Date.now(),
      name: goal,
      category,
      repetitions,
      achieved: false,
    };
    setGoals((prev) => [...prev, newGoal]);
  }

  function handleAchieved(id) {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, achieved: true } : g))
    );
  }

  return (
    <div style={theme}>
      <button className="add-button" onClick={handleAddGoal}>
        Add Goal
      </button>
      <div className="goal-list">
        {goals.map((g) => (
          <div className="goal-item" key={g.id}>
            {g.name} - <strong>{g.category}</strong> ({g.repetitions})
            {g.achieved ? (
              <span className="achieved-label">Achieved</span>
            ) : (
              <button className="achieve-button" onClick={() => handleAchieved(g.id)}>
                Mark as Achieved
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}