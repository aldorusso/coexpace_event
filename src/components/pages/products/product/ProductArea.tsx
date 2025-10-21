"use client";
import UseProducts from "@/hooks/UseProducts";
import { useCallback, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import ReactPaginate from "react-paginate";
import ProductTop from "./ProductTop";
import ProductSidebar from "./ProductSidebar";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { addToWishlist } from "@/redux/features/wishlistSlice";
import { Product } from "@/redux/features/productSlice";

const ProductArea = () => {

   const dispatch = useDispatch();
   const { products, setProducts } = UseProducts();

   const itemsPerPage = 9;
   const [itemOffset, setItemOffset] = useState(0);
   const filteredProducts = products;
   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
   const currentItems = filteredProducts.slice(itemOffset, itemOffset + itemsPerPage);

   const startOffset = itemOffset + 1;
   const endOffset = Math.min(itemOffset + itemsPerPage, products.length);
   const totalItems = filteredProducts.length;

   const handlePageClick = ({ selected }: { selected: number }) => {
      const newOffset = selected * itemsPerPage;
      setItemOffset(newOffset);
   };

   const handleAddToWishlist = useCallback(
      (item: Product) => {
         dispatch(addToWishlist(item));
      },
      [dispatch]
   );

   const handleAddToCart = useCallback(
      (item: Product) => {
         dispatch(addToCart(item));
      },
      [dispatch]
   );

   return (
      <div className="td-product-area pt-140 pb-110">
         <div className="container">
            <div className="row">
               <div className="col-xl-3 col-lg-4">
                  <ProductSidebar setProducts={setProducts} />
               </div>
               <div className="col-xl-9 col-lg-8">
                  <div className="td-product-wrap ml-20 mb-10">
                     <ProductTop
                        startOffset={startOffset}
                        endOffset={Math.min(endOffset, totalItems)}
                        totalItems={totalItems}
                        setProducts={setProducts}
                     />
                     <div className="row">
                        {currentItems.map((item) => (
                           <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                              <div className="td-product-item mb-25">
                                 <div className="td-product-thumb mb-25 p-relative">
                                    <Image className="w-100" src={item.thumb} alt="" />
                                    <div className="td-product-quick-view">
                                       <a onClick={() => handleAddToCart(item)} style={{ cursor: "pointer" }}>
                                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="td-product-icon">
                                             <path d="M2.23047 2.22217H5.19343L7.17862 12.1407C7.24635 12.4817 7.43188 12.7881 7.70273 13.0061C7.97357 13.2241 8.31247 13.3399 8.6601 13.3333H15.8601C16.2077 13.3399 16.5466 13.2241 16.8175 13.0061C17.0883 12.7881 17.2738 12.4817 17.3416 12.1407L18.5268 5.92587H5.93417M8.89714 17.037C8.89714 17.4461 8.56549 17.7777 8.15639 17.7777C7.7473 17.7777 7.41565 17.4461 7.41565 17.037C7.41565 16.6279 7.7473 16.2962 8.15639 16.2962C8.56549 16.2962 8.89714 16.6279 8.89714 17.037ZM17.0453 17.037C17.0453 17.4461 16.7136 17.7777 16.3045 17.7777C15.8954 17.7777 15.5638 17.4461 15.5638 17.037C15.5638 16.6279 15.8954 16.2962 16.3045 16.2962C16.7136 16.2962 17.0453 16.6279 17.0453 17.037Z" stroke="currentColor" strokeWidth="1.22222" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                       </a>
                                       <a onClick={() => handleAddToWishlist(item)} style={{ cursor: "pointer" }} className="td-product-icon"><i className="fa-sharp fa-regular fa-heart"></i></a>
                                       <Link href="#">
                                          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M12.0884 1.11108L15.1611 4.34341M15.1611 4.34341L12.0884 7.57573M15.1611 4.34341H4.40669C3.59176 4.34341 2.8102 4.68395 2.23396 5.29013C1.65771 5.89631 1.33398 6.71846 1.33398 7.57573V9.19189M4.40669 18.8889L1.33398 15.6565M1.33398 15.6565L4.40669 12.4242M1.33398 15.6565H12.0884C12.9034 15.6565 13.6849 15.316 14.2612 14.7098C14.8374 14.1036 15.1611 13.2815 15.1611 12.4242V10.8081" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                       </Link>
                                       <Link href="#"><i className="fa-sharp fa-regular fa-eye"></i></Link>
                                    </div>
                                 </div>
                                 <div className="td-product-content">
                                    <h5 className="td-product-title mb-5"><Link href={`/product-details/${item.id}`}>{item.title}</Link></h5>
                                    <div className="td-product-ratings">
                                       <span><Rating initialValue={item.rating} size={20} readonly={true} /></span>
                                    </div>
                                    <span className="td-product-price">${item.price}.00</span>
                                 </div>
                              </div>
                           </div>
                        ))}
                        <div className="col-12">
                           <div className="td-product-pagenation-wrap text-center pt-45 mb-25">
                              <nav>
                                 <ReactPaginate
                                    breakLabel="..."
                                    nextLabel={<i className="fa-sharp fa-solid fa-arrow-right"></i>}
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    pageCount={totalPages}
                                    previousLabel={<i className="fa-sharp fa-solid fa-arrow-left"></i>}
                                    renderOnZeroPageCount={null}
                                 />
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductArea
