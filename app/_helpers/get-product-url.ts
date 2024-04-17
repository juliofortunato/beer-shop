import { Product } from "../_data/products";

export default function getProductURL(product: Product) {
  const id = product.id;
  const slug = product.brand
    .toLowerCase() // Convert the string to lowercase
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, "") // Remove non-alphanumeric characters except dashes
    .replace(/-{2,}/g, "-") // Replace consecutive dashes with a single dash
    .replace(/^-|-$/g, ""); // Remove dashes from the start and end of the string

  return `/${id}-${slug}`;
}
