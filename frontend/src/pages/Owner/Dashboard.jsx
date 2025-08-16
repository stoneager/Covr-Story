import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await API.get("/owner/dashboard");
        setStats(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {stats ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">Orders: {stats.ordersCount || 0}</div>
          <div className="p-6 bg-white rounded-2xl shadow">Pending: {stats.pendingOrders || 0}</div>
          <div className="p-6 bg-white rounded-2xl shadow">Revenue: ${stats.revenue || 0}</div>
          <div className="p-6 bg-white rounded-2xl shadow">Monthly Orders: {stats.monthlyOrders || 0}</div>
          <div className="p-6 bg-white rounded-2xl shadow">Returns: {stats.returnedOrders || 0}</div>
        </div>
      ) : (
        <p>Loading stats...</p>
      )}
    </div>
  );
}
