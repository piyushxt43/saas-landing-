"use client"

import type React from "react"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
})

function ClientLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense
      fallback={
        <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
          </head>
          <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable}`}>
            <div>Loading...</div>
          </body>
        </html>
      }
    >
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </Suspense>
  )
}
