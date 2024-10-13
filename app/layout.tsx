import type { Metadata } from "next"
import "./globals.css"

import { League_Spartan } from "next/font/google"

const font = League_Spartan({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "tasktop",
  description: "",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.className}>
      <body className="bg-gradient-to-br from-blue-100 to-yellow-100">{children}</body>
    </html>
  )
}
