import STOCK_PRICES_MOCK from "@/app/_data/stock-price";
import { NextResponse } from "next/server";

interface StockPriceRouteParams {
  params: {
    sku: string;
  };
}

export async function GET(
  _request: Request,
  { params }: StockPriceRouteParams
) {
  try {
    const data = STOCK_PRICES_MOCK[Number(params.sku)];

    if (data) {
      return NextResponse.json({ message: "OK", data }, { status: 200 });
    }

    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
