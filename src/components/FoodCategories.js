import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFoodCategories, setSelectedCategory } from '../redux/foodSlice';

const FoodCategories = () => {
  const categories = useSelector(selectFoodCategories);
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryId) => {
    dispatch(setSelectedCategory(categoryId));
  };

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-2">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map(category => (
          <div 
            key={category.id} 
            className="bg-gray-100 rounded overflow-hidden shadow-md p-4 cursor-pointer hover:bg-gray-200"
            onClick={() => handleCategoryClick(category.id)}
          >
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;
