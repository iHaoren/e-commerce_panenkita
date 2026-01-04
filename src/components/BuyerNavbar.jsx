import { useState } from "react";

export default function BuyerNavbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-emerald-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="/"
          className="flex items-center gap-2 font-bold text-emerald-700"
        >
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
            HG
          </div>
          PanenKita
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-emerald-600"
        >
          <i className="ri-menu-line text-xl"></i>
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex gap-6 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 border-b md:border-b-0`}
        >
          <a
            href="#"
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
          >
            <i className="ri-home-line"></i>Beranda
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
          >
            <i className="ri-list-check-2"></i>Pesanan Saya
          </a>
          <a
            href="#"
            className="relative flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
          >
            <i className="ri-shopping-cart-line"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
            Keranjang
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
          >
            <i className="ri-user-line"></i>Profil
          </a>
        </div>
      </div>
    </nav>
  );
}
