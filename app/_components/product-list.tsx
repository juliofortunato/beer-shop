import PRODUCTS_MOCK from "../_data/products";
import Product from "./product";

export default function ProductList() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {PRODUCTS_MOCK.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
