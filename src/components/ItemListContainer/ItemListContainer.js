import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../utils/firebaseFetching";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { category } = useParams();

  const fetchProducts = async () => {
    const products = await getAllProducts();
    setItems(products);
    setLoading(false);
  };

  const fetchProductsByCategory = async (cat) => {
    const products = await getProductsByCategory(cat);
    setItems(products);
    setLoading(false);
  };
  useEffect(() => {
    category ? fetchProductsByCategory(category) : fetchProducts();
  }, [category]);

  return <>{loading ? <Loader /> : <ItemList products={items} />}</>;
};

export default ItemListContainer;
