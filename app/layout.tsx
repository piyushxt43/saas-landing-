import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Draftly - Modern SaaS Solution by Piyush Singh",
  description: "Empowering businesses with cutting-edge SaaS solutions. Founded by Piyush Singh, scaled from 0 to 33K users and 800K social viewers.",
  authors: [{ name: "Piyush Singh" }],
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
