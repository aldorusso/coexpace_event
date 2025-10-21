"use client";
import { selectProducts } from "@/redux/features/productSlice";
import { useSelector } from "react-redux";

const UseProductTwo = () => {
  const products = useSelector(selectProducts);
  return { products };
};

export default UseProductTwo;
