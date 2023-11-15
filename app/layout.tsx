'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ShoppingCartProvider } from '@/context/ShoppingCartContext';
import ScrollOnTop from '@/components/scroll-on-top/scroll-on-top';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShoppingCartProvider>

          {children}
          <ScrollOnTop/>
          
        </ShoppingCartProvider>
        </body>
    </html>
  )
}
