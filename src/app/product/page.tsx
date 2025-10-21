import Product from "@/components/pages/products/product";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Product Evente - Conference and Event React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <Product />
    </Wrapper>
  )
}

export default page