import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopBar from '@/components/TopBar'
import BottomBar from '@/components/BottomBar'
import LeftBar from '@/components/LeftBar'
import RightBar from '@/components/RightBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Authorization",
  description: "Build by Tanishka Yadav"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <TopBar/>
        <main className='flex flex-row'>
          <LeftBar/>
          <section className='main-container'>
            <div className='w-full max-w-4xl'>{children}</div>
          </section>
          <RightBar/>
        </main>

        <BottomBar/>


        {children}</body>
    </html>
    </ClerkProvider>
  )
}
