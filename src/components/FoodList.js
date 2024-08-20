import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFoodItems } from '../redux/foodSlice';
import { addOrder } from '../redux/orderSlice';

const FoodList = () => {
  const items = useSelector(selectFoodItems);
  const dispatch = useDispatch();

  const handleAddOrder = (item) => {
    dispatch(addOrder(item));
  };

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-2">Joker Menu</h2>
      {items.length === 0 ? (
        <p>No items available for the selected category.</p>
      ) : (
        <ul className="list-none">
          {items.map(item => (
            <li key={item.id} className="mb-4 p-4 bg-gray-100 rounded shadow-md flex items-center">
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded mr-4" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold">{item.name}</span>
                  <span className="text-lg">${item.price.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => handleAddOrder(item)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add to Order
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodList;
