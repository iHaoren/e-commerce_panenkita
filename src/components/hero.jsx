import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-amber-50 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
          Terhubung Langsung dengan Petani Segar
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          PanenKita by HyGroot mempertemukan petani, peternak, dan nelayan
          dengan pembeli yang mencari produk berkualitas tinggi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/buyer/home"
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-semibold"
          >
            <i className="ri-shopping-bag-line mr-2"></i>Belanja Produk
          </a>
          <a
            href="/producer/dashboard"
            className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition font-semibold"
          >
            <i className="ri-farmer-line mr-2"></i>Jual Produk
          </a>
        </div>
      </div>
    </section>
  );
}
