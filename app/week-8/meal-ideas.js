"use client";
import { useEffect, useState } from "react";

// Function to fetch meal ideas based on the main ingredient
const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || []; // Return an empty array if no meals found
};

// Function to fetch detailed recipe for a meal by ID
const fetchMealDetails = async (mealId) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const data = await response.json();
  return data.meals ? data.meals[0] : null; // Return first meal object or null if not found
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Load meal ideas based on the ingredient
  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
  };

  // Load details of a specific meal when selected
  const loadMealDetails = async (mealId) => {
    const mealDetails = await fetchMealDetails(mealId);
    setSelectedMeal(mealDetails);
  };

  useEffect(() => {
    loadMealIdeas();
    setSelectedMeal(null); // Reset selected meal when the ingredient changes
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      {ingredient && <h3>Here are some meal ideas using {ingredient}:</h3>}
      
      {/* Display a list of meal ideas */}
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <button onClick={() => loadMealDetails(meal.idMeal)}>
              {meal.strMeal}
            </button>
          </li>
        ))}
      </ul>

      {/* Display selected meal details */}
      {selectedMeal && (
        <div>
          <h3>{selectedMeal.strMeal}</h3>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} style={{ width: '200px', height: 'auto' }} />

          <h4>Ingredients:</h4>
          <ul>
            {/* Display each ingredient and measure */}
            {Array.from({ length: 20 }).map((_, index) => {
              const ingredient = selectedMeal[`strIngredient${index + 1}`];
              const measure = selectedMeal[`strMeasure${index + 1}`];
              return (
                ingredient ? (
                  <li key={index}>
                    {ingredient} {measure ? `- ${measure}` : ""}
                  </li>
                ) : null
              );
            })}
          </ul>

          <h4>Instructions:</h4>
          <p>{selectedMeal.strInstructions}</p>
        </div>
      )}
    </div>
  );
}
