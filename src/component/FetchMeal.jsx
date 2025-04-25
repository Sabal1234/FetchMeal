import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export const FetchMeal = () => {
  const [mealName, setMealName] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['meal', mealName],
    queryFn: async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
      return res.json();
    },

  });


  return (
    <div className="meal-container">
      <h2 style={{textAlign:'center'}}>Search Meal</h2>
      <input
        type="text"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
        placeholder="Type to search"
      />

      {isLoading && <h1 style={{ color: 'white' }}>Loading...</h1>}
      <div className='meal-list'>

      {data?.meals?.map((meal) => (
        <div key={meal.idMeal} className="meal-card">
          <h3 style={{textAlign:'center'}}>{meal.strMeal}</h3>
          <img  src={meal.strMealThumb} alt={meal.strMeal} className='Images'  />
          <h4 style={{textAlign:'center'}}>Categoty:{meal.strCategory}</h4>
          {(meal.strTags != null) && <h4 style={{ textAlign: 'center' }}>{meal.strTags}</h4>}
       
         
        </div>

        
      ))} 
      </div>
      </div>
  );
};
