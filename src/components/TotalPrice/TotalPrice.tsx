import React from 'react';

interface ITotalPrice {
  getTotalPrice: () => number;
}

const TotalPrice: React.FC<ITotalPrice> = ({getTotalPrice}) => {
  return (
    <div>
      <div className="Total-price">
        <span>Total price: {getTotalPrice()} KGS</span>
      </div>
    </div>

  );
};

export default TotalPrice;