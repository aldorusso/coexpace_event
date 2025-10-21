import { StaticImageData } from "next/image";

import product_1 from "@/assets/img/product/product-2.jpg"
import product_2 from "@/assets/img/product/product.jpg"
import product_3 from "@/assets/img/product/product-3.jpg"
import product_4 from "@/assets/img/product/product-4.jpg"
import product_5 from "@/assets/img/product/product-5.jpg"
import product_6 from "@/assets/img/product/product-6.jpg"
import product_7 from "@/assets/img/product/product-7.jpg"
import product_8 from "@/assets/img/product/product-9.jpg"
import product_9 from "@/assets/img/product/product-8.jpg"

export interface ProductDataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   price: number;
   rating: number;
   category: string;
   color: string;
   offer?: string
   quantity?: number;
}

const product_data: ProductDataType[] = [
   {
      id: 1,
      thumb: product_1,
      title: "Colmi Smart Wathc",
      price: 20,
      rating: 5,
      category: "Bags",
      color: "#cfcfcf"
   },
   {
      id: 2,
      thumb: product_2,
      title: "Apple Air Pods",
      price: 29,
      rating: 5,
      category: "Clothes",
      color: "#4814dc",
      offer: "20%",
   },
   {
      id: 3,
      thumb: product_3,
      title: "Baby Red T-shirt",
      price: 14,
      rating: 4,
      category: "Shoes",
      color: "#abd800"
   },
   {
      id: 4,
      thumb: product_4,
      title: "Ladies Leather Shoulder Bag",
      price: 25,
      rating: 5,
      category: "Shirts",
      color: "#e60606"
   },
   {
      id: 5,
      thumb: product_5,
      title: "Portable Bluetooth Speaker",
      price: 19,
      rating: 3,
      category: "Accessories",
      color: "#fd6d04"
   },
   {
      id: 6,
      thumb: product_6,
      title: "Travel Bag",
      price: 27,
      rating: 2,
      category: "Bags",
      color: "#02c473",
      offer: "10%",
   },
   {
      id: 7,
      thumb: product_7,
      title: "Mibro Smart Watch",
      price: 15,
      rating: 5,
      category: "Clothes",
      color: "#14bcdc"
   },
   {
      id: 8,
      thumb: product_8,
      title: "Official Check Shirt",
      price: 39,
      rating: 5,
      category: "Shoes",
      color: "#fcb428"
   },
   {
      id: 9,
      thumb: product_9,
      title: "Mobile Cover",
      price: 35,
      rating: 4,
      category: "Shirts",
      color: "#28a3fc",
      offer: "30%",
   },
   {
      id: 10,
      thumb: product_7,
      title: "Mibro Smart Watch",
      price: 15,
      rating: 5,
      category: "Clothes",
      color: "#0015d0"
   },
   {
      id: 11,
      thumb: product_8,
      title: "Official Check Shirt",
      price: 39,
      rating: 5,
      category: "Shoes",
      color: "#dc14c8"
   },
   {
      id: 12,
      thumb: product_9,
      title: "Mobile Cover",
      price: 35,
      rating: 4,
      category: "Shirts",
      color: "#28a3fc"
   },
];

export default product_data;