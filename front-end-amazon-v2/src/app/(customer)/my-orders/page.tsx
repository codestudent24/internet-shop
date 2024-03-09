import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import type { Metadata } from "next";
import MyOrders from "./MyOrders";

export const metadata: Metadata = {
  title: 'Favorites',
  ...NO_INDEX_PAGE
}

export default function MyOrdersPage() {
  return <MyOrders />
}