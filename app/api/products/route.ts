import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
     const res = await axios.get("https://fakestoreapi.com/products/1");

     const data = await res.data;

    //  console.log(data)

return Response.json(data, {status:200})
 
  } catch (error) {
     console.error('Error fetching products:', error);

     return new NextResponse("Failed to fetch products", { status: 500 });
  }
}
