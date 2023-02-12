import React, { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";
import { useCartContext } from "../../context/CartState";
const ItemCounter = ({
  counter,
  setCounter,
  showAs,
  productQty,
  productId,
}) => {
  const { updateCart } = useCartContext();
  const [cartCounter, setCartCounter] = useState(productQty);

  const handleCartAdd = () => {
    setCartCounter(cartCounter + 1);
    updateCart(productId, cartCounter + 1);
  };
  const handleCartLess = () => {
    setCartCounter(cartCounter - 1);
    updateCart(productId, cartCounter - 1);
  };
  const handleLess = () => {
    counter > 0 && setCounter(counter - 1);
  };
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  if (showAs === "Cart") {
    return (
      <div className="ItemCounter ItemCounter--cart">
        <button
          className="counter__btn counter__btn--cart"
          onClick={handleCartLess}
          disabled={cartCounter === 1 ? true : false}
        >
          <GoDash />
        </button>
        <span className="counter__results counter__results--cart">
          {cartCounter}
        </span>
        <button
          className="counter__btn counter__btn--cart"
          onClick={handleCartAdd}
        >
          <GoPlus />
        </button>
      </div>
    );
  }
  return (
    <div className="ItemCounter">
      <button
        className="counter__btn"
        onClick={handleLess}
        disabled={counter === 1 ? true : false}
      >
        <GoDash />
      </button>
      <span className="counter__results">{counter}</span>
      <button className="counter__btn" onClick={handleAdd}>
        <GoPlus />
      </button>
    </div>
  );
};

export default ItemCounter;
