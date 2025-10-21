"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductDetailsArea from "@/components/pages/products/product-details/ProductDetailsArea";
import ProductDetailsTab from "@/components/pages/products/product-details/ProductDetailsTab";
import SimilarProduct from "@/components/pages/products/product-details/SimilarProduct";
import UseProducts from "@/hooks/UseProducts";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import { notFound } from "next/navigation";

interface Props {
   productId: string;
}

export default function ProductDetailsClient({ productId }: Props) {
   const { products } = UseProducts();
   const single_product = products.find((item) => String(item.id) === productId);

   if (!single_product) {
      notFound();
   }

   return (
      <Wrapper>
         <HeaderThree />
         <main className="main-area fix">
            <Breadcrumb title="Product Details" sub_title="Product Details" />
            <ProductDetailsArea single_product={single_product} />
            <ProductDetailsTab />
            <SimilarProduct />
         </main>
         <FooterOne />
      </Wrapper>
   );
}
