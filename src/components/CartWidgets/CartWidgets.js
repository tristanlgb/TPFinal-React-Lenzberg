import React, { useEffect, useState } from "react";
import shopping_bag from "../../shopping-bag.svg";
import { useCartContext } from "../../context/CartState";
const CartWidgets = () => {
  const [total, setTotal] = useState(0);
  const { getNumberOfItems, openCart } = useCartContext();
  const handleOpen = () => {
    openCart();
  };
  useEffect(() => {
    const numberOfItems = getNumberOfItems();
    setTotal(numberOfItems);
  }, [getNumberOfItems]);
  return (
    <div className="cart-widgets" onClick={handleOpen}>
      <img
        src={shopping_bag}
        alt="shopping bag"
        className="cart-widgets__shopping-bag"
      />
      <span className="cart-widgets__items-counter">{total}</span>
    </div>
  );
};

export default CartWidgets;
