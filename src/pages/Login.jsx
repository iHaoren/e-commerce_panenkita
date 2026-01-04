import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [role, setRole] = useState("buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "producer") {
      navigate("/producer/dashboard");
    } else {
      navigate("/buyer/home");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50">
      <Navbar />

      <main className="container mx-auto px-4 py-10 flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2 text-center">
            Login
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Masuk ke akun PanenKita Anda
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Saya adalah:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole("buyer")}
                  className={`p-4 rounded-lg border-2 transition text-center ${
                    role === "buyer"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  <i className="ri-shopping-bag-line text-2xl block mb-2"></i>
                  <span className="text-sm font-semibold">Pembeli</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("producer")}
                  className={`p-4 rounded-lg border-2 transition text-center ${
                    role === "producer"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  <i className="ri-farmer-line text-2xl block mb-2"></i>
                  <span className="text-sm font-semibold">Produsen</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Belum punya akun?{" "}
            <a href="#" className="text-emerald-600 font-semibold">
              Daftar di sini
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
