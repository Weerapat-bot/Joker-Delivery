import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrderItems, removeOrder, clearOrder } from '../redux/orderSlice';

const OrderList = () => {
  const items = useSelector(selectOrderItems);
  const dispatch = useDispatch();

  const handleRemoveOrder = (id) => {
    dispatch(removeOrder(id));
  };

  const handleClearOrder = () => {
    dispatch(clearOrder());
  };

  const handleBuy = async () => {
    try {
      const orderData = {
        items,
        totalPrice: items.reduce((total, item) => total + item.totalPrice, 0),
      };
  
      const response = await fetch('http://localhost:3001/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Order submission failed: ${errorText}`);
      }
  
      const result = await response.json();
      alert(`Order confirmed! Order ID: ${result.orderId}`);
      dispatch(clearOrder());
    } catch (error) {
      console.error('Order submission error:', error);
      alert('An error occurred: ' + error.message);
    }
  };  

  const totalPrice = items.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-2">Your Order</h2>
      {items.length === 0 ? (
        <p>No items in your order.</p>
      ) : (
        <>
          <ul className="list-none">
            {items.map(item => (
              <li key={item.id} className="mb-4 p-4 bg-gray-100 rounded shadow-md flex items-center justify-between">
                <div className="flex-1">
                  <span className="text-xl font-semibold">{item.name}</span>
                  <span className="text-lg">x{item.quantity}</span>
                </div>
                <span className="text-lg">${item.totalPrice.toFixed(2)}</span>
                <button
                  onClick={() => handleRemoveOrder(item.id)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between font-semibold">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleClearOrder}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Clear Order
            </button>
            <button
              onClick={handleBuy}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Buy
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderList;
