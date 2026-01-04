import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ProducerDashboard from "./pages/producer/Dashboard";
import BuyerHome from "./pages/buyer/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-emerald-200">
        <Navbar />
        <Hero />
        <main className="container mx-auto px-4 py-10">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h3 className="text-xl font-bold mb-6">Penawaran Menarik</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {/* Card produk */}
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div
                        key={item}
                        className="bg-amber-600 border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer"
                      >
                        <div className="h-40 bg-gray-100 flex items-center justify-center text-4xl">
                          🌱
                        </div>
                        <div className="p-3">
                          <p className="text-sm text-gray-800 line-clamp-2">
                            Sayur Segar Organik - Paket Panen {item}
                          </p>
                          <p className="font-bold mt-2">Rp 15.000</p>
                          <p className="text-xs text-gray-400 mt-1">Sidoarjo</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/producer/dashboard" element={<ProducerDashboard />} />
            <Route path="/buyer/home" element={<BuyerHome />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
