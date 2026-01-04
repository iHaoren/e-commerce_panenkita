import { useState } from "react";
import BuyerNavbar from "../../components/BuyerNavbar";
import ProductCard from "../../components/ProductCard";

const dummyProducts = [
  {
    id: 1,
    name: "Sayur Segar Organik",
    price: 15000,
    location: "Sidoarjo",
    image: "🥬",
    status: "Siap Jual",
  },
  {
    id: 2,
    name: "Beras Premium",
    price: 85000,
    location: "Malang",
    image: "🌾",
    status: "Siap Jual",
  },
  {
    id: 3,
    name: "Telur Ayam Kampung",
    price: 32000,
    location: "Surabaya",
    image: "🥚",
    status: "Siap Jual",
  },
  {
    id: 4,
    name: "Ikan Segar",
    price: 45000,
    location: "Tuban",
    image: "🐟",
    status: "Siap Jual",
  },
  {
    id: 5,
    name: "Buah Semangka",
    price: 28000,
    location: "Jember",
    image: "🍉",
    status: "Panen 3 hari",
  },
  {
    id: 6,
    name: "Madu Murni",
    price: 65000,
    location: "Probolinggo",
    image: "🍯",
    status: "Siap Jual",
  },
];

export default function BuyerHome() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <BuyerNavbar cartCount={cart.length} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
              <i className="ri-search-line"></i>
            </button>
          </div>

          <div className="flex gap-2 flex-wrap">
            {["Semua", "Sayuran", "Buah", "Beras", "Ternak", "Ikan"].map(
              (cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 bg-white border border-emerald-200 text-emerald-700 rounded-lg hover:bg-emerald-50 transition text-sm"
                >
                  {cat}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
