import React from 'react';

interface IOrderedItemProps {
  name: string;
  image: string;
  price: number;
  addItem: (itemName: string) => void;
}
const OrderedItem: React.FC<IOrderedItemProps> = ({name,image, price, addItem}) => {
  return (
    <div>
      <div className="Item">
        <img
          className="Img"
          src={image}
          alt={name}
          onClick={() => addItem(name)}
        />
        <div className="Item-info">
          <span className="Item-name">{name} </span>
          <span className="Item-name">{price} KGS</span>
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;