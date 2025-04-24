import './globals.css'
import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Navbar from './lib/Navbar'
import Footer from './lib/Footer'
import {CartProvider} from './Context/store'
const oswald = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ethio Coffee',
  description: 'Premium Ethiopian coffee imports for specialty markets worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
