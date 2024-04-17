import PRODUCTS_MOCK from "@/app/_data/products";
import { NextResponse } from "next/server";

interface ProductRouteParams {
  params: {
    id: string;
  };
}

export async function GET(_request: Request, { params }: ProductRouteParams) {
  try {
    const product = PRODUCTS_MOCK.find(
      (product) => product.id === Number(params.id)
    );

    if (product) {
      return NextResponse.json(
        { message: "OK", data: product },
        { status: 200 }
      );
    }

    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
