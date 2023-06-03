import React from 'react';


interface IItemProps {
  name: string,
  count: number,
  price: number,
  deleteItem: () => void,
}

const Item: React.FC<IItemProps> = ({name, count, price, deleteItem}) => {
  return (
    <div className="Ordered-items">
      <span>{name}</span>
      <div className="Ordered-info">
        <span>x{count} {price} KGS</span>
      </div>
      <div className="Delete">
        <button type="button" className="Delete-button" onClick={deleteItem}>X</button>
      </div>
    </div>
  );
};

export default Item;