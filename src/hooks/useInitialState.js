import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [ recipes, setRecipes ] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);
  return recipes;
};

export default useInitialState;