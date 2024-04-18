import { WeightIcon } from "lucide-react";
import Image from "next/image";
import Button from "../_components/button";
import ProductContextProvider from "../_contexts/product/provider";
import { environment } from "../_helpers/environment";
import ProductPricing from "./_components/product-pricing";
import ReadMore from "./_components/read-more";
import SizeSelector from "./_components/size-selector";

interface ProductPageProps {
  params: {
    product: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const id = params.product?.split("-")[0];
  const { apiBaseUrl } = environment;

  const { data: product } = await (
    await fetch(`${apiBaseUrl}/product/${id}`)
  ).json();

  if (!product) return <h1>Product not found</h1>;

  const firstSKU = product.skus[0].code;

  return (
    <ProductContextProvider initialSKU={firstSKU}>
      <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:mt-10 sm:justify-center">
        {product.image && (
          <Image
            className="max-w-[240px] max-h-[240px] object-contain mix-blend-multiply "
            width={240}
            height={240}
            alt={product.brand}
            src={product.image}
          />
        )}

        <section className="bg-white w-full rounded-t-[3rem] px-4 py-9 grid gap-6 fixed bottom-0 sm:relative sm:max-w-[40%]">
          <ProductPricing product={product} />

          <div>
            <h2 className="font-bold mb-3">Description</h2>
            <p className="hidden lg:block text-sm text-dusty-gray">
              {product.information}
            </p>
            <ReadMore text={product.information} />
          </div>

          <div className="overflow-hidden">
            <h2 className="font-bold mb-3">Size</h2>
            <SizeSelector product={product} />
          </div>

          <div className="mt-5 flex items-center gap-6">
            <Button variant="outline">
              <WeightIcon />
            </Button>
            <Button variant="primary">Add to cart</Button>
          </div>
        </section>
      </div>
    </ProductContextProvider>
  );
}
