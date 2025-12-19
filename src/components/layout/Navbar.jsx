import {
  ShoppingBag,
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSearch } from "@/context/SearchContext";
import { useNavigate } from "react-router-dom";




export default function Navbar({
  cartCount = 0,
  onCartClick,
  isMenuOpen,
  setIsMenuOpen,
}) {
   const { search, setSearch } = useSearch();
   const navigate = useNavigate();

const handleSearchChange = (e) => {
  e.preventDefault();
  navigate("/search")
}

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl">
              Fashy<span className="text-indigo-600">Store</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-indigo-600 font-medium">
              Home
            </Link>

            <a className="hover:text-indigo-600 font-medium">Shop</a>
            <a className="hover:text-indigo-600 font-medium">Collections</a>
            <Link to="/about" className="hover:text-indigo-600 font-medium">
              About
            </Link>

          </div>

          {/* Search + Icons */}
          <div className="flex items-center gap-4">

            {/* Search Input (Desktop) */}
           
            <div className="hidden md:flex items-center border rounded-lg px-2">
               <form onSubmit={handleSearchChange} className="flex items-center gap-2">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={search}
                
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="px-2 py-1 text-sm focus:outline-none"
              />
                 </form>
            </div>
         

            <User className="h-5 w-5 text-gray-500 cursor-pointer hidden sm:block" />

            <button onClick={onCartClick} className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-500" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="flex items-center border rounded-lg px-2">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="px-2 py-2 text-sm w-full focus:outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
