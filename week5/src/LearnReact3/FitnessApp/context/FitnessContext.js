import { createContext, useState, useContext } from "react";

const FitnessContext = createContext();

export const FitnessProvider = ({ children }) => {
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("Strength Training");
  const [repetitions, setRepetitions] = useState("");
  const [goals, setGoals] = useState([]);

  return (
    <FitnessContext.Provider
      value={{
        goal,
        setGoal,
        category,
        setCategory,
        repetitions,
        setRepetitions,
        goals,
        setGoals,
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};

export const useFitness = () => useContext(FitnessContext);
