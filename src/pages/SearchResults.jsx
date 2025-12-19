import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import { useSearch } from "@/context/SearchContext";

export default function SearchResults() {
  const { search } = useSearch();

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">
          Search results for:{" "}
          <span className="text-indigo-600">"{search}"</span>
        </h2>

        {results.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <ProductGrid products={results} />
        )}
      </div>

      <Footer />
    </>
  );
}
