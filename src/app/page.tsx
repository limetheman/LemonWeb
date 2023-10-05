'use client'
import { Box, Button, ChakraProvider, Divider, Heading, SlideFade, Container, Text, useDisclosure, Image, Flex, Skeleton, SimpleGrid } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import React from "react";
import BuddyLogo from "../../public/studyBuddy.png"
import ProfilePicture from "../../public/SElfie.jpg"
import { AnimatedText } from "./Components/animatedText";
import Navbar from "./Components/Navbar";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure()
  const wordChanged = (newIndex: number) => {
  };

  const ImageStyles = {
    
  }


  return (
    <Box maxHeight="100%" bgGradient="linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )">
      <Navbar/>
      <Container as="div" maxW="80%">
        <Flex id="header">
          <Heading as="h1" marginBottom="0.5px" size="2xl" my="30px" p="10px">
            Hello👋, My Name is Liem!
          </Heading>
          <Text fontSize="xl">A Computer Science Student at the University of Minnesota</Text>
          <Divider margin="5px" color="black"/>
          <Image src={ProfilePicture.src} alt="Selfie!" height="150px" borderRadius="full" alignSelf="center" margin="auto"/>
            <AnimatedText wordChangedCallback={wordChanged}/>
        </Flex>
        <Box maxW='100%'>
          <Heading>
            Projects
          </Heading>
          <Divider/>
          <SimpleGrid columns={2} spacing={10}>
            
          </SimpleGrid>
        </Box>
        <Box maxW='100%'>
          <Heading>
            Outreach
          </Heading>
          <Divider/>
          <SimpleGrid columns={2} spacing={10}>

          </SimpleGrid>
        </Box>
        <Box maxW='100%'>
          <Heading>
            Contact
          </Heading>
          <Divider/>
          <SimpleGrid columns={2} spacing={10}>
            
            </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
