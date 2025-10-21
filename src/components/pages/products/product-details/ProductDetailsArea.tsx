"use client"
import Image, { StaticImageData } from "next/image";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addToCart, decrease_quantity } from "@/redux/features/cartSlice";
import { addToWishlist } from "@/redux/features/wishlistSlice";
import { Product } from "@/redux/features/productSlice";
import { RootState } from "@/redux/store";
import ImagePopup from "@/modals/ImagePopup"

import img_1 from "@/assets/img/product/details/product-2.jpg"
import img_2 from "@/assets/img/product/details/product.jpg"
import img_3 from "@/assets/img/product/details/product-3.jpg"
import img_4 from "@/assets/img/product/details/product-4.jpg"

import imgs_1 from "@/assets/img/product/details/product-sm-3.jpg"
import imgs_2 from "@/assets/img/product/details/product-sm-2.jpg"
import imgs_3 from "@/assets/img/product/details/product-sm.jpg"
import imgs_4 from "@/assets/img/product/details/product-sm-4.jpg"

const navb_data: StaticImageData[] = [img_1, img_2, img_3, img_4];
const navs_data: StaticImageData[] = [imgs_1, imgs_2, imgs_3, imgs_4];


interface ProductData {
   single_product?: Product;
}

const ProductDetailsArea = ({ single_product }: ProductData) => {

   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const productItem = useSelector((state: RootState) => state.cart.cart);
   const dispatch = useDispatch();

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

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
   };

   const totalItems = productItem.find((d_item) => d_item?.id === single_product?.id)

   const [photoIndex, setPhotoIndex] = useState<number>(0);
   const [isOpen, setIsOpen] = useState(false);

   const handleImagePopup = (i: number) => {
      setPhotoIndex(i);
      setIsOpen(true);
   };

   const slides = navb_data.map((img) => ({
      src: img.src,
   }));

   return (
      <>
         <div className="td-product-details-area pt-140 pb-70">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="td-product-details-thumb-wrapper tp-tab d-sm-flex mb-40">
                        <nav>
                           <div className="nav nav-tabs flex-sm-column " id="productDetailsNavThumb" role="tablist">
                              {navs_data.map((img, index) => (
                                 <button key={index} onClick={() => setCurrentImageIndex(index)}
                                    className={`nav-link ${index === currentImageIndex ? 'active' : ''}`}>
                                    <Image className="w-100" src={img} alt="img" />
                                 </button>
                              ))}
                           </div>
                        </nav>
                        <div className="tab-content m-img" id="productDetailsNavContent">
                           {navb_data.map((img, index) => (
                              <div key={index} className={`tab-pane fade ${index === currentImageIndex ? 'show active' : ''}`} id={`item${index}`}>
                                 <div className="td-product-details-nav-main-thumb">
                                    <Image className="w-100" src={img} alt="img" />
                                    <a onClick={() => handleImagePopup(index)} style={{ cursor: "pointer" }} className="popup-image"><i className="flaticon-search"></i></a>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="td-product-details-content-wrap ml-20 mb-40">
                        <h2 className="td-product-details-title mb-20">{single_product?.title ? single_product.title : "iPhone 14 Pro Max Silicone Case"}</h2>
                        <div className="td-product-details-inventory">
                           <div className="td-product-details-ratings-wrapper d-flex align-items-center flex-wrap mb-20">
                              <div className="td-product-details-rating d-flex align-items-center flex-wrap">
                                 <span><i className="fa-sharp fa-solid fa-star"></i></span>
                                 <span><i className="fa-sharp fa-solid fa-star"></i></span>
                                 <span><i className="fa-sharp fa-solid fa-star"></i></span>
                                 <span><i className="fa-sharp fa-solid fa-star"></i></span>
                                 <span><i className="fa-sharp fa-solid fa-star"></i></span>
                              </div>
                              <div className="td-product-details-reviews d-flex align-items-center flex-wrap">
                                 <span>(12 Reviews)</span>
                                 <span className="dvdr">|</span>
                                 <span className="review"><Link href="#">Write a Review</Link></span>
                                 <span className="dvdr">|</span>
                              </div>
                              <div className="td-product-details-stock d-flex align-items-center flex-wrap">
                                 <span className="mr-5">Availability:</span>
                                 <span className="stock">In Stock</span>
                              </div>
                           </div>
                           <div className="td-product-details-price-wrapper mb-20 pb-25 d-flex align-items-center">
                              <span className="td-product-details-price old-price">$29.00</span>
                              <span className="td-product-details-price new-price">$14.00</span>
                              <span className="td-product-details-price discount">-34%</span>
                           </div>
                           <p>Dorem ipsum dolor sit amet consectetur adipiscing eliteiusmo Dorem ipsum dolor sittle  consectetur adipiscing liteiusmod.qua. </p>
                           <div className="td-product-details-length-list mb-30">
                              <ul>
                                 <li>Screen Size 10.9 in</li>
                                 <li>Product Length 9.74 in</li>
                                 <li>Operating System Apple iOS</li>
                                 <li>Product Length 9.74 in</li>
                              </ul>
                           </div>
                           <div className="td-product-details-color">
                              <div className="td-product-details-color-title mb-5">
                                 <span>Select Color:</span>
                                 <span className="color-name">Blue</span>
                              </div>
                              <div className="td-product-color-filter d-flex flex-wrap mb-15">
                                 <input className="td-checkbox" type="checkbox" />
                                 <input className="td-checkbox td-checkbox-2 mb-10" type="checkbox" />
                                 <input className="td-checkbox td-checkbox-3 mb-10" type="checkbox" />
                                 <input className="td-checkbox td-checkbox-4 mb-10" type="checkbox" />
                              </div>
                           </div>
                           <div className="td-product-details-size-wrap">
                              <div className="td-product-details-size-title mb-10 d-flex align-items-center justify-content-between">
                                 <div>
                                    <span>Size:</span>
                                    <span className="size">Medium</span>
                                 </div>
                                 <span className="charts"><a href="#">See Size Chart</a></span>
                              </div>
                              <div className="td-product-details-size-here size-list d-flex flex-wrap mb-25">
                                 <span className="active">S</span>
                                 <span>M</span>
                                 <span>L</span>
                                 <span className="td-disable">XL</span>
                              </div>
                           </div>
                           <div className="td-product-details-fit-wrap mb-30 pb-15">
                              <div className="td-product-details-size-title mb-10 d-flex align-items-center justify-content-between">
                                 <div>
                                    <span>Select Fit :</span>
                                    <span className="size">Slim Fit</span>
                                 </div>
                                 <span className="charts">Find Your Fit</span>
                              </div>
                              <div className="td-product-details-size-2 size-list d-flex flex-wrap mb-20">
                                 <span className="active">Slim</span>
                                 <span>Regular</span>
                                 <span>Ultra</span>
                              </div>
                           </div>
                           <div className="td-product-details-action-wrapper mb-10">
                              <h5 className="td-product-details-action-title mb-15">Quantity :</h5>
                              <div className="td-product-details-action-item-wrapper d-flex flex-wrap align-items-center">
                                 <div className="td-product-details-quantity d-inline-block mr-15 mb-15">
                                    <div className="td-schedule-details-quantity d-inline-block">
                                       <span onClick={() => single_product ? dispatch(addToCart(single_product)) : ""} className="increment">
                                          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M1.21924 7H13.3836" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                             <path d="M7.30176 13V1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                       </span>
                                       <input className="td-quantity-input" type="text" onChange={handleSubmit} value={totalItems?.quantity ? totalItems?.quantity : 1} readOnly />
                                       <span onClick={() => single_product ? dispatch(decrease_quantity(single_product)) : ""} className="decrement">
                                          <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M1 1H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                       </span>
                                    </div>
                                 </div>
                                 <div className="td-product-details-cart-btn-wrap mb-15">
                                    <button onClick={() => single_product ? handleAddToCart(single_product) : ""} className="td-product-details-cart-btn"><i className="flaticon-shopping-cart"></i> Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                           <div className="td-product-details-compare-wrap mb-20 pb-20">
                              <ul>
                                 <li onClick={() => single_product ? handleAddToWishlist(single_product) : ""}>
                                    <span>
                                       <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M18.5177 2.22751C18.0495 1.75909 17.4936 1.38752 16.8817 1.134C16.2699 0.880485 15.6141 0.75 14.9518 0.75C14.2896 0.75 13.6338 0.880485 13.0219 1.134C12.4101 1.38752 11.8542 1.75909 11.386 2.22751L10.4143 3.19917L9.44267 2.22751C8.49695 1.28179 7.21428 0.75049 5.87683 0.75049C4.53939 0.75049 3.25672 1.28179 2.311 2.22751C1.36528 3.17322 0.833984 4.45589 0.833984 5.79334C0.833984 7.13079 1.36528 8.41346 2.311 9.35917L10.4143 17.4625L18.5177 9.35917C18.9861 8.89098 19.3577 8.33509 19.6112 7.72325C19.8647 7.11141 19.9952 6.45562 19.9952 5.79334C19.9952 5.13106 19.8647 4.47527 19.6112 3.86343C19.3577 3.25159 18.9861 2.6957 18.5177 2.22751Z" stroke="currentColor" strokeWidth="1.46667" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </span>
                                    Add to Wishlist
                                    <span className="dvdr">|</span>
                                 </li>
                                 <li>
                                    <span>
                                       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M15.5833 0.916748L19.25 4.58342M19.25 4.58342L15.5833 8.25008M19.25 4.58342H6.41667C5.44421 4.58342 4.51158 4.96972 3.82394 5.65736C3.13631 6.34499 2.75 7.27762 2.75 8.25008V10.0834M6.41667 21.0834L2.75 17.4167M2.75 17.4167L6.41667 13.7501M2.75 17.4167H15.5833C16.5558 17.4167 17.4884 17.0304 18.1761 16.3428C18.8637 15.6552 19.25 14.7225 19.25 13.7501V11.9167" stroke="currentColor" strokeWidth="1.46667" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </span>
                                    Add to Compare
                                    <span className="dvdr">|</span>
                                 </li>
                                 <li>
                                    <span>
                                       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M20.1673 5.50008C20.1673 4.49175 19.3423 3.66675 18.334 3.66675H3.66732C2.65898 3.66675 1.83398 4.49175 1.83398 5.50008M20.1673 5.50008V16.5001C20.1673 17.5084 19.3423 18.3334 18.334 18.3334H3.66732C2.65898 18.3334 1.83398 17.5084 1.83398 16.5001V5.50008M20.1673 5.50008L11.0007 11.9167L1.83398 5.50008" stroke="currentColor" strokeWidth="1.46667" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </span>
                                    Ask about product
                                    <span className="dvdr"></span>
                                 </li>
                              </ul>
                           </div>
                           <div className="td-product-details-query">
                              <div className="td-product-details-query-item d-flex align-items-center">
                                 <span>SKU:</span>
                                 <p className="mb-0">#bd2345</p>
                              </div>
                              <div className="td-product-details-query-item d-flex align-items-center">
                                 <span>Category:</span>
                                 <p className="mb-0">Clothings</p>
                              </div>
                              <div className="td-product-details-query-item d-flex align-items-center">
                                 <span>Tags:</span>
                                 <p className="mb-0">Clothing, T-shirt, Modern</p>
                              </div>
                              <div className="td-product-details-query-item d-flex align-items-center">
                                 <span>Share : </span>
                                 <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                 <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                                 <Link href="#">
                                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M16.3783 0.111328H19.3942L12.8054 7.64181L20.5565 17.8891H14.4875L9.73399 11.6742L4.2949 17.8891H1.27723L8.32453 9.83441L0.888855 0.111328H7.11199L11.4087 5.79201L16.3783 0.111328ZM15.3199 16.084H16.991L6.20396 1.82164H4.41068L15.3199 16.084Z" fill="currentColor" />
                                    </svg>
                                 </Link>
                                 <Link href="#"><i className="fa-brands fa-pinterest-p"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {isOpen && (
            <ImagePopup
               images={slides}
               isOpen={isOpen}
               setIsOpen={setIsOpen}
               photoIndex={photoIndex}
            />
         )}
      </>
   )
}

export default ProductDetailsArea
