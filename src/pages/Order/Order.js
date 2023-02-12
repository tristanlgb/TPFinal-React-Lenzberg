import React from "react";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { IoReturnUpBack } from "react-icons/io5";
import { useCartContext } from "../../context/CartState";

const Order = ({ orderID }) => {
  const { emptyCart } = useCartContext();
  const handleReturn = () => {
    emptyCart();
  };
  return (
    <>
      <div className="order">
        <h2 className="order__congrats">
          Gracias por comprar en la Poketiendita <GoHeart />
        </h2>
        <h3 className="order__id">
          Tus pokemons son: <span>{orderID}</span>
        </h3>
        <Link to="/shop" className="order__return" onClick={handleReturn}>
          Volver al shop<IoReturnUpBack />
        </Link>
      </div>
    </>
  );
};

export default Order;
