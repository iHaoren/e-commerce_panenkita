import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-emerald-100 border-b border-gray-200">
      <div className="bg-gray-100 text-sm text-gray-500 py-1 px-8 hidden md:flex justify-between">
        <div className="flex gap-4">
          <span className="hover:text-emerald-600 cursor-pointer">Tentang PanenKita</span>
          <span className="hover:text-emerald-600 cursor-pointer">Mitra Panen</span>
        </div>
        <div className="flex gap-4">
          <span className="hover:text-emerald-600 cursor-pointer">Promo</span>
          <span className="hover:text-emerald-600 cursor-pointer">Bantuan</span>
        </div>
      </div>

      {/* bar utama */}
      <div className="container mx-auto px-4 py-3 flex items-center gap-6">
        <h1 className="text-2xl font-extrabold text-emerald-600 tracking-tighter">PanenKita</h1>
        
        <button className="text-sm text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">Kategori</button>

        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Cari sayur segar dari petani..." 
            className="w-full border border-gray-300 rounded-lg py-2 px-10 focus:outline-none focus:border-emerald-500 text-sm"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

        <div className="flex items-center gap-6 text-gray-600">
          <button className="relative">🛒</button>
          <div className="h-6 w-1 bg-gray-300"></div>
          <button className="text-sm font-bold border border-emerald-600 text-emerald-600 px-4 py-1.5 rounded-lg">Masuk</button>
          <button className="text-sm font-bold bg-emerald-600 text-white px-4 py-1.5 rounded-lg shadow-sm">Daftar</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;