import React from 'react';
import Item from "./Item";
import {IItem, IItemState} from "../../types";

interface IItemsProps {
  items: IItem[];
  itemsState: IItemState[];
  deleteItem: (id: string) => void;
}

const Items: React.FC<IItemsProps> = ({items, itemsState, deleteItem}) => {
  return (
     <div className="Order-info">
       {items.map((item) => {
         const itemCount= itemsState.find((index) => index.name === item.name)?.count || 0;
         return (
           <Item
             key={item.id}
             name={item.name}
             count={itemCount}
             price={item.price}
             deleteItem={() => deleteItem(item.id)}
           />
         );
       })}
     </div>
  );
};





export default Items;