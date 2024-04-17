import { WeightIcon } from "lucide-react";
import Image from "next/image";
import Button from "../_components/button";
import getPrice from "../_helpers/get-price";
import getProductById from "../_helpers/get-product";
import getStock from "../_helpers/get-stock";
import ReadMore from "./_components/read-more";
import SizeSelector from "./_components/size-selector";

interface ProductPageProps {
  params: {
    product: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const id = params.product?.split("-")[0];
  const product = getProductById(id);

  if (!product) return <h1>Product not found</h1>;

  const sku = product.skus[0].code;
  const price = getPrice(sku);
  const stock = getStock(sku);
  const sizes = product.skus.map((sku) => sku.name);

  return (
    <div className="flex flex-col items-center gap-2.5">
      {product.image && (
        <Image
          className="max-w-[240px] max-h-[240px] object-contain mix-blend-multiply "
          width={240}
          height={240}
          alt={product.brand}
          src={product.image}
        />
      )}

      <section className="bg-white w-full rounded-t-[3rem] px-4 py-9 grid gap-6 fixed bottom-0">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{product.brand}</h1>
            <span className="text-2xl font-bold text-primary">{price}</span>
          </div>
          <p className="text-sm text-dusty-gray">
            Origin: {product.origin} | Stock: {stock}
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-3">Description</h2>
          <ReadMore text={product.information} />
        </div>

        <div className="overflow-hidden">
          <h2 className="font-bold mb-3">Size</h2>
          <SizeSelector sizes={sizes} />
        </div>

        <div className="mt-5 flex items-center gap-6">
          <Button variant="outline">
            <WeightIcon />
          </Button>
          <Button variant="primary">Add to cart</Button>
        </div>
      </section>
    </div>
  );
}
