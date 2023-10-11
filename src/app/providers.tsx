// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript, ThemeConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Lato } from 'next/font/google'

const nextFont = Lato({
  weight: ['400'],
  subsets:['latin'],
})


const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({ 
  config,
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
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}