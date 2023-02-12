import React from "react";
import Item from "../Item/Item";
import Header from "../Header/Header";
const ItemList = ({ products, category }) => {
  return (
    <>
      <Header showAs="Shadow" />
      <h1 className="products__path">Comprar</h1>

      <div className="products">
        {products &&
          products.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
      </div>
    </>
  );
};

export default ItemList;
