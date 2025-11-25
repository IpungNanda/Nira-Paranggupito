// ...existing code...
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // <-- tambahkan ini
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
// ...existing code...
const inter = Inter({ subsets: ['latin'] })
// ...existing code...
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
// ...existing code...