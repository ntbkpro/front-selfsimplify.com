import Footer from '@/components/footer/footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'selfsimplify.com',
  description: 'Smart notebook for the active and growing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
