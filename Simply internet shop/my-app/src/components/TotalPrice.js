/* Import data */
import React from 'react';

export default function TotalPrice({ total }) {
  return (
    <div className="total-price">
      <h3>Total price: ${total.toFixed(2)}</h3> 
    </div>
  );
}
