import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { HeroPattern } from '@/components/HeroPattern'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-zinc-900'>
        <Sidebar />
        <div>
          <Header />
          <HeroPattern />

          <div className="py-24 max-w-4xl px-8 mx-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
