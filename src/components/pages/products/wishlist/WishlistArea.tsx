'use client'
import Link from "next/link"
import Image from "next/image"
import { useDispatch } from "react-redux";
import { addToCart } from '@/redux/features/cartSlice';
import UseWishlistInfo from '@/hooks/UseWishlistInfo';
import { removeFromWishlist, WishlistProduct } from "@/redux/features/wishlistSlice";

const WishlistArea = () => {

   const { wishlistItems } = UseWishlistInfo();
   const dispatch = useDispatch();

   return (
      <div className="cart__area pt-140 pb-110">
         <div className="container">
            {wishlistItems.length === 0 ? (
               <div className="mb-30">
                  <div className="empty_bag text-center">
                     <p className="py-3">Your Bag is Empty</p>
                     <Link href={"/product"}>
                        <button className="td-btn">Go To Shop</button>
                     </Link>
                  </div>
               </div>
            ) : (
               <div className="row justify-content-center">
                  <div className="col-lg-10">
                     {/* ✅ FIX: Only one main table */}
                     <table className="table cart__table">
                        <thead>
                           <tr>
                              <th className="product__thumb">Images</th>
                              <th className="product__name">Product</th>
                              <th className="product__price">Price</th>
                              <th className="product__quantity">Add To Cart</th>
                              <th className="product__remove">Remove</th>
                           </tr>
                        </thead>
                        <tbody>
                           {wishlistItems.map((item: WishlistProduct) => (
                              <tr key={item.id}>
                                 <td className="product__thumb">
                                    <Link href={`/product-details/${item.id}`}>
                                       <Image src={item.thumb} alt="cart" />
                                    </Link>
                                 </td>
                                 <td className="product__name">
                                    <Link href={`/product-details/${item.id}`}>{item.title}</Link>
                                 </td>
                                 <td className="product__price">${item.price}.00</td>
                                 <td className="product__cart-btn">
                                    <button
                                       onClick={() => dispatch(addToCart(item))}
                                       className="td-btn"
                                    >
                                       Add To Cart
                                    </button>
                                 </td>
                                 <td className="product__remove">
                                    <a
                                       onClick={() => dispatch(removeFromWishlist(item))}
                                       style={{ cursor: "pointer" }}
                                    >
                                       ×
                                    </a>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default WishlistArea;
