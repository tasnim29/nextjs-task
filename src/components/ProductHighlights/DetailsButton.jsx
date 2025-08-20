"use client";
import Link from "next/link";
import React from "react";

const DetailsButton = ({ productId }) => {
  return (
    <div>
      <Link href={`/products/${productId}`}>View Details</Link>
    </div>
  );
};

export default DetailsButton;
