
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const link = ({ isActive }) =>
    `block px-3 py-2 rounded-lg transition ${
      isActive
        ? "bg-pink-100 text-pink-600 font-semibold"
        : "text-gray-600 hover:bg-pink-50"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-pink-50">

      {/* Header */}
      <header className="bg-white border-b-4 border-pink-300 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-pink-500">
            My Admin
          </h1>
          <p className="text-gray-500 text-sm">
            Kelola data aplikasi kamu
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-700">Halo, Esha 👋</span>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 text-white font-bold flex items-center justify-center">
            E
          </div>
        </div>
      </header>

      {/* Sidebar + Isi Halaman */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <aside className="w-52 bg-white p-4 space-y-1 border-r border-pink-100">

          <NavLink to="/admin/dashboard" className={link}>
            Dashboard
          </NavLink>

          <NavLink to="/admin/product" className={link}>
            Product
          </NavLink>

          <NavLink to="/admin/about" className={link}>
            About
          </NavLink>

        </aside>

        {/* Isi Halaman */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>

      </div>

      {/* Footer */}
      <footer className="bg-white text-center text-pink-500 py-4 border-t border-pink-100">
        © 2026 My Admin App — v1.0.0 💗
      </footer>

    </div>
  );
}
