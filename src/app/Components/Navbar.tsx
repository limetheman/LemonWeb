'use client'
import { Box, Button, Divider, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, TableContainer } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Icon } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Container } from '@chakra-ui/react'
import NextLink from 'next/link'


export default function Navbar() {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex align="center" >
      <Flex
        pos="fixed"
        top="1rem"
        right="1rem"
        zIndex={20}
        >
          <Flex
            display={['none', 'none', 'flex', 'flex']}
            border="1px"
            backgroundColor="whiteAlpha.800"
            borderRadius="full"
            padding="5px"
            >
              <NextLink href="#" passHref={true} >
                <Button 
                  variant="ghost"
                  aria-label="About"
                  my={5}
                  w="100"
                >
                  About
                </Button>
              </NextLink>
              <NextLink href="#experience" passHref={true}>
                <Button 
                  variant="ghost"
                  aria-label="Experience"
                  my={5}
                  w="100"
                >
                  Experience
                </Button>
              </NextLink>
              <NextLink href="#projects" passHref={true}>
                <Button 
                  variant="ghost"
                  aria-label="Projects"
                  my={5}
                  w="100"
                >
                  Projects
                </Button>
              </NextLink>
              <NextLink href="#contact" passHref={true}>
                <Button 
                  variant="ghost"
                  aria-label="Contact"
                  my={5}
                  w="100"
                >
                  Contact
                </Button>
              </NextLink>
          </Flex>
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon/>}
            display= {['flex', 'flex', 'none', 'none']}
            onClick={() => changeDisplay('flex')}
          />
        <Flex
          w="100vw"
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          display={display}
          >
            <Flex justify="flex-end">
              <IconButton
                mt={2}
                mr={2}
                aria-label='Close Menu'
                size="lg" 
                icon={<CloseIcon/>}
                onClick={() => changeDisplay('none')}
                />
            </Flex>
        <Flex
            flexDir="column"
            align="center">
          <NextLink href="#" passHref={true}>
                <Button 
                  variant="ghost"
                  aria-label="About"
                  my={5}
                  w="100"
                  onClick={() => changeDisplay('none')}
                >
                  About
                </Button>
              </NextLink>
              <NextLink href="#experience" passHref={true}>
                <Button 
                  variant="ghost"
                  aria-label="Experience"
                  my={5}
                  w="100"
                  onClick={() => changeDisplay('none')}
                >
                  Experience
                </Button>
              </NextLink>
              <NextLink href="#projects" passHref={true}>
                <Button 
                  variant="ghost"
                  aria-label="Projects"
                  my={5}
                  w="100"
                  onClick={() => changeDisplay('none')}
                >
                  Projects
                </Button>
              </NextLink>
              <NextLink href="#contact" passHref={true}>
                <Button 
                  variant="ghost"
                  aria-label="Contact"
                  my={5}
                  w="100"
                  onClick={() => changeDisplay('none')}
                >
                  Contact
                </Button>
              </NextLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
