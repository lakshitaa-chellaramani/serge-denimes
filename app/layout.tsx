import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Serge DeNimes | Men\'s Silver Jewellery | Silver Rings & Necklaces',
  description: 'Created by Lakshitaa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
