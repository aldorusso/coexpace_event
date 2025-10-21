import ProductDetailsClient from "./ProductDetailsClient";

export const metadata = {
  title: "Product Details Evente - Conference and Event React Next js Template",
};

type Props = {
  params: Promise<{ id: string[] }>;
};

export default async function Page({ params }: Props) {

  const { id } = await params;
  const productId = id[0];

  return (
    <>
      <ProductDetailsClient productId={productId} />
    </>
  )
}