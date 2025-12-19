import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, isOpen, setIsOpen, updateQty, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}>
      
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`absolute inset-0 bg-black/40 transition ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between">
          <h3 className="font-bold text-lg">Your Cart</h3>
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto flex-1">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <img
                src={item.image}
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">${item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => updateQty(item.id, -1)}>
                    <Minus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQty(item.id, 1)}>
                    <Plus size={14} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
