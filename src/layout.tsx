import './globals.css'
import Navbar from '../src/components/Navbar/Navbar'
import React from 'react'

export const metadata = {
  title: 'NAI',
  description: 'Created by UIMasters',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html style={{ height: '100%' }} lang="en">
      <body style={{ height: '100%' }}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
