import { Search } from "lucide-react";
// import { useSearch } from "@/context/SearchContext";


export default function Hero() {
    //  const { search, setSearch } = useSearch();

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
              New Collection 2025
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Discover Your <br />
              <span className="text-indigo-600">Perfect Style</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Shop the latest trends in fashion, electronics, and lifestyle.
              Premium quality products curated just for you.
            </p>

     {/* Search Bar */}
            {/* <div className="mt-8 flex max-w-lg">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="button"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-r-xl hover:bg-indigo-700 transition"
              >
                Search
              </button>
            </div> */}

            {/* CTA Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                Shop Now
              </button>
              <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition">
                Explore Categories
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-300 rounded-full blur-2xl opacity-50"></div>

            <img
              src="https://images.unsplash.com/photo-1521334884684-d80222895322"
              alt="Shopping"
              className="relative rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
