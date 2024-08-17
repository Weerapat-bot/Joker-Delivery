import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../redux/ordersSlice';

const OrderForm = () => {
  const [order, setOrder] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (order) {
      dispatch(addOrder({ id: Date.now(), text: order }));
      setOrder('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        className="p-2 border border-gray-300 rounded"
        placeholder="Enter order details"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Order
      </button>
    </form>
  );
};

export default OrderForm;
