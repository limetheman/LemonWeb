// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Lato } from 'next/font/google'

const nextFont = Lato({
  weight: ['400'],
  subsets:['latin'],
})

const colors = {
  brand: {
    900: "#FFFFFF"
  }
}

export const theme = extendTheme({ 
  colors,
  fonts: {
    body: nextFont.style.fontFamily,
    heading: nextFont.style.fontFamily,
  }
})

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}