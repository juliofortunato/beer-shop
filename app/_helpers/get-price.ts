import STOCK_PRICES_MOCK from "../_data/stock-price";
import formatCurrency from "./format-currency";

export default function getPrice(sku: number | string): string {
  return formatCurrency(STOCK_PRICES_MOCK[Number(sku)].price);
}
