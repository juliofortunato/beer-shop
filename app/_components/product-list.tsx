import { Product as ProductType } from "../_data/products";
import Product from "./product";

interface ProductListProps {
  products: ProductType[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
      {products?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
