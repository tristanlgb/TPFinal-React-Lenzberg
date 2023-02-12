import { useContext, createContext, useState } from "react";
import React from "react";

const initialState = {
  items: [],
  isOpen: false,
  addItemToCart: () => {},
  getNumberOfItems: () => {},
  openCart: () => {},
  closeCart: () => {},
  updateCart: () => {},
  deleteCartItem: () => {},
  emptyCart: () => {},
};
const CartContext = createContext(initialState);

const CartState = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenCart = () => {
    setIsOpen(true);
  };
  const handleCloseCart = () => {
    setIsOpen(false);
  };
  const handleAddItemToCart = (item, quantity) => {
    const temp = [...items];

    const found = temp.find((product) => product.id === item.id);

    if (found) {
      found.quantity += quantity;
    } else {
      item.quantity = quantity;
      temp.push(item);
    }
    setItems([...temp]);
  };
  const handleNumberOfItems = () => {
    const total = items.length;
    return total;
  };
  const handleDeleteCartItem = (id) => {
    const temp = [...items];
    const found = temp.find((product) => product.id === id);
    const index = temp.indexOf(found);
    if (found) {
      temp.splice(index, 1);
    }
    setItems([...temp]);
  };
  const handleUpdateCartItemQty = (id, quantity) => {
    const temp = [...items];
    const found = temp.find((product) => product.id === id);

    if (found) {
      found.quantity = quantity;
    }
    setItems([...temp]);
  };
  const handleEmptyCart = () => {
    setItems([]);
  };
  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItemToCart: handleAddItemToCart,
        getNumberOfItems: handleNumberOfItems,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        updateCart: handleUpdateCartItemQty,
        deleteCartItem: handleDeleteCartItem,
        emptyCart: handleEmptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

export const useCartContext = () => {
  return useContext(CartContext);
};
