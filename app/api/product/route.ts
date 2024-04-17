import PRODUCTS_MOCK from "@/app/_data/products";
import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  try {
    const data = PRODUCTS_MOCK;

    if (data) {
      return NextResponse.json({ message: "OK", data }, { status: 200 });
    }

    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
