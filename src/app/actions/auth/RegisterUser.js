"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const RegisterUser = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.usersCollection);

  //   validation
  const { email, password } = payload;
  if (!email || !password) {
    return null;
  }
  const user = await userCollection.findOne({ email });
  if (!user) {
    const hashPassword = await bcrypt.hash(password, 10);
    payload.password = hashPassword;
    const result = await userCollection.insertOne(payload);
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  }
  return null;
};
