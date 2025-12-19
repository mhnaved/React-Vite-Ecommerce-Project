import { useState } from "react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/product/ProductGrid";
import CartDrawer from "@/components/cart/CartDrawer";
import Footer from "@/components/layout/Footer";
import { useSearch } from "@/context/SearchContext";



export default function Home() {
  const { search } = useSearch();
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <>
      <Navbar/>
      <Hero />
      <ProductGrid
        products={filteredProducts}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />
      <CartDrawer />
      <Footer />
    </>
  );
}
