import ProductCard from "./ProductCard";

export default function ProductGrid({
 products = [],   // ✅ default fallback
  categories = [],
  category,
  setCategory,
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between mb-10 gap-4">
        <h2 className="text-3xl font-bold">Featured Products</h2>

        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  c === category
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center text-gray-500 py-20">
          No products found.
        </p>
      )}
    </section>
  );
}
