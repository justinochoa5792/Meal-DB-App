import { useState } from "react";
import Axios from "axios";
import "./App.css";

import Header from "./component/Header";

function App() {
  const [term, setTerm] = useState("");
  const [recipe, setRecipe] = useState([]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
    console.log(response.data.meals);
    setRecipe(response.data.meals);
  };

  const renderRecipe = () => {
    return recipe.map((recipes) => {
      return (
        <div>
          <h4>{recipes.strMeal}</h4>
          <img src={recipes.strMealThumb} alt={recipes.strMeal} />
          <div className="food-container">
            <ul>
              <h4>Ingredients</h4>
              <li>{recipes.strIngredient1}</li>
              <li>{recipes.strIngredient2}</li>
              <li>{recipes.strIngredient3}</li>
              <li>{recipes.strIngredient4}</li>
              <li>{recipes.strIngredient5}</li>
              <li>{recipes.strIngredient6}</li>
              <li>{recipes.strIngredient7}</li>
              <li>{recipes.strIngredient8}</li>
              <li>{recipes.strIngredient9}</li>
              <li>{recipes.strIngredient10}</li>
              <li>{recipes.strIngredient11}</li>
              <li>{recipes.strIngredient12}</li>
              <li>{recipes.strIngredient13}</li>
              <li>{recipes.strIngredient14}</li>
              <li>{recipes.strIngredient15}</li>
              <li>{recipes.strIngredient16}</li>
              <li>{recipes.strIngredient17}</li>
              <li>{recipes.strIngredient18}</li>
              <li>{recipes.strIngredient19}</li>
              <li>{recipes.strIngredient20}</li>
            </ul>
            <ul>
              <h4>Measurements</h4>
              <li>{recipes.strMeasure1}</li>
              <li>{recipes.strMeasure2}</li>
              <li>{recipes.strMeasure3}</li>
              <li>{recipes.strMeasure4}</li>
              <li>{recipes.strMeasure5}</li>
              <li>{recipes.strMeasure6}</li>
              <li>{recipes.strMeasure7}</li>
              <li>{recipes.strMeasure8}</li>
              <li>{recipes.strMeasure9}</li>
              <li>{recipes.strMeasure10}</li>
              <li>{recipes.strMeasure11}</li>
              <li>{recipes.strMeasure12}</li>
              <li>{recipes.strMeasure13}</li>
              <li>{recipes.strMeasure14}</li>
              <li>{recipes.strMeasure15}</li>
              <li>{recipes.strMeasure16}</li>
              <li>{recipes.strMeasure17}</li>
              <li>{recipes.strMeasure18}</li>
              <li>{recipes.strMeasure19}</li>
              <li>{recipes.strMeasure20}</li>
            </ul>
          </div>
          <h4>Instructions</h4>
          {recipes.strInstructions}
          <h4>How to Video:</h4>
          <a href={recipes.strYoutube} target="_blank" rel="noreferrer">
            {recipes.strYoutube}
          </a>
          <hr />
        </div>
      );
    });
  };

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          className="searchTerm"
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />
      </form>
      {renderRecipe()}
    </div>
  );
}

export default App;
