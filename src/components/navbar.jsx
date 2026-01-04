import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-emerald-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
            HG
          </div>
          <span className="font-bold text-emerald-700">PanenKita</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-emerald-600"
        >
          <i className="ri-menu-line text-xl"></i>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex gap-4 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 border-b md:border-b-0`}
        >
          <a
            href="/login"
            className="block md:inline px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
          >
            <i className="ri-login-box-line mr-2"></i>Login
          </a>
          <a
            href="/login"
            className="block md:inline px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
          >
            <i className="ri-user-add-line mr-2"></i>Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
