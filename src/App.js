import React from 'react';
import FoodCategories from './components/FoodCategories';
import FoodList from './components/FoodList';
import OrderList from './components/OrderList';
import AdComponent from './components/AdComponent'; // Import the AdComponent

const App = () => {
  return (
    <div className="relative">
      <AdComponent />
      <div className="container mx-auto p-4 relative z-20">
        <FoodCategories />
        <FoodList />
        <OrderList />
      </div>
    </div>
  );
};

export default App;
