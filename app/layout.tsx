import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CARL Merch Store',
  description: 'Get your favorite CARL gear',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
