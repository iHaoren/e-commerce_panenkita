export default function ProducerSidebar({ active, setActive }) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: "ri-dashboard-line" },
    { id: "products", label: "Produk Saya", icon: "ri-box-3-line" },
    { id: "orders", label: "Pesanan", icon: "ri-shopping-cart-line" },
    { id: "profile", label: "Profil", icon: "ri-user-line" },
  ];

  return (
    <aside className="w-64 bg-emerald-900 text-white p-6 hidden md:block">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center font-bold">
          HG
        </div>
        <span className="font-bold">PanenKita</span>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
              active === item.id ? "bg-emerald-700" : "hover:bg-emerald-800"
            }`}
          >
            <i className={`${item.icon} text-lg`}></i>
            {item.label}
          </button>
        ))}
      </nav>

      <button className="w-full mt-8 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2">
        <i className="ri-logout-box-line"></i>Logout
      </button>
    </aside>
  );
}
