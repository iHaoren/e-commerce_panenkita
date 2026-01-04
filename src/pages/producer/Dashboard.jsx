import { useState } from "react";
import ProducerSidebar from "../../components/ProducerSidebar";

const dummyStats = [
  { label: "Produk Aktif", value: "12", icon: "📦", color: "emerald" },
  { label: "Pesanan Masuk", value: "8", icon: "📋", color: "amber" },
  { label: "Penghasilan", value: "Rp 2.5jt", icon: "💰", color: "green" },
];

const dummyOrders = [
  {
    id: 1,
    buyer: "Ibu Siti",
    product: "Sayur Organik",
    quantity: 5,
    status: "Menunggu Konfirmasi",
    date: "2024-01-15",
  },
  {
    id: 2,
    buyer: "Toko Sehati",
    product: "Beras Premium",
    quantity: 50,
    status: "Dalam Pengiriman",
    date: "2024-01-14",
  },
];

export default function ProducerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-gray-50">
      <ProducerSidebar active={activeTab} setActive={setActiveTab} />

      <main className="flex-1 p-4 md:p-8">
        <h1 className="text-3xl font-bold text-emerald-900 mb-8">
          Dashboard Produsen
        </h1>

        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dummyStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                      <p className="text-3xl font-bold text-emerald-700 mt-2">
                        {stat.value}
                      </p>
                    </div>
                    <span className="text-4xl">{stat.icon}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="ri-list-check-2"></i>Pesanan Terbaru
              </h2>
              <div className="space-y-4">
                {dummyOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {order.buyer}
                      </p>
                      <p className="text-sm text-gray-600">
                        {order.product} × {order.quantity}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        order.status === "Menunggu Konfirmasi"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div>
            <button className="mb-6 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition flex items-center gap-2">
              <i className="ri-add-line"></i>Tambah Produk
            </button>
            <p className="text-gray-600">Kelola daftar produk Anda di sini</p>
          </div>
        )}
      </main>
    </div>
  );
}
