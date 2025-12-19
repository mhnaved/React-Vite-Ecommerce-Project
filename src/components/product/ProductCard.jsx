import { Heart, Plus, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden border">
      
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:text-red-500">
          <Heart className="h-4 w-4" />
        </button>

        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition"
        >
          Add to cart
        </button>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <span className="text-xs text-indigo-600 font-semibold uppercase">
          {product.category}
        </span>

        <h3 className="font-bold text-gray-900 line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          {product.rating}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="md:hidden p-2 bg-indigo-50 text-indigo-600 rounded-lg"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
