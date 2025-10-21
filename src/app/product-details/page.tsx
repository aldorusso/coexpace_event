import ProductDetails from "@/components/pages/products/product-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Product Details Evente - Conference and Event React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <ProductDetails />
    </Wrapper>
  )
}

export default page