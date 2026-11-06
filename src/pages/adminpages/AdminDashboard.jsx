import { Link } from "react-router-dom";
import { useProducts } from "../../utils/ProductContext";

export default function AdminDashboard() {
  const { products, isLoading } = useProducts();

  const totalProduk = products.length;
  const stokHabis = products.filter((p) => Number(p.stock) === 0).length;
  const totalStok = products.reduce((sum, p) => sum + Number(p.stock), 0);

  const stats = [
    { label: "Total Produk", value: totalProduk },
    { label: "Total Stok", value: totalStok },
    { label: "Stok Habis", value: stokHabis },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">{s.label}</p>
              <p className="text-3xl font-bold text-pink-600">{s.value}</p>
            </div>
          ))}
        </div>
      )}

      <Link to="/admin/products" className="inline-block text-blue-600 hover:underline">
        Kelola produk →
      </Link>
    </div>
  );
}