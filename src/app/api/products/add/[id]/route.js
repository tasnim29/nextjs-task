import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params;

  if (!id || id.length !== 24) {
    return NextResponse.json({ success: false, error: "Invalid ID" });
  }

  const productsCollection = await dbConnect(
    collectionNameObj.productsCollection
  );
  const data = await productsCollection.findOne({ _id: new ObjectId(id) });

  return NextResponse.json({ success: true, data });
};
