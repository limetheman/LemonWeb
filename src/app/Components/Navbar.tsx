import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, TableContainer } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Container } from '@chakra-ui/react'



export default function Navbar() {
  return (
    <Flex as="nav" bg="gray.200" justify="space-around">
        <Menu>
          <MenuButton
            as={IconButton}
            _hover={{bg: "gray.400"}}
            aria-label="Options"
            icon={<HamburgerIcon/>}
          />
          <MenuList>
            <MenuItem onClick={() => alert("About Me")}>
              About Me
            </MenuItem>
            <MenuItem onClick={() => alert("Projects")}>
              Projects
            </MenuItem>
            <MenuItem onClick={() => alert("Outreach")}>
              Outreach
            </MenuItem>
            <MenuItem onClick={() => alert("Contact")}>
              Contact
            </MenuItem>
          </MenuList>
        </Menu>
      <Button margin={"auto"} _hover={{bg: "gray.400"}} >Liem Tran</Button>
    </Flex>
  )
}
