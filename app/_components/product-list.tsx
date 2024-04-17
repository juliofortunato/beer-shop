import PRODUCTS_MOCK from "../_data/products";
import Product from "./product";

export default function ProductList() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
      {PRODUCTS_MOCK.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
