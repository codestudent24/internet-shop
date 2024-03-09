import "@/assets/styles/globals.css";
import Providers from "@/providers/Providers";
import { PropsWithChildren } from "react";

import { getSiteUrl } from "@/config/url.config";
import { SITE_NAME } from "@/constants/seo.constants";
import type { Metadata } from "next";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";

import { Golos_Text } from 'next/font/google';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png'
  },
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    emails: ['info@amazon.com']
  }
}

const golos = Golos_Text({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic-ext'],
  display: 'swap',
  style: ['normal'],
  variable: '--font-golos',
})

export default function RootLayout({ children}: PropsWithChildren<unknown>) {
  return <html lang="en" className={golos.variable}>
    <body>
      <Providers>
        <div className="bg-secondary">
          <Header />
          <div
            className="grid"
            style={{
              gridTemplateColumns: '.8fr 4fr'
            }}
          >
            <Sidebar />
            <main className="p-12 pb-52 bg-bg-color rounded-tl-lg">{children}</main>
          </div>
        </div>
      </Providers>
      <div id="modal"></div>
    </body>
  </html>
}