import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../store/authContext";

export default function OwnerLayout() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <h2 className="text-xl font-bold p-4 border-b border-gray-700">Owner Panel</h2>
        <nav className="flex-1">
          <ul>
            <li className="p-4 hover:bg-gray-700"><Link to="dashboard">Dashboard</Link></li>
            <li className="p-4 hover:bg-gray-700"><Link to="orders">Orders</Link></li>
            <li className="p-4 hover:bg-gray-700"><Link to="cms">Content Management</Link></li>
            <li className="p-4 hover:bg-gray-700"><Link to="returns">Returns</Link></li>
            <li className="p-4 hover:bg-gray-700"><Link to="coupons">Coupons</Link></li>
            <li className="p-4 hover:bg-gray-700"><Link to="discounts">Discounts</Link></li>
          </ul>
        </nav>
        <button className="p-4 bg-red-600 hover:bg-red-700" onClick={logout}>Logout</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
