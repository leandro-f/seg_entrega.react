
import { useState } from "react"

import React from "react";
import "./Itemcount.css";

const ItemCount = ({ stock, initial, onadd }) => {
  const [quantity, setQuantity] = React.useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter">
      <button className="button" onClick={decrement}>
        -
      </button>
      <h4 className="number">{quantity}</h4>
      <button className="button" onClick={increment}>
        +
      </button>
      <button
        className="button"
        onClick={() => onadd(quantity)}
        disabled={!stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
