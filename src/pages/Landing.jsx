import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
  {
    id: 1,
    name: "Sayur Segar Organik - Paket Panen",
    price: 15000,
    location: "Sidoarjo",
    image: "🥬",
  },
  {
    id: 2,
    name: "Beras Premium Organik - 5kg",
    price: 85000,
    location: "Malang",
    image: "🌾",
  },
  {
    id: 3,
    name: "Telur Ayam Kampung Segar",
    price: 32000,
    location: "Surabaya",
    image: "🥚",
  },
  {
    id: 4,
    name: "Ikan Segar dari Pantai",
    price: 45000,
    location: "Tuban",
    image: "🐟",
  },
  {
    id: 5,
    name: "Buah Semangka Manis",
    price: 28000,
    location: "Jember",
    image: "🍉",
  },
  {
    id: 6,
    name: "Madu Murni Alami - 500ml",
    price: 65000,
    location: "Probolinggo",
    image: "🍯",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">
            Penawaran Terbaru
          </h2>
          <p className="text-gray-600 mb-8">
            Produk segar langsung dari petani pilihan
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dummyProducts.map((product) => (
              <ProductCard key={product.id} {...product} status="Siap Jual" />
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            Bergabunglah dengan PanenKita
          </h3>
          <p className="text-gray-600 mb-8">
            Mulai berjualan atau berbelanja sekarang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/login"
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
            >
              Login Sekarang
            </a>
            <a
              href="/login"
              className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-white transition"
            >
              Daftar Gratis
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>
            PanenKita by HyGroot © 2024 - Membantu Petani, Peternak & Nelayan
          </p>
        </div>
      </footer>
    </div>
  );
}
