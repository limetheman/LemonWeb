import { Box, Button, Divider, Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, TableContainer } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Container } from '@chakra-ui/react'



export default function Navbar() {
  return (
    <Flex as="nav" minHeight="10px" maxW="100%" justifyContent="space-between" alignItems="center">
      <Link href='#aboutme' fontSize="lg">About Me</Link>
      <Link href='#experience' fontSize="lg">Experience</Link>
      <Link href='#' fontSize="lg" fontWeight="light">Liem Tran</Link>
      <Link href='#projects' fontSize="lg">Projects</Link>
      <Link href='#contact' fontSize="lg">Contact</Link>
    </Flex>
  )
}
