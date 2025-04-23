import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
export const FetchMeal = () => {
  const [mealName, setMealName] = useState('');
  const [search, setSearch] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['meal', search],
    queryFn: () =>
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json()),
    enabled: !!search,
  });

  const handleSearch = () => {
    setSearch(mealName);
  };

  if (isError) {
    return <h1>Sorry, there is an error</h1>;
  }

  if (isLoading) {
    return <h1 style={{color:"white"}}>Loading...</h1>;
  }

  return (
    <div className="meal-container">
      <h2>Search Meal</h2>
      <input
        type="text"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {data?.meals?.map((meal) => (
        <div key={meal.idMeal} className="meal-card">
          <h3>{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};
