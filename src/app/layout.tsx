import './globals.css'
import type { Metadata } from 'next'
import { gilroy } from '@/fonts/fonts'
import NavBar from '@/components/nav-bar'

// Google Font
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Science for Economics',
  description: 'Master of Research in Economics and Business Management - SciEco định hướng đào tạo và tư vấn giúp khách hàng trang bị và nâng cao kiến thức, kỹ năng nghiên cứu khoa học định hướng xuất bản quốc tế',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gilroy.variable}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
