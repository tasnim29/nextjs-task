import { NextResponse } from "next/server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const GET = async () => {
  try {
    const productsCollection = dbConnect(collectionNameObj.productsCollection);
    const products = await productsCollection.find({}).toArray();
    return NextResponse.json({ success: true, data: products });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
};
export const POST = async (req) => {
  try {
    const newData = await req.json();
    const productsCollection = dbConnect(collectionNameObj.productsCollection);
    const result = await productsCollection.insertOne(newData);
    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
};
