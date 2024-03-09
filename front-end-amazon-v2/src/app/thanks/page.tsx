import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Heading from "@/ui/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Thanks',
  ...NO_INDEX_PAGE
}

export default function ThanksPage() {
  return <Heading>Thanks!</Heading>
}