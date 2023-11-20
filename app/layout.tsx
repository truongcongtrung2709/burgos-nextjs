'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ShoppingCartProvider } from '@/context/ShoppingCartContext';
import ScrollOnTop from '@/components/scroll-on-top/scroll-on-top';
import MainLayout from '@/layouts/main/main-layout';
import { ShoppingCart } from '@/components/shopping-cart';
import { RatingStarsProvider } from '@/context/RatingStarsContext';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={inter.className}>
        <ShoppingCartProvider>
        <RatingStarsProvider>
          <MainLayout>
          {children}
          </MainLayout>
          <ScrollOnTop/>
          </RatingStarsProvider>
        </ShoppingCartProvider>
        </body>
    </html>
  )
}
