import PRODUCTS_MOCK from "../_data/products";

export default function getProductById(id: string | number) {
  return PRODUCTS_MOCK.find((product) => product.id === Number(id));
}
