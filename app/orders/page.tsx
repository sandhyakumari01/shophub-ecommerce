"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProtectedLayout from "@/components/protectesRoute";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Order = {
  _id: string;
  status: "pending" | "processing" | "delivered" | "cancelled";
  totalAmount: number;
  createdAt: string;
};

function OrdersContent() {
  const user = useSelector((state: any) => state.auth.user);

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);

        // 🔴 Replace with your API
        // const res = await getOrders();

        const mockData: Order[] = [
          {
            _id: "1",
            status: "pending",
            totalAmount: 1200,
            createdAt: new Date().toISOString(),
          },
          {
            _id: "2",
            status: "delivered",
            totalAmount: 499,
            createdAt: new Date().toISOString(),
          },
        ];

        setOrders(mockData);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
          <p className="text-gray-500 text-sm">
            Track your order history and status
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="text-gray-500">Loading orders...</div>
        )}

        {/* EMPTY STATE */}
        {!loading && orders.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center text-gray-500">
              No orders found 😢
            </CardContent>
          </Card>
        )}

        {/* ORDERS LIST */}
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order._id} className="hover:shadow-md transition">
              <CardContent className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">

                {/* LEFT */}
                <div>
                  <h2 className="font-semibold text-gray-800">
                    Order #{order._id}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toDateString()}
                  </p>
                </div>

                {/* MIDDLE */}
                <div className="flex items-center gap-3">
                  <Badge
                    className={
                      order.status === "delivered"
                        ? "bg-green-500"
                        : order.status === "pending"
                          ? "bg-yellow-500"
                          : order.status === "processing"
                            ? "bg-blue-500"
                            : "bg-red-500"
                    }
                  >
                    {order.status}
                  </Badge>

                  <span className="font-medium text-gray-700">
                    ₹{order.totalAmount}
                  </span>
                </div>

                {/* RIGHT */}
                <Button variant="outline">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OrdersPage() {
  return (
    <ProtectedLayout>
      <OrdersContent />
    </ProtectedLayout>
  );
}