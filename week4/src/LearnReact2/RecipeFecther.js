import { useEffect, useState } from "react";

export default function RecipeFetcher() {
  const [recipeId, setRecipeId] = useState(1);
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState(1);

  function increaseRecipeId() {
    setInput(input + 1);
  }

  const decreasRecipeId = () => {
    setInput(Math.max(1, input - 1));
  };

  const fetchRecipe = async (input) => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://dummyjson.com/recipes/${input}`);
      const data = await res.json();
      setRecipe(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchRecipe(input);
  }, [input]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <input
        type="number"
        value={input}
        max="30"
        min="1"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={fetchRecipe}>Fetch A Recipe</button>
      <button onClick={decreasRecipeId}>Prve Recipe</button>
      <button onClick={increaseRecipeId}>Next Recipe</button>
      <h1>Recipe No.{recipe?.id}</h1>
      <h3>Pizza Name:{recipe?.name}</h3>
      <div>
        <h2>Ingredients: </h2>
        {recipe &&
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        <h2>Instructions:</h2>
        {recipe &&
          recipe.instructions.map((instruction, index) => (
            <ol key={index}>{instruction}</ol>
          ))}
      </div>
    </>
  );
}
