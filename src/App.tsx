import React, {useState} from 'react';
import {IItem, IItemState} from "./types";
import {nanoid} from "nanoid";
import hamburgerImg from "./images/hamburger-img.png";
import cheeseburgerImg from "./images/cheeseburger-img.png";
import friesImg from "./images/fries-img.png";
import coffeeImg from "./images/coffee-img.png";
import teaImg from "./images/tea-img.png";
import colaImg from "./images/cola-img.png";
import './App.css';
import Items from "./components/Items/Items";
import OrderedItems from "./components/OrderedItems/OrderedItems";
import TotalPrice from "./components/TotalPrice/TotalPrice";

const App = () => {

  const ITEMS: IItem[] = [
    {id: nanoid(), name: 'Hamburger', price: 80, image: hamburgerImg},
    {id: nanoid(), name: 'Cheeseburger', price: 50, image: cheeseburgerImg},
    {id: nanoid(), name: 'Fries', price: 60, image: friesImg},
    {id: nanoid(), name: 'Coffee', price: 50, image: coffeeImg},
    {id: nanoid(), name: 'Tea', price: 40, image: teaImg},
    {id: nanoid(), name: 'Cola', price: 70, image: colaImg},
  ];

  const [items, setItems] = useState<IItemState[]>([
    {id: nanoid(), name: 'Hamburger', count: 0},
    {id: nanoid(), name: 'Cheeseburger', count: 0},
    {id: nanoid(), name: 'Fries', count: 0},
    {id: nanoid(), name: 'Coffee', count: 0},
    {id: nanoid(), name: 'Tea', count: 0},
    {id: nanoid(), name: 'Cola', count: 0},
  ]);

  const [orderItems, setOrderItems] = useState<string[]>([]);

 const addItem = (itemName: string) => {
   setItems(prevState => {
     const addedItem = prevState.map((item) => {
       if (item.name === itemName) {
         return {
           ...item,
           count: item.count + 1
         };
       }
       return item
     })
      return addedItem;
   });
   if (orderItems.length === 0) {
     return (
       <>
         <p>Order is empty!</p>
         <p>Please, add some items!</p>
       </>
     )
   } else {
     setOrderItems((prevOrderItems) => [...prevOrderItems, itemName]);
   }
 };

  const getTotalPrice = () => {
    const totalPrice = items.reduce((acc, item) => {
      const itemName = ITEMS.find((index) => index.name === item.name)
      if (itemName) {
        const ingredientsPrice = itemName.price * item.count;
        return acc + ingredientsPrice;
      }
      return acc;
    }, 0)
    return totalPrice;
  };

  const deleteItem = (id: string) => {
    setItems(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <div className="Container">
      <div className="Main-content">
        <div className="Order-block">
          <h1 className="Order-title">Order details:</h1>
          <Items items={ITEMS} itemsState={items} deleteItem={deleteItem} />
          <TotalPrice getTotalPrice={getTotalPrice} />
        </div>
        <div className="Items-block">
          <h1 className="Item-title">Add items</h1>
          <OrderedItems items={ITEMS} itemsState={items} addItem={addItem} />
        </div>
      </div>
    </div>
    );
};

export default App;
