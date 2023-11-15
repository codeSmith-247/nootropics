import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { NextAuthSessionProvider } from "@/app/providers/NextAuthProvider";


export const metadata: Metadata = {
  title: 'Nootropics',
  description: 'A simple test run with studio IX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='max-w-[2024px] mx-auto'>
      <NextAuthSessionProvider>
        <body>{children}</body>     
      </NextAuthSessionProvider>
    </html>
  )
}
