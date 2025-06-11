// import { useState, createContext, useContext } from "react";

// const lightTheme = { background: "white", color: "black" };
// const darkTheme = { background: "black", color: "white" };

// const FitnessContext = createContext(null);
// const ThemeContext = createContext();

// export default function FitnessApp() {
//   const [goal, setGoal] = useState("");
//   const [category, setCategory] = useState("Strength Training");
//   const [repetitions, setRepetitions] = useState("");
//   const [goals, setGoals] = useState([]);
//   const [theme, setTheme] = useState(lightTheme);

//   function toggleTheme() {
//     setTheme(theme === lightTheme ? darkTheme : lightTheme);
//   }

//   return (
//     <FitnessContext.Provider
//       value={{
//         goal,
//         setGoal,
//         category,
//         setCategory,
//         repetitions,
//         setRepetitions,
//         goals,
//         setGoals,
//       }}
//     >
//       <ThemeContext.Provider value={{ theme, toggleTheme }}>
//         <Goal />
//         <Category />
//         <Repetitions />
//         <AddGoal />
//       </ThemeContext.Provider>
//     </FitnessContext.Provider>
//   );
// }

// function Goal() {
//   const { goal, setGoal } = useContext(FitnessContext);
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div style={{ backgroundColor: theme.background, color: theme.color }}>
//       <h1>Fitness Goal Tracker</h1>
//       <div>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//       </div>

//       <label>Fitness Goal</label>
//       <input
//         type="text"
//         value={goal}
//         onChange={(e) => setGoal(e.target.value)}
//         placeholder="Enter fitness goal"
//       />
//     </div>
//   );
// }

// function Category() {
//   const { category, setCategory } = useContext(FitnessContext);
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div style={{ backgroundColor: theme.background, color: theme.color }}>
//       <label>Category</label>
//       <select value={category} onChange={(e) => setCategory(e.target.value)}>
//         <option value="Strength Training">Strength Training </option>
//         <option value="Cardio">Cardio</option>
//         <option value="Yoga">Yoga</option>
//         <option value="CrossFit">CrossFit</option>
//         <option value="Zumba">Zumba</option>
//       </select>
//     </div>
//   );
// }

// function Repetitions() {
//   const { repetitions, setRepetitions } = useContext(FitnessContext);
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div style={{ backgroundColor: theme.background, color: theme.color }}>
//       <label>Repetitions</label>
//       <input
//         type="text"
//         value={repetitions}
//         onChange={(e) => setRepetitions(e.target.value)}
//         placeholder="Enter repetitions"
//       />
//     </div>
//   );
// }

// function AddGoal() {
//   const { goals, setGoals, goal, repetitions, category } =
//     useContext(FitnessContext);
//   const { theme } = useContext(ThemeContext);

//   function handleAddGoal() {
//     if (goal.trim() === "") return;
//     const newGoal = {
//       id: Date.now(),
//       name: goal,
//       category,
//       repetitions,
//       achieved: false,
//     };
//     setGoals((prev) => [...prev, newGoal]);
//   }

//   function handleAchieved(id) {
//     setGoals((prev) =>
//       prev.map((g) => (g.id === id ? { ...g, achieved: true } : g))
//     );
//   }

//   return (
//     <div style={{ backgroundColor: theme.background, color: theme.color }}>
//       <button onClick={handleAddGoal}>Add Goal</button>
//       <ul>
//         {goals.map((g) => {
//           return (
//             <li key={g.id}>
//               {g.name} - <strong>{g.category}</strong> ({g.repetitions})
//               {g.achieved ? (
//                 <span> ✅ Achieved</span>
//               ) : (
//                 <button onClick={() => handleAchieved(g.id)}>
//                   Mark as Achieved
//                 </button>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
