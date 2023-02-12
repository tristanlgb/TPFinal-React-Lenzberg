import {
  collection,
  doc,
  getDoc,
  getDocs,
  where,
  query,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const productsCollection = collection(db, "products");
const categoriesCollection = collection(db, "categories");
const ordersCollection = collection(db, "orders");

export const getAllProducts = async () => {
  try {
    const request = getDocs(productsCollection);
    const response = await request;
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const docReference = doc(productsCollection, id);
    const request = getDoc(docReference);
    const response = await request;
    const data = response.data();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const categoryFilter = query(
      productsCollection,
      where("category", "==", category)
    );
    const request = getDocs(categoryFilter);
    const response = await request;
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const request = getDocs(categoriesCollection);
    const response = await request;
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addNewOrder = async (order) => {
  const request = addDoc(ordersCollection, order);
  const response = await request;
  const orderID = response.id;
  return orderID;
};
