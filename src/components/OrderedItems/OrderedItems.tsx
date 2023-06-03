import React from 'react';
import {IItem, IItemState} from "../../types";
import OrderedItem from "./OrderedItem";

interface IOrderItemsProps {
  items: IItem[];
  itemsState: IItemState[];
  addItem: (itemName: string) => void;
}

const OrderedItems: React.FC<IOrderItemsProps> = ({items, itemsState, addItem}) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <OrderedItem
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            addItem={() => addItem(item.name)}
          />
        );
      })}
    </div>
  )

};

export default OrderedItems;