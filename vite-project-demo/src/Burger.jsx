import React, { useState } from "react";
import Cheese from "./BurgerContent/Cheese";
import Salad from "./BurgerContent/Salad";
import Patties from "./BurgerContent/Patties";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "./Actions";

const Burger = () => {
  const [burgerItem, setBurgerItem] = useState({
    id:0,
    cheese: 0,
    salad: 0,
    patties: 0,
  });

  function handlechangeCheese(e) {
    setBurgerItem({ ...burgerItem, cheese: e.target.value });
  }
  function handlechangePatties(e) {
    setBurgerItem({ ...burgerItem, patties: e.target.value });
  }
  function handlechangeSalad(e) {
    setBurgerItem({ ...burgerItem, salad: e.target.value });
  }

  function handleId(e) {
    setBurgerItem({ ...burgerItem, id: e.target.value });
  }

  ///form submission
  const localArr = JSON.parse(localStorage.getItem("orders")) || [];
  localArr.push(burgerItem);

  ///  useDispatch method
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("orders", JSON.stringify(localArr));
    dispatch(addOrder(burgerItem));
    setBurgerItem(() => ({
      id:0,
      cheese: 0,
      salad: 0,
      patties: 0,
    }));
    
   


  }

  /// for cheese
  let cheeseCnt = burgerItem.cheese;
  let i;
  const cheeseArr = [];
  for (i = 0; i < cheeseCnt; i++) {
    cheeseArr.push(i);
  }

  const newArr = cheeseArr.map((val, index) => {
    return <Cheese />;
  });

  ///for patties
  let pattiesCnt = burgerItem.patties;
  let j;
  const pattiesArr = [];
  for (j = 0; j < pattiesCnt; j++) {
    pattiesArr.push(j);
  }

  const newArr2 = pattiesArr.map((val, index) => {
    return <Patties />;
  });

  // for salad
  let saladCnt = burgerItem.salad;
  let k;
  const saladArr = [];
  for (k = 0; k < saladCnt; k++) {
    saladArr.push(i);
  }

  const newArr3 = saladArr.map((val, index) => {
    return <Salad />;
  });

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" value={burgerItem.id} onChange={handleId} />
        <label htmlFor={burgerItem.cheese}> cheese: </label>
        <input
          type="number"
          value={burgerItem.cheese}
          onChange={handlechangeCheese}
          max={4}
          min={0}
        />
        <label htmlFor="patties"> patties: </label>
        <input
          type="number"
          value={burgerItem.patties}
          onChange={handlechangePatties}
          max={4}
          min={0}
        />
        <label htmlFor="salad"> salad: </label>
        <input
          type="number"
          value={burgerItem.salad}
          onChange={handlechangeSalad}
          max={4}
          min={0}
        />
        <button type="submit" style={{margin:'10px'}}> submit</button>
      </form>

      <div className="bread bread-top">Bread</div>

      {newArr}
      {newArr2}
      {newArr3}

      <div className="bread bread-bottom">Bread</div>
    </div>
  );
};

export default Burger;
