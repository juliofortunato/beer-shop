import STOCK_PRICES_MOCK from "../_data/stock-price";

export default function getStock(sku: number | string): number {
  return STOCK_PRICES_MOCK[Number(sku)].stock;
}
