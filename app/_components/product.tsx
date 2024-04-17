import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product as ProductType } from "../_data/products";
import getPrice from "../_helpers/get-price";
import getProductURL from "../_helpers/get-product-url";

interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  const productUrl = getProductURL(product);
  const price = getPrice(product.skus[0].code);

  return (
    <Link
      href={productUrl}
      className="bg-white rounded-xl hover:shadow-md odd:rounded-tr-[2rem] even:rounded-tl-[2rem]"
    >
      <div className="p-4 flex flex-col items-center gap-2">
        <h3 className="font-bold">{product.brand}</h3>

        <Image
          className="w-[122px] h-[122px] object-contain"
          width={122}
          height={122}
          alt={product.brand}
          src={product.image}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="font-medium pl-4">{price}</span>

        <button className="bg-primary text-white p-2 rounded-lg rounded-tr-none rounded-bl-none">
          <PlusIcon />
        </button>
      </div>
    </Link>
  );
}
