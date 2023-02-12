import React from "react";

const Divider = ({ isCart }) => {
  return (
    <div
      className={
        isCart
          ? "divider__container divider__container--cart"
          : "divider__container"
      }
    >
      <div className="divider"></div>
    </div>
  );
};

export default Divider;
