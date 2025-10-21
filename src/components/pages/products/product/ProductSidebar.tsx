"use client"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PriceRange from "./PriceRange";
import { Product, selectProducts } from "@/redux/features/productSlice";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import shop_data from "@/data/ProductData";

import img_1 from "@/assets/img/product/product-sm-4.jpg"
import img_2 from "@/assets/img/product/product-sm-1.jpg"
import img_3 from "@/assets/img/product/product-sm-2.jpg"
import img_4 from "@/assets/img/product/product-sm-3.jpg"

interface FilterCriteria {
   category: string;
   color: string;
}

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   price: number;
}

interface ShopSidebarProps {
   setProducts: (products: Product[]) => void;
}

const recent_post: DataType[] = [
   {
      id: 1,
      img: img_1,
      title: "LED Smart Watch",
      price: 15
   },
   {
      id: 2,
      img: img_2,
      title: "School Bagpack",
      price: 20
   },
   {
      id: 3,
      img: img_3,
      title: "Red T-shirt",
      price: 30
   },
   {
      id: 4,
      img: img_4,
      title: "Check Office Shirt",
      price: 29
   },
];

const ProductSidebar = ({ setProducts }: ShopSidebarProps) => {

   const [categorySelected, setCategorySelected] = useState('');
   const [colorSelected, setColorSelected] = useState('');

   const categoryFilter = useSelector(selectProducts).map(product => product.category);
   const colorFilter = useSelector(selectProducts).map(product => product.color);

   const allCategory = ['All Category', ...new Set(categoryFilter)];
   const allColor = ['All Color', ...new Set(colorFilter)];

   const allProducts = useSelector(selectProducts);

   // Handle category selection
   const handleCategory = (category: string) => {
      setCategorySelected(prevCategory => prevCategory === category ? '' : category);
      filterProducts({ category: category === categorySelected ? '' : category, color: colorSelected });
   };

   // Handle color selection
   const handleColor = (color: string) => {
      setColorSelected(prevColor => prevColor === color ? '' : color);
      filterProducts({ category: categorySelected, color: color === colorSelected ? '' : color });
   };

   const filterProducts = ({ category, color }: FilterCriteria) => {
      let filteredProducts = allProducts;

      if (category && category !== 'All Category') {
         filteredProducts = filteredProducts.filter(product => product.category === category);
      }

      if (color && color !== 'All Color') {
         filteredProducts = filteredProducts.filter(product => product.color === color);
      }

      setProducts(filteredProducts);
   };


   // handle Price
   const maxPrice = shop_data.reduce((max, item) => {
      return item.price > max ? item.price : max;
   }, 0);

   const [priceValue, setPriceValue] = useState([0, maxPrice]);

   useEffect(() => {
      const filterPrice = allProducts.filter(
         (j) => j.price >= priceValue[0] && j.price <= priceValue[1]
      );
      setProducts(filterPrice);
   }, [priceValue, allProducts, setProducts]);


   const handleChanges = (val: number[]) => {
      setPriceValue(val)
   }

   return (
      <div className="td-product-left-sidebar mb-40">
         <div className="td-product-categories-list td-product-bottom-border mb-35 pb-20">
            <div className="td-product-left-title-wrap mb-10 d-flex justify-content-between">
               <div>
                  <h3 className="td-product-left-title">Categories</h3>
                  <span className="td-product-left-border"></span>
               </div>
               <span className="td-product-left-icon"><i className="fa-sharp fa-solid fa-angle-up"></i></span>
            </div>
            <ul>
               {allCategory.map((category, i) => {
                  const categoryCount = category === 'All Category'
                     ? allProducts.length
                     : allProducts.filter(product => product.category === category).length;

                  return (
                     <li key={i} onClick={() => handleCategory(category)}>
                        <a style={{ cursor: "pointer" }}>{category} <span>({categoryCount})</span></a>
                     </li>
                  );
               })}
            </ul>
         </div>
         <div className="td-product-price-filter td-product-bottom-border mb-35 pb-10">
            <div className="td-product-left-title-wrap mb-25 d-flex justify-content-between">
               <div>
                  <h3 className="td-product-left-title">Filter By Price</h3>
                  <span className="td-product-left-border"></span>
               </div>
               <span className="td-product-left-icon"><i className="fa-sharp fa-solid fa-angle-up"></i></span>
            </div>
            <div className="td-product-widget-filter mb-20">
               <div id="slider-range2" className="mb-20">
                  <PriceRange
                     MAX={maxPrice}
                     MIN={0}
                     STEP={1}
                     values={priceValue}
                     handleChanges={handleChanges}
                  />
               </div>
               <div className="td-product-widget-filter-info d-flex align-items-center justify-content-between">
                  <span className="input-range  d-flex align-items-center" onChange={() => handleChanges}>
                     <span className="price-title">Price:</span>
                     ${priceValue[0]} - ${priceValue[1]}
                  </span>
                  <button
                     className="td-product-widget-filter-btn"
                     type="button"
                     onClick={() => {
                        setPriceValue([0, maxPrice]);
                        setProducts(allProducts);
                     }}
                  >
                     Reset
                  </button>
               </div>
            </div>
         </div>
         <div className="td-product-categories-list td-product-bottom-border mb-35 pb-10">
            <div className="td-product-left-title-wrap mb-15 d-flex justify-content-between">
               <div>
                  <h3 className="td-product-left-title">Filter by Color</h3>
                  <span className="td-product-left-border"></span>
               </div>
               <span className="td-product-left-icon"><i className="fa-sharp fa-solid fa-angle-up"></i></span>
            </div>
            <div className="td-product-color-filter d-flex flex-wrap mb-20">
               {allColor.map((color, i) => (
                  <input key={i} onClick={() => handleColor(color)} className="td-checkbox mb-10" style={{ backgroundColor: color }} type="checkbox" />
               ))}
            </div>
         </div>
         <div className="td-product-categories-list">
            <div className="td-product-left-title-wrap mb-15 d-flex justify-content-between">
               <div>
                  <h3 className="td-product-left-title">Best Sellers</h3>
                  <span className="td-product-left-border"></span>
               </div>
               <span className="td-product-left-icon"><i className="fa-sharp fa-solid fa-angle-up"></i></span>
            </div>
            <div className="td-product-best-sellers mb-20">
               {recent_post.map((item) => (
                  <div key={item.id} className="td-product-widget-item mb-25 d-flex align-items-center">
                     <div className="td-product-widget-thumb mr-20">
                        <Image src={item.img} alt="shop" />
                     </div>
                     <div className="td-product-widget-product-content">
                        <h4 className="td-product-widget-title mb-5"><Link href="/product-details">{item.title}</Link></h4>
                        <div className="td-product-widget-rating">
                           <span><i className="fa-sharp fa-solid fa-star"></i></span>
                           <span><i className="fa-sharp fa-solid fa-star"></i></span>
                           <span><i className="fa-sharp fa-solid fa-star"></i></span>
                           <span><i className="fa-sharp fa-solid fa-star"></i></span>
                           <span><i className="fa-sharp fa-solid fa-star"></i></span>
                        </div>
                        <span className="td-product-widget-price">${item.price}.00</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ProductSidebar
