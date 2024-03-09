'use client'

import OrderService from "@/services/order.service"
import Heading from "@/ui/Heading"
import { ConvertPrice } from "@/utils/convertPrice"
import { useQuery } from "@tanstack/react-query"

export default function MyOrders() {
  const { data: orders } = useQuery({
    queryKey: ['my orders'],
    queryFn: () => OrderService.getAll(),
    select: ({ data }) => data
  })

  return (
    <>
      <Heading>My orders</Heading>
      <section>
        {orders?.length ? (
        orders?.map(order => (
          <div key={order.id} className="bg-white shadow flex gap-10 p-7 my-7 rounded-lg">
            <span>#{order.id}</span>
            <span>{order.status}</span>
            <span>{new Date(order.createdAt).toLocaleDateString('ru-Ru')}</span>
            <span>{ConvertPrice(order.total)}</span>
          </div>
        ))
        ) : (
          <div className="bg-white shadow p-7 my-7 rounded-lg">Order not found!</div>
        )}
      </section>
    </>
  )
}