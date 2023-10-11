import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import theme from './theme'
import { ColorModeScript } from '@chakra-ui/react'
import { NextScript } from 'next/document'

export const metadata: Metadata = {
  title: 'Liem-Dev',
  description: 'Learn about Me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
