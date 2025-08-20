import Hero from "@/components/Hero";

import products from "../data/products.json";
import ProductHighlights from "@/components/ProductHighlights/ProductHighlights";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductHighlights products={products}></ProductHighlights>
    </div>
  );
}
