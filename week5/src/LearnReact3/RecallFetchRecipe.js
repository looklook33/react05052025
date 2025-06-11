import { useState, useEffect } from "react";
const API = "https://dummyjson.com/recipes/";

export default function RecallFetchRecipe() {
  const [id, setId] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});
  
  const fetchRecipe = async () => {
    const res = await fetch(API + id);
    const data = await res.json();
    setRecipe(data);
  };
  const fetchRecipes = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, [recipes]);

  return (
    <>
      <h3>Recall Fetch Recipes</h3>
      {recipes.recipes?.map((recipe) => (
        <Recipe recipe={recipe}/>
      ))}

      <h3>Fetch A Recipe with Instructions</h3>
      <div>
        <input
          type="number"
          value={id}
          max="30"
          min="1"
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={fetchRecipe}>Fetch Recipe</button>
        {recipe && <Recipe recipe={recipe} />}
        <Instructions instructions = {recipe.instructions}/>
      </div>
    </>
  );
}

function Recipe({ recipe }) {
  return (
    <div>
      <p>Recipe No: {recipe.id}</p>
      <p>Recipe Name: {recipe.name}</p>
    </div>
  );
}

function Instructions ({instructions}) {
  return (
       <p>
        Recipe Instructions:
        {instructions?.map((ins, index) => (
          <li key={index}>{ins}</li>
        ))}
      </p>
  )
}
