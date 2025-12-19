import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";

import Home from "@/pages/Home";
import About from "@/pages/About";
import SearchResults from "./pages/SearchResults";

export default function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </CartProvider>
  );
}
