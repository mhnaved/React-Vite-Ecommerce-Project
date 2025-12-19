import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <>
    <Navbar />
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About FashyStore
        </h1>

        <p className="text-gray-600 max-w-3xl leading-relaxed">
          FashyStore is a modern eCommerce platform built using React, Vite,
          and Tailwind CSS. Our goal is to provide premium quality products
          with a seamless shopping experience.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
            <p className="text-gray-500 text-sm">
              Carefully curated products that meet high standards.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-500 text-sm">
              Reliable and quick shipping across regions.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
            <p className="text-gray-500 text-sm">
              Industry-grade security for every transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
