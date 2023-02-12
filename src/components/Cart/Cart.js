import React from "react";
import { useCartContext } from "../../context/CartState";
import { MdOutlineClose } from "react-icons/md";
import Item from "../Item/Item";
import Divider from "../Divider/Divider";
import Overlay from "../Overlay/Overlay";
import { Link } from "react-router-dom";

const Cart = () => {
  const { isOpen, closeCart, items } = useCartContext();

  let subTotal = 0;
  const handleCalcSubTotal = (qty, price) => {
    let itemSubTotal = qty * price;
    subTotal += itemSubTotal;
  };
  const handleClose = () => {
    closeCart();
  };

  return (
    <Overlay show={isOpen}>
      <div className={isOpen ? "cart show" : "cart"}>
        <MdOutlineClose onClick={handleClose} className="cart__close" />
        {items.length === 0 ? (
          <div className="cart__empty">
            <h3 className="empty">Carrito vacio 😥</h3>
            <Link to="/shop" className="cart__go" onClick={handleClose}>
              Ir a comprar a la poketiendita 😺
            </Link>
          </div>
        ) : (
          <div className="cart__content">
            <h3 className="cart__title">Mi carrito 💗</h3>
            <Divider isCart={true} />
            <div className="cart__items">
              {items.map((product) => {
                handleCalcSubTotal(product.quantity, product.price);
                return (
                  <Item showAs="CartItem" product={product} key={product.id} />
                );
              })}
            </div>
            <Divider isCart={true} />
            <div className="flex-row cart__subtotal">
              <h4>Subtotal</h4>
              <span>💰{subTotal}</span>
            </div>
            <Divider isCart={true} />
            <div className="flex-row cart__total">
              <h4>Total</h4>
              <span>US${subTotal}</span>
            </div>
            <Link to="/checkout" className="cart__cta" onClick={handleClose}>
              Finalizar mi compra 🙂
            </Link>
          </div>
        )}
      </div>
    </Overlay>
  );
};

export default Cart;
